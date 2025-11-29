<#
.SYNOPSIS
    Build and start Web Component host (full workflow)

.DESCRIPTION
    Complete workflow for web component integration:
    1. Builds all remotes as web components (in parallel)
    2. Copies built widgets to central widgets/ directory
    3. Copies widgets to host-webcomponent/public/widgets/
    4. Starts the host-webcomponent application
    
    Use wc-start-quick.ps1 for faster restarts (skips build and copy)

.EXAMPLE
    .\scripts\wc-start.ps1
#>

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Web Components: Full Workflow" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build all web components
Write-Host "Step 1 of 3: Building all web components..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\wc-build-all.ps1"

# Check if build succeeded (verify exit code from build script)
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Web component build failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Fix the build errors above and try again" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Build completed successfully!" -ForegroundColor Green

# Step 2: Copy widgets
Write-Host ""
Write-Host "Step 2 of 3: Copying widgets..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\wc-copy-widgets.ps1"

# Check if copy succeeded (verify exit code from copy script)
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Widget copy failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Check the errors above" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Copy completed successfully!" -ForegroundColor Green

# Step 3: Start host-webcomponent
Write-Host ""
Write-Host "Step 3 of 3: Starting host-webcomponent..." -ForegroundColor Yellow
Write-Host ""

# Path to host-webcomponent (derived from script root)
$hostPath = Join-Path $PSScriptRoot "..\host-webcomponent"

# Validate host directory exists
if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: host-webcomponent directory not found: $hostPath" -ForegroundColor Red
    exit 1
}

# Validate dependencies are installed for host
# Path to node_modules (derived from host path)
$nodeModulesPath = Join-Path $hostPath "node_modules"

if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "ERROR: Dependencies not installed for host-webcomponent" -ForegroundColor Red
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\utils-install-all.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "Starting host-webcomponent on port 5010..." -ForegroundColor Green

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
Write-Host "Web components will load on demand when you navigate to their pages" -ForegroundColor DarkYellow
Write-Host ""
