<#
.SYNOPSIS
    Build and start Web Component host (full workflow)

.DESCRIPTION
    Complete workflow for web component integration:
    1. Checks and installs dependencies (if missing)
    2. Builds all remotes as web components (in parallel)
    3. Copies built widgets to central widgets/ directory
    4. Copies widgets to host-webcomponent/public/widgets/
    5. Starts the host-webcomponent application
    
    Use wc-start-quick.ps1 for faster restarts (skips build and copy)

.EXAMPLE
    .\scripts\wc-start.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Web Components: Full Workflow" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Step 0: Check dependencies
Write-Host "Checking dependencies..." -ForegroundColor Yellow
Write-Host ""

# Get all remotes to check their dependencies
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"
$hostWCPath = Join-Path $PSScriptRoot "..\host-webcomponent"

# Check if any project is missing node_modules
$missingDeps = @()

# Check host-webcomponent
$hostNodeModules = Join-Path $hostWCPath "node_modules"
if (-not (Test-Path $hostNodeModules)) {
    $missingDeps += "host-webcomponent"
}

# Check all remotes
if ($remotes) {
    foreach ($remote in $remotes) {
        $remoteNodeModules = Join-Path $remote.Path "node_modules"
        if (-not (Test-Path $remoteNodeModules)) {
            $missingDeps += $remote.Name
        }
    }
}

# If any dependencies are missing, install them
if (@($missingDeps).Count -gt 0) {
    Write-Host "Missing dependencies detected in:" -ForegroundColor Yellow
    foreach ($missing in $missingDeps) {
        Write-Host "  - $missing" -ForegroundColor DarkYellow
    }
    Write-Host ""
    Write-Host "Installing dependencies for all projects..." -ForegroundColor Cyan
    Write-Host ""
    
    & "$PSScriptRoot\utils-install-all.ps1"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "ERROR: Failed to install dependencies" -ForegroundColor Red
        Write-Host ""
        exit 1
    }
    
    Write-Host ""
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "All dependencies are installed." -ForegroundColor Green
    Write-Host ""
}

# Ensure required output directories exist
$widgetsDir = Join-Path $PSScriptRoot "..\widgets"
$publicWidgetsDir = Join-Path $hostWCPath "public\widgets"

if (-not (Test-Path $widgetsDir)) {
    Write-Host "Creating widgets directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $widgetsDir -Force | Out-Null
}

if (-not (Test-Path $publicWidgetsDir)) {
    Write-Host "Creating public widgets directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $publicWidgetsDir -Force | Out-Null
}

# Step 0.5: Clean up WC port only (5010) - won't affect MF servers on 5000-5006
Write-Host "Cleaning up Web Component port..." -ForegroundColor Yellow
& "$PSScriptRoot\utils-kill-ports.ps1" -Context WC

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

# Validate host directory exists (uses $hostWCPath defined earlier)
if (-not (Test-Path $hostWCPath)) {
    Write-Host "ERROR: host-webcomponent directory not found: $hostWCPath" -ForegroundColor Red
    exit 1
}

Write-Host "Starting host-webcomponent on port 5010..." -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostWCPath'; npm run dev" `
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
