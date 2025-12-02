<#
.SYNOPSIS
    Build and start Angular WC Host in preview mode

.DESCRIPTION
    Complete workflow for Angular Web Component preview:
    Step 1: Check and install dependencies (if missing)
    Step 2: Verify host directory exists
    Step 3: Clean up ports (5011)
    Step 4: Build all web components in parallel
    Step 5: Copy widgets to host
    Step 6: Start Angular WC host

.NOTES
    PORTS USED:
    - 5011: Angular WC Host

    For quick start without building, use: start-angular-quick.ps1

.EXAMPLE
    .\scripts\WC\start-angular-preview.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular WC Host: Build and Preview" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-wc"

# ===========================================
# STEP 1: Check and Install Dependencies
# ===========================================
Write-Host "Step 1/6: Checking dependencies..." -ForegroundColor Yellow
Write-Host ""

# Verify host directory exists first
if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: Host directory not found: $hostPath" -ForegroundColor Red
    exit 1
}

# Get all remotes
$remotes = & "$PSScriptRoot\..\utils\get-remotes.ps1"
if (-not $remotes -or @($remotes).Count -eq 0) {
    Write-Host "ERROR: No remotes discovered" -ForegroundColor Red
    exit 1
}

# Check if any project is missing node_modules
$missingDeps = @()

# Check host
$hostNodeModules = Join-Path $hostPath "node_modules"
if (-not (Test-Path $hostNodeModules)) {
    $missingDeps += "host-angular-wc"
}

# Check all remotes
foreach ($remote in $remotes) {
    $remoteNodeModules = Join-Path $remote.Path "node_modules"
    if (-not (Test-Path $remoteNodeModules)) {
        $missingDeps += $remote.Name
    }
}

# If any dependencies are missing, install them
if (@($missingDeps).Count -gt 0) {
    Write-Host "Missing dependencies in:" -ForegroundColor Yellow
    foreach ($missing in $missingDeps) {
        Write-Host "  - $missing" -ForegroundColor DarkYellow
    }
    Write-Host ""
    Write-Host "Installing dependencies for all projects..." -ForegroundColor Cyan
    Write-Host ""
    
    & "$PSScriptRoot\..\utils\install-all.ps1"
    
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

# ===========================================
# STEP 2: Verify Directories
# ===========================================
Write-Host "Step 2/6: Verifying directories..." -ForegroundColor Yellow
Write-Host ""

if (-not (Test-Path $hostPath)) {
    Write-Host "ERROR: Host directory not found: $hostPath" -ForegroundColor Red
    exit 1
}

Write-Host "  Host directory: OK" -ForegroundColor Green
Write-Host "  Remotes directory: OK" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 3: Clean Up Ports
# ===========================================
Write-Host "Step 3/6: Cleaning up ports..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\..\utils\kill-ports.ps1" -Context WC

if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Port cleanup had issues, continuing anyway" -ForegroundColor DarkYellow
}
Write-Host ""

# ===========================================
# STEP 4: Build All Web Components
# ===========================================
Write-Host "Step 4/6: Building all web components..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\build-all.ps1"

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Build failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Fix the build errors above and try again" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 5: Copy Widgets
# ===========================================
Write-Host "Step 5/6: Copying widgets..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\copy-widgets.ps1"

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Widget copy failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Check the errors above" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Copy completed successfully!" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 6: Start Host
# ===========================================
Write-Host "Step 6/6: Starting Angular WC host..." -ForegroundColor Yellow
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
Write-Host "Angular WC Host Started Successfully" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Angular WC Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5011" -ForegroundColor White
Write-Host ""
Write-Host "Web components will load on demand when you navigate to their pages" -ForegroundColor DarkYellow
Write-Host ""

