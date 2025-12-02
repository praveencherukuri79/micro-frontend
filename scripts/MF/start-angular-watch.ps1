<#
.SYNOPSIS
    Start Angular MF Host in watch mode (auto-rebuild)

.DESCRIPTION
    Complete workflow for Angular Module Federation watch mode:
    Step 1: Check and install dependencies (if missing)
    Step 2: Verify host and remote directories exist
    Step 3: Clean up ports (5000-5007)
    Step 4: Initial build of all remotes in parallel
    Step 5: Build and copy Shell widget for layout
    Step 6: Start remotes in watch mode + Angular host in dev mode

.NOTES
    PORTS USED:
    - 5007: Angular MF Host (this script)
    - 5001-5006: Remote applications (watch mode)

    Files will automatically rebuild when changed.
    Use for active development.

.EXAMPLE
    .\scripts\MF\start-angular-watch.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Angular MF Host: Watch Mode" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$hostPath = Join-Path $PSScriptRoot "..\..\host-angular-mf"

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
    $missingDeps += "host-angular-mf"
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

& "$PSScriptRoot\..\utils\kill-ports.ps1" -Context MF

if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Port cleanup had issues, continuing anyway" -ForegroundColor DarkYellow
}
Write-Host ""

# ===========================================
# STEP 4: Initial Build of All Remotes
# ===========================================
Write-Host "Step 4/6: Initial build of all remotes..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\build-all.ps1"

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Initial build failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Fix the build errors above and try again" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Initial build completed successfully!" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 5: Build and Copy Shell Widget
# ===========================================
Write-Host "Step 5/6: Building shell web component for layout..." -ForegroundColor Yellow
Write-Host ""

$shellPath = Join-Path $PSScriptRoot "..\..\remotes\shell"
$shellDistWC = Join-Path $shellPath "dist-webcomponent"
$hostWidgetsDir = Join-Path $hostPath "public\widgets"

# Build shell web component
Write-Host "  Building shell web component..." -ForegroundColor Cyan
Push-Location $shellPath
npm run build:webcomponent 2>&1 | Out-Null
Pop-Location

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Shell web component build failed" -ForegroundColor Red
    exit 1
}

# Create widgets directory
if (-not (Test-Path $hostWidgetsDir)) {
    New-Item -ItemType Directory -Path $hostWidgetsDir -Force | Out-Null
}

# Copy shell widget to host
Write-Host "  Copying shell-widget.js to host..." -ForegroundColor Cyan
Copy-Item (Join-Path $shellDistWC "webcomponent.js") (Join-Path $hostWidgetsDir "shell-widget.js") -Force

Write-Host ""
Write-Host "Shell widget ready!" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 6: Start All Applications in Watch Mode
# ===========================================
Write-Host "Step 6/6: Starting all applications in watch mode..." -ForegroundColor Yellow
Write-Host ""

# Refresh remotes list
$remotes = & "$PSScriptRoot\..\utils\get-remotes.ps1"
$remoteCount = @($remotes).Count

Write-Host "Starting $remoteCount remote(s) in watch mode..." -ForegroundColor Cyan
Write-Host ""

# Start each remote in watch mode
foreach ($remote in $remotes) {
    Write-Host "  Starting: $($remote.Name) on port $($remote.Port) (watch)" -ForegroundColor Green
    
    Start-Process powershell `
        -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run dev:watch" `
        -WindowStyle Normal
    
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "  Starting: host-angular-mf on port 5007 (dev)" -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

# ===========================================
# SUMMARY
# ===========================================
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "All Applications Started in Watch Mode" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes (watch mode - auto-rebuild on file change):" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)" -ForegroundColor White
}
Write-Host ""
Write-Host "Angular Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5007" -ForegroundColor White
Write-Host ""
Write-Host "Files will automatically rebuild when changed!" -ForegroundColor Green
Write-Host ""
