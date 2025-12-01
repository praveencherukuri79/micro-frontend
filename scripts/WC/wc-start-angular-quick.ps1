<#
.SYNOPSIS
    Quick start for Angular Web Component Host (no build, no copy)

.DESCRIPTION
    Starts host-angular-wc WITHOUT building or copying web components
    Use this when:
    - Dependencies are already installed
    - Web components are already built
    - Widgets are already copied to public/widgets/
    
    This is the FASTEST way to restart the Angular web component host

.PREREQUISITES
    1. Dependencies installed: .\scripts\utils\utils-install-all.ps1
    2. Web components built: .\scripts\WC\wc-build-all.ps1
    3. Widgets copied: .\scripts\WC\wc-copy-widgets.ps1

.EXAMPLE
    .\scripts\WC\wc-start-angular-quick.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Path to host-angular-wc directory
$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-wc"

Write-Host "Validating prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Validation 1: Check if host-angular-wc directory exists
Write-Host "1. Checking host-angular-wc directory..." -ForegroundColor White
if (-not (Test-Path $hostPath)) {
    Write-Host "   ERROR: host-angular-wc directory not found: $hostPath" -ForegroundColor Red
    Write-Host ""
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
    Write-Host "  cd host-angular-wc; npm install" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use full workflow:" -ForegroundColor Yellow
    Write-Host "  .\scripts\WC\wc-start-angular.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Dependencies installed" -ForegroundColor Green

# Validation 3: Check if widgets directory exists
Write-Host "3. Checking widgets directory..." -ForegroundColor White
$widgetsDir = Join-Path $hostPath "public\widgets"

if (-not (Test-Path $widgetsDir)) {
    Write-Host "   ERROR: Widgets directory not found: $widgetsDir" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\WC\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\WC\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Widgets directory exists" -ForegroundColor Green

# Validation 4: Check if widget JavaScript files actually exist
Write-Host "4. Checking widget files..." -ForegroundColor White
$widgetFiles = @(Get-ChildItem -Path $widgetsDir -Filter "*.js" -ErrorAction SilentlyContinue)
$widgetCount = @($widgetFiles).Count

if ($widgetCount -eq 0) {
    Write-Host "   ERROR: No widget JavaScript files found in $widgetsDir" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\WC\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\WC\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Found $widgetCount widget file(s)" -ForegroundColor Green

# All validations passed
Write-Host ""
Write-Host "All prerequisites validated successfully!" -ForegroundColor Green
Write-Host ""

# Start the host-angular-wc application
Write-Host "Starting host-angular-wc on port 5011..." -ForegroundColor Yellow

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
Write-Host "Available Widgets:" -ForegroundColor Yellow
foreach ($widget in $widgetFiles) {
    Write-Host "  - $($widget.Name)" -ForegroundColor White
}
Write-Host ""

