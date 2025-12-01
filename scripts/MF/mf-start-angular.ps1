<#
.SYNOPSIS
    Start Angular Module Federation Host

.DESCRIPTION
    Starts the Angular Module Federation host application on port 5007
    Prerequisites:
    - Dependencies installed
    - Remotes built and running

.EXAMPLE
    .\scripts\MF\mf-start-angular.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular MF Host: Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-mf"

# Validate host directory exists
if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: host-angular-mf directory not found: $hostPath" -ForegroundColor Red
    exit 1
}

# Check if dependencies are installed
$nodeModulesPath = Join-Path $hostPath "node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Dependencies not installed. Installing..." -ForegroundColor Yellow
    Set-Location $hostPath
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
}

Write-Host "Starting Angular MF Host on port 5007..." -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular MF Host Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL: http://localhost:5007" -ForegroundColor Green
Write-Host ""

