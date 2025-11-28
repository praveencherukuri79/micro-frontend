<#
.SYNOPSIS
    Quick start - instantly start web component host (no build)

.DESCRIPTION
    Starts the host-webcomponent application WITHOUT building web components
    Use this when widgets are already built and copied to public/widgets/
    Fastest way to start the web component host

.PREREQUISITES
    - Dependencies installed (run utils-install-all.ps1)
    - Web components already built (run wc-build-all.ps1)
    - Widgets copied to public/widgets/ (run wc-copy-widgets.ps1)

.EXAMPLE
    .\scripts\wc-start-quick.ps1
#>

Write-Host "Quick start - launching web component host..." -ForegroundColor Cyan
Write-Host ""

# Check if widgets directory exists
$widgetsDir = Join-Path $PSScriptRoot "..\host-webcomponent\public\widgets"

if (-not (Test-Path $widgetsDir)) {
    Write-Host "ERROR: Widgets directory not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Or run full workflow:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-start.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Check if widgets actually exist
$widgetFiles = Get-ChildItem -Path $widgetsDir -Filter "*.js" -ErrorAction SilentlyContinue
if (-not $widgetFiles -or $widgetFiles.Count -eq 0) {
    Write-Host "ERROR: No widget files found in $widgetsDir" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host "  .\scripts\wc-copy-widgets.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Start host-webcomponent
$hostPath = Join-Path $PSScriptRoot "..\host-webcomponent"
Write-Host "Starting host-webcomponent on port 5010..." -ForegroundColor Green

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "Web Component Host: http://localhost:5010" -ForegroundColor Cyan
Write-Host ""
Write-Host "Web components will load on demand when you navigate to their pages" -ForegroundColor Yellow

