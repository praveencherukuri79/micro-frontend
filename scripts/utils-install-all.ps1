<#
.SYNOPSIS
    Install dependencies for all Module Federation applications

.DESCRIPTION
    Installs npm dependencies in parallel for:
    - host (Module Federation host)
    - host-webcomponent (Web Component host)
    - All discovered remotes
    
    Runs installations in parallel for speed
    Verifies node_modules folder exists after each installation

.EXAMPLE
    .\scripts\utils-install-all.ps1
#>

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Installing Dependencies for All Apps" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Get all remotes from package.json metadata
Write-Host "Discovering remotes..." -ForegroundColor Yellow
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Build list of all applications to install (hosts + remotes)
$hostPath = Join-Path $PSScriptRoot "..\host"
$hostWCPath = Join-Path $PSScriptRoot "..\host-webcomponent"

# Create array of applications to install
$applications = @(
    [PSCustomObject]@{ Name = "host"; Path = $hostPath },
    [PSCustomObject]@{ Name = "host-webcomponent"; Path = $hostWCPath }
)

# Add all remotes to the applications array
if ($remotes) {
    foreach ($remote in $remotes) {
        $applications += [PSCustomObject]@{ Name = $remote.Name; Path = $remote.Path }
    }
}

# Count total applications
$totalApps = ($applications | Measure-Object).Count

Write-Host ""
Write-Host "Will install dependencies for $totalApps applications:" -ForegroundColor Green
foreach ($app in $applications) {
    Write-Host "  - $($app.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "Starting parallel installations..." -ForegroundColor Cyan
Write-Host ""

$startTime = Get-Date
$jobs = @()

# Start installation job for each application
foreach ($app in $applications) {
    # Validate application path exists
    if (-not (Test-Path $app.Path)) {
        Write-Host "WARNING: Path not found for $($app.Name): $($app.Path)" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "  Queuing install: $($app.Name)" -ForegroundColor Yellow
    
    # Start installation job
    $job = Start-Job -ScriptBlock {
        param($appPath, $appName)
        
        Set-Location $appPath
        
        # Run npm install and capture output
        $installOutput = npm install 2>&1
        $installExitCode = $LASTEXITCODE
        
        # Return result
        @{
            Output = $installOutput
            ExitCode = $installExitCode
        }
    } -ArgumentList $app.Path, $app.Name -Name "Install-$($app.Name)"
    
    $jobs += $job
}

Write-Host ""
Write-Host "Waiting for all installations to complete..." -ForegroundColor Cyan

# Wait for all jobs to finish
$jobs | Wait-Job | Out-Null

Write-Host ""
Write-Host "Verifying installations..." -ForegroundColor Cyan
Write-Host ""

# Collect and verify results
$results = @()

foreach ($job in $jobs) {
    # Extract app name from job name (format: "Install-AppName")
    $appName = $job.Name -replace '^Install-', ''
    
    Write-Host "Checking: $appName" -ForegroundColor White
    
    # Get job result
    $jobResult = Receive-Job $job -ErrorAction SilentlyContinue
    
    # Find the corresponding application to get its path
    $app = $applications | Where-Object { $_.Name -eq $appName } | Select-Object -First 1
    
    if (-not $app) {
        Write-Host "  Status: ERROR (Application not found in list)" -ForegroundColor Red
        continue
    }
    
    # Path to node_modules (this is what we verify to confirm installation)
    $nodeModulesPath = Join-Path $app.Path "node_modules"
    
    # Verify installation success by checking if node_modules exists
    $installSuccess = $false
    
    if ($job.State -ne "Completed") {
        Write-Host "  Status: FAILED (Job state: $($job.State))" -ForegroundColor Red
    }
    elseif (-not (Test-Path $nodeModulesPath)) {
        Write-Host "  Status: FAILED (node_modules not found)" -ForegroundColor Red
    }
    else {
        $installSuccess = $true
        Write-Host "  Status: SUCCESS (node_modules created)" -ForegroundColor Green
    }
    
    # Store result
    $results += [PSCustomObject]@{
        Name = $appName
        Success = $installSuccess
        ExitCode = if ($jobResult) { $jobResult.ExitCode } else { -1 }
        Output = if ($jobResult) { $jobResult.Output } else { @() }
    }
}

# Cleanup jobs
Write-Host ""
Write-Host "Cleaning up installation jobs..." -ForegroundColor DarkGray
$jobs | Remove-Job -Force

$endTime = Get-Date
$totalDuration = ($endTime - $startTime).TotalSeconds

# Count successes and failures
$successCount = 0
$failureCount = 0

foreach ($result in $results) {
    if ($result.Success) {
        $successCount++
    } else {
        $failureCount++
    }
}

$totalCount = ($results | Measure-Object).Count

# Display summary
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Installation Results" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

foreach ($result in $results) {
    if ($result.Success) {
        Write-Host "[OK] $($result.Name)" -ForegroundColor Green
    }
    else {
        Write-Host "[FAIL] $($result.Name)" -ForegroundColor Red
        
        # Show error output if available
        $outputCount = ($result.Output | Measure-Object).Count
        if ($result.Output -and $outputCount -gt 0) {
            Write-Host "  Error output (last 10 lines):" -ForegroundColor DarkRed
            $errorLines = $result.Output | Select-Object -Last 10
            foreach ($line in $errorLines) {
                Write-Host "    $line" -ForegroundColor DarkRed
            }
        }
    }
}

Write-Host ""
Write-Host "--------------------------------------------" -ForegroundColor Cyan

if ($failureCount -eq 0) {
    Write-Host "SUCCESS: All $totalCount installations completed in $([math]::Round($totalDuration, 1))s" -ForegroundColor Green
    Write-Host ""
    exit 0
}
else {
    Write-Host "FAILED: $failureCount/$totalCount installations failed in $([math]::Round($totalDuration, 1))s" -ForegroundColor Red
    Write-Host ""
    Write-Host "Failed applications:" -ForegroundColor Yellow
    foreach ($result in $results) {
        if (-not $result.Success) {
            Write-Host "  - $($result.Name)" -ForegroundColor DarkYellow
        }
    }
    Write-Host ""
    exit 1
}
