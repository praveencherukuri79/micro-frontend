<#
.SYNOPSIS
    Quick start Angular WC Host (no build)

.DESCRIPTION
    Starts Angular WC Host WITHOUT building or copying.
    Prerequisites:
    - Dependencies installed
    - Web components already built and copied

.NOTES
    PORTS USED:
    - 5011: Angular WC Host

    This is the FASTEST way to restart the host.

.EXAMPLE
    .\scripts\WC\start-angular-quick.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-wc"

# ===========================================
# STEP 1: Verify Host Directory
# ===========================================
Write-Host "Step 1/4: Verifying host directory..." -ForegroundColor Yellow
Write-Host ""

if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: Host directory not found: $hostPath" -ForegroundColor Red
    exit 1
}

Write-Host "  Host directory: OK" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 2: Check Dependencies
# ===========================================
Write-Host "Step 2/4: Checking dependencies..." -ForegroundColor Yellow
Write-Host ""

$hostNodeModules = Join-Path $hostPath "node_modules"

if (-not (Test-Path $hostNodeModules)) {
    Write-Host "ERROR: Dependencies not installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run: .\scripts\utils\install-all.ps1" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host "  All dependencies installed" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 3: Verify Widgets
# ===========================================
Write-Host "Step 3/4: Verifying widgets..." -ForegroundColor Yellow
Write-Host ""

$widgetsDir = Join-Path $hostPath "public\widgets"

if (-not (Test-Path $widgetsDir)) {
    Write-Host "ERROR: Widgets directory not found" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run: .\scripts\WC\start-angular-preview.ps1" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host "  Widgets directory found" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 4: Clean Ports and Start
# ===========================================
Write-Host "Step 4/4: Cleaning ports and starting..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\..\utils\kill-ports.ps1" -Context WC

if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Port cleanup had issues, continuing anyway" -ForegroundColor DarkYellow
}
Write-Host ""

Write-Host "  Starting: host-angular-wc on port 5011" -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

# ===========================================
# SUMMARY
# ===========================================
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Angular WC Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5011" -ForegroundColor White
Write-Host ""

