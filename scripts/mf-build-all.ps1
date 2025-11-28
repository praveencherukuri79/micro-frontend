<#
.SYNOPSIS
    Build all remotes for Module Federation in parallel

.DESCRIPTION
    Builds all remote applications for Module Federation mode
    Each remote is built in parallel to save time

.EXAMPLE
    .\scripts\mf-build-all.ps1
#>

Write-Host "Building all remotes for Module Federation..." -ForegroundColor Cyan
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

Write-Host "Found $($remotes.Count) remotes:" -ForegroundColor Yellow
$remotes | ForEach-Object { Write-Host "  - $($_.Name) ($($_.Type)) on port $($_.Port)" }
Write-Host ""

$startTime = Get-Date
$jobs = @()

# Build all remotes in parallel
foreach ($remote in $remotes) {
    Write-Host "Starting build: $($remote.Name)..." -ForegroundColor Yellow
    $jobs += Start-Job -ScriptBlock {
        param($remotePath)
        Set-Location $remotePath
        npm run build 2>&1
    } -ArgumentList $remote.Path -Name "Build-$($remote.Name)"
}

Write-Host ""
Write-Host "Waiting for all builds to complete..." -ForegroundColor Cyan
Write-Host ""

# Wait for all jobs
$jobs | Wait-Job | Out-Null

# Show results
foreach ($job in $jobs) {
    $remoteName = $job.Name.Replace("Build-", "")
    if ($job.State -eq "Completed") {
        Write-Host "[OK] $remoteName" -ForegroundColor Green
    }
    else {
        Write-Host "[FAIL] $remoteName" -ForegroundColor Red
        # Show error output
        $output = Receive-Job $job
        Write-Host $output -ForegroundColor Red
    }
}

# Cleanup
$jobs | Remove-Job

$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

Write-Host ""
Write-Host "Build completed: $($remotes.Count) remotes in $([math]::Round($duration, 1))s" -ForegroundColor Cyan

