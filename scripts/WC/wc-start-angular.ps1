<#
.SYNOPSIS
    Start Angular Web Component Host

.DESCRIPTION
    Starts the Angular Web Component host application on port 5011
    Prerequisites:
    - Dependencies installed
    - Web components built and copied to public/widgets/

.EXAMPLE
    .\scripts\WC\wc-start-angular.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host: Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-wc"

# Validate host directory exists
if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: host-angular-wc directory not found: $hostPath" -ForegroundColor Red
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

# Check if widgets directory exists
$widgetsDir = Join-Path $hostPath "public\widgets"
if (-not (Test-Path $widgetsDir)) {
    Write-Host "WARNING: Widgets directory not found. Creating..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $widgetsDir -Force | Out-Null
}

Write-Host "Starting Angular WC Host on port 5011..." -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL: http://localhost:5011" -ForegroundColor Green
Write-Host ""
Write-Host "Make sure to copy widgets to public/widgets/ first:" -ForegroundColor Yellow
Write-Host "  .\scripts\WC\wc-copy-widgets.ps1" -ForegroundColor White
Write-Host ""

