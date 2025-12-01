<#
.SYNOPSIS
    Quick start for Angular Module Federation Host (no build)

.DESCRIPTION
    Starts host-angular-mf WITHOUT building remotes
    Use this when:
    - Dependencies are already installed
    - Remotes are already built and running
    
    This is the FASTEST way to restart the Angular MF host

.PREREQUISITES
    1. Dependencies installed
    2. Remotes built and running in preview mode

.EXAMPLE
    .\scripts\MF\mf-start-angular-quick.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular MF Host: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-mf"

Write-Host "Validating prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Validation 1: Check if directory exists
Write-Host "1. Checking host-angular-mf directory..." -ForegroundColor White
if (-not (Test-Path $hostPath)) {
    Write-Host "   ERROR: host-angular-mf directory not found: $hostPath" -ForegroundColor Red
    exit 1
}
Write-Host "   OK: Directory found" -ForegroundColor Green

# Validation 2: Check if dependencies are installed
Write-Host "2. Checking dependencies (node_modules)..." -ForegroundColor White
$nodeModulesPath = Join-Path $hostPath "node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "   ERROR: Dependencies not installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  cd host-angular-mf; npm install" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "All prerequisites validated!" -ForegroundColor Green
Write-Host ""

# Start host
Write-Host "Starting Angular MF Host on port 5007..." -ForegroundColor Yellow

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
Write-Host "Note: Make sure remotes are running in preview mode" -ForegroundColor Yellow
Write-Host ""

