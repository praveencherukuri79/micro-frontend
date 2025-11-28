<#
.SYNOPSIS
    Build all web components in parallel

.DESCRIPTION
    Builds web components for all remotes in parallel
    Each remote outputs a standalone web component to dist-webcomponent/
    Does NOT copy to widgets/ directory (use wc-copy-widgets.ps1 for that)

.EXAMPLE
    .\scripts\wc-build-all.ps1
#>

Write-Host "Building all web components..." -ForegroundColor Cyan
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

Write-Host "Found $($remotes.Count) remotes:" -ForegroundColor Yellow
$remotes | ForEach-Object { Write-Host "  - $($_.Name)" }
Write-Host ""

$startTime = Get-Date
$jobs = @()

# Build all web components in parallel
foreach ($remote in $remotes) {
    Write-Host "Starting build: $($remote.Name) web component..." -ForegroundColor Yellow
    $jobs += Start-Job -ScriptBlock {
        param($remotePath)
        Set-Location $remotePath
        npm run build:webcomponent 2>&1
    } -ArgumentList $remote.Path -Name "BuildWC-$($remote.Name)"
}

Write-Host ""
Write-Host "Waiting for all builds to complete..." -ForegroundColor Cyan
Write-Host ""

# Wait for all jobs
$jobs | Wait-Job | Out-Null

# Show results
foreach ($job in $jobs) {
    $remoteName = $job.Name.Replace("BuildWC-", "")
    if ($job.State -eq "Completed") {
        Write-Host "[OK] $remoteName" -ForegroundColor Green
    }
    else {
        Write-Host "[FAIL] $remoteName" -ForegroundColor Red
    }
}

# Cleanup
$jobs | Remove-Job

$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

Write-Host ""
Write-Host "Web component build completed: $($remotes.Count) widgets in $([math]::Round($duration, 1))s" -ForegroundColor Cyan

