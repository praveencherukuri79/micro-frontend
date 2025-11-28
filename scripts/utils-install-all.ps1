<#
.SYNOPSIS
    Install dependencies for all Module Federation applications

.DESCRIPTION
    Installs npm dependencies for host and all remote applications in parallel
    This is a one-time setup step before building or running

.EXAMPLE
    .\scripts\mf-install-all.ps1
#>

Write-Host "Installing dependencies for all applications..." -ForegroundColor Cyan
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Create install jobs for all remotes + host
$jobs = @()

# Install for host
Write-Host "Starting install: host" -ForegroundColor Yellow
$jobs += Start-Job -ScriptBlock {
    param($path)
    Set-Location $path
    npm install 2>&1
} -ArgumentList (Join-Path $PSScriptRoot "..\host") -Name "Install-host"

# Install for host-webcomponent
Write-Host "Starting install: host-webcomponent" -ForegroundColor Yellow
$jobs += Start-Job -ScriptBlock {
    param($path)
    Set-Location $path
    npm install 2>&1
} -ArgumentList (Join-Path $PSScriptRoot "..\host-webcomponent") -Name "Install-host-webcomponent"

# Install for all remotes
foreach ($remote in $remotes) {
    Write-Host "Starting install: $($remote.Name)" -ForegroundColor Yellow
    $jobs += Start-Job -ScriptBlock {
        param($path)
        Set-Location $path
        npm install 2>&1
    } -ArgumentList $remote.Path -Name "Install-$($remote.Name)"
}

Write-Host ""
Write-Host "Waiting for all installations to complete..." -ForegroundColor Cyan
Write-Host ""

# Wait for all jobs and show results
$startTime = Get-Date
$jobs | Wait-Job | Out-Null

foreach ($job in $jobs) {
    $appName = $job.Name.Replace("Install-", "")
    if ($job.State -eq "Completed") {
        Write-Host "[OK] $appName" -ForegroundColor Green
    }
    else {
        Write-Host "[FAIL] $appName" -ForegroundColor Red
    }
}

# Cleanup jobs
$jobs | Remove-Job

$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

Write-Host ""
Write-Host "Installation completed in $([math]::Round($duration, 1))s" -ForegroundColor Cyan

