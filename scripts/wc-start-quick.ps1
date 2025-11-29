<#
.SYNOPSIS
    Quick start for Web Component host (no build, no copy)

.DESCRIPTION
    Starts host-webcomponent WITHOUT building or copying web components
    Use this when:
    - Dependencies are already installed
    - Web components are already built
    - Widgets are already copied to public/widgets/
    
    This is the FASTEST way to restart the web component host

.PREREQUISITES
    1. Dependencies installed: .\scripts\utils-install-all.ps1
    2. Web components built: .\scripts\wc-build-all.ps1
    3. Widgets copied: .\scripts\wc-copy-widgets.ps1

.EXAMPLE
    .\scripts\wc-start-quick.ps1
#>

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Web Components: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Path to host-webcomponent directory
$hostPath = Join-Path $PSScriptRoot "..\host-webcomponent"

Write-Host "Validating prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Validation 1: Check if host-webcomponent directory exists
Write-Host "1. Checking host-webcomponent directory..." -ForegroundColor White
if (-not (Test-Path $hostPath)) {
    Write-Host "   ERROR: host-webcomponent directory not found: $hostPath" -ForegroundColor Red
    Write-Host ""
    exit 1
}
Write-Host "   OK: Directory found" -ForegroundColor Green

# Validation 2: Check if dependencies are installed
Write-Host "2. Checking dependencies (node_modules)..." -ForegroundColor White
# Path to node_modules (derived from host path)
$nodeModulesPath = Join-Path $hostPath "node_modules"

if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "   ERROR: Dependencies not installed (node_modules not found)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\utils-install-all.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Dependencies installed" -ForegroundColor Green

# Validation 3: Check if widgets directory exists
Write-Host "3. Checking widgets directory..." -ForegroundColor White
# Path to widgets (derived from host path)
$widgetsDir = Join-Path $hostPath "public\widgets"

if (-not (Test-Path $widgetsDir)) {
    Write-Host "   ERROR: Widgets directory not found: $widgetsDir" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use full workflow:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-start.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Widgets directory exists" -ForegroundColor Green

# Validation 4: Check if widget JavaScript files actually exist
Write-Host "4. Checking widget files..." -ForegroundColor White
# Get all .js files in widgets directory (using @() to ensure array)
$widgetFiles = @(Get-ChildItem -Path $widgetsDir -Filter "*.js" -ErrorAction SilentlyContinue)

# Count widget files
$widgetCount = $widgetFiles.Count

if ($widgetCount -eq 0) {
    Write-Host "   ERROR: No widget JavaScript files found in $widgetsDir" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "   OK: Found $widgetCount widget file(s)" -ForegroundColor Green

# All validations passed
Write-Host ""
Write-Host "All prerequisites validated successfully!" -ForegroundColor Green
Write-Host ""

# Start the host-webcomponent application
Write-Host "Starting host-webcomponent on port 5010..." -ForegroundColor Yellow

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Web Component Host Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "URL: http://localhost:5010" -ForegroundColor Green
Write-Host ""
Write-Host "Available Widgets:" -ForegroundColor Yellow
foreach ($widget in $widgetFiles) {
    Write-Host "  - $($widget.Name)" -ForegroundColor White
}
Write-Host ""
Write-Host "Web components will load on demand when you navigate to their pages" -ForegroundColor DarkYellow
Write-Host ""
