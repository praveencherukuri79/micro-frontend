<#
.SYNOPSIS
    Install dependencies for all Module Federation applications

.DESCRIPTION
    Installs npm dependencies in parallel for:
    - host (Module Federation host)
    - host-webcomponent (Web Component host)
    - All discovered remotes
    
    Uses background processes (not jobs) to inherit PATH correctly
    Verifies node_modules folder exists after each installation

.EXAMPLE
    .\scripts\utils\install-all.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Installing Dependencies for All Apps" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ===========================================
# STEP 1: Validate npm is available
# ===========================================
Write-Host "Validating npm..." -ForegroundColor Yellow

try {
    $npmVersion = npm --version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "npm command failed"
    }
    Write-Host "  npm version: $npmVersion" -ForegroundColor Green
}
catch {
    Write-Host "ERROR: npm is not available" -ForegroundColor Red
    Write-Host "Please ensure Node.js and npm are installed and in your PATH" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# ===========================================
# STEP 2: Discover all applications
# ===========================================
Write-Host "Discovering applications..." -ForegroundColor Yellow

$remotes = & "$PSScriptRoot\get-remotes.ps1"

# Build list of all applications to install (hosts + remotes)
$hostReactMFPath = Join-Path $PSScriptRoot "..\..\host-react-mf"
$hostReactWCPath = Join-Path $PSScriptRoot "..\..\host-react-wc"
$hostAngularMFPath = Join-Path $PSScriptRoot "..\..\host-angular-mf"
$hostAngularWCPath = Join-Path $PSScriptRoot "..\..\host-angular-wc"

$applications = @()

# Add React hosts
if (Test-Path $hostReactMFPath) {
    $applications += [PSCustomObject]@{ Name = "host-react-mf"; Path = (Resolve-Path $hostReactMFPath).Path }
}
if (Test-Path $hostReactWCPath) {
    $applications += [PSCustomObject]@{ Name = "host-react-wc"; Path = (Resolve-Path $hostReactWCPath).Path }
}

# Add Angular hosts
if (Test-Path $hostAngularMFPath) {
    $applications += [PSCustomObject]@{ Name = "host-angular-mf"; Path = (Resolve-Path $hostAngularMFPath).Path }
}
if (Test-Path $hostAngularWCPath) {
    $applications += [PSCustomObject]@{ Name = "host-angular-wc"; Path = (Resolve-Path $hostAngularWCPath).Path }
}

# Add all remotes
if ($remotes) {
    foreach ($remote in $remotes) {
        if (Test-Path $remote.Path) {
            $applications += [PSCustomObject]@{ Name = $remote.Name; Path = $remote.Path }
        }
    }
}

$totalApps = @($applications).Count

if ($totalApps -eq 0) {
    Write-Host "ERROR: No applications found to install" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Will install dependencies for $totalApps applications:" -ForegroundColor Green
foreach ($app in $applications) {
    Write-Host "  - $($app.Name)" -ForegroundColor White
}
Write-Host ""

# ===========================================
# STEP 3: Start parallel npm install jobs
# ===========================================
Write-Host "Starting parallel installations..." -ForegroundColor Cyan
Write-Host ""

$startTime = Get-Date
$jobs = @()

foreach ($app in $applications) {
    Write-Host "  Starting: $($app.Name)" -ForegroundColor Yellow
    
    # Start npm install as a PowerShell background job
    $job = Start-Job -ScriptBlock {
        param($appPath)
        Set-Location $appPath
        npm install 2>&1
        exit $LASTEXITCODE
    } -ArgumentList $app.Path
    
    $jobs += [PSCustomObject]@{
        Name = $app.Name
        Path = $app.Path
        Job = $job
    }
}

Write-Host ""
Write-Host "Waiting for installations to complete..." -ForegroundColor Cyan
Write-Host "(Checking progress every 3 seconds)" -ForegroundColor DarkGray
Write-Host ""

# ===========================================
# STEP 4: Monitor progress and wait for jobs
# ===========================================
$results = @()
$completedJobs = @{}

# Monitor loop - show progress while jobs are running
while ($true) {
    $runningCount = 0
    $completedCount = 0
    $statusLine = @()
    
    foreach ($item in $jobs) {
        $jobState = $item.Job.State
        
        if ($jobState -eq "Running") {
            $runningCount++
            $statusLine += "$($item.Name)[...]"
        }
        elseif ($jobState -eq "Completed" -or $jobState -eq "Failed") {
            if (-not $completedJobs.ContainsKey($item.Name)) {
                # Job just completed - process it
                $completedJobs[$item.Name] = $true
                
                $output = Receive-Job -Job $item.Job
                $nodeModulesPath = Join-Path $item.Path "node_modules"
                $success = Test-Path $nodeModulesPath
                
                $failureReason = ""
                if (-not $success) {
                    $failureReason = "node_modules not created"
                }
                
                # Show result
                if ($success) {
                    Write-Host "  [OK] $($item.Name)" -ForegroundColor Green
                }
                else {
                    Write-Host "  [FAIL] $($item.Name) - $failureReason" -ForegroundColor Red
                    if ($output) {
                        $lastLines = ($output | Out-String).Split("`n") | Select-Object -Last 5
                        foreach ($line in $lastLines) {
                            if ($line.Trim()) {
                                Write-Host "    $line" -ForegroundColor DarkRed
                            }
                        }
                    }
                }
                
                $results += [PSCustomObject]@{
                    Name = $item.Name
                    Success = $success
                    FailureReason = $failureReason
                }
                
                Remove-Job -Job $item.Job -Force
            }
            $completedCount++
        }
    }
    
    # Exit loop when all jobs are done
    if ($completedCount -eq $totalApps) {
        break
    }
    
    # Show progress status
    if ($runningCount -gt 0) {
        $elapsed = [math]::Round(((Get-Date) - $startTime).TotalSeconds, 0)
        Write-Host "  [$elapsed`s] Running: $($statusLine -join ', ')" -ForegroundColor DarkGray
    }
    
    Start-Sleep -Seconds 3
}

$endTime = Get-Date
$totalDuration = ($endTime - $startTime).TotalSeconds

# ===========================================
# STEP 5: Display summary
# ===========================================
$successCount = @($results | Where-Object { $_.Success }).Count
$failureCount = @($results | Where-Object { -not $_.Success }).Count

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Installation Summary" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

if ($failureCount -eq 0) {
    Write-Host "SUCCESS: All $totalApps installations completed in $([math]::Round($totalDuration, 1))s" -ForegroundColor Green
    Write-Host ""
    exit 0
}
else {
    Write-Host "FAILED: $failureCount of $totalApps installations failed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Failed applications:" -ForegroundColor Yellow
    foreach ($result in $results) {
        if (-not $result.Success) {
            Write-Host "  - $($result.Name): $($result.FailureReason)" -ForegroundColor DarkYellow
        }
    }
    Write-Host ""
    exit 1
}
