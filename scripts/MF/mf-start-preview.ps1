<#
.SYNOPSIS
    Build and start Module Federation in preview mode

.DESCRIPTION
    Complete workflow for Module Federation preview:
    1. Checks and installs dependencies (if missing)
    2. Cleans up ports (kills existing Node processes)
    3. Builds all remotes in parallel
    4. Starts remotes in preview mode (serves production builds)
    5. Starts host in dev mode
    
    This is the RECOMMENDED mode for development and testing

.EXAMPLE
    .\scripts\mf-start-preview.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Module Federation: Build and Preview" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Step 0: Check dependencies
Write-Host "Checking dependencies..." -ForegroundColor Yellow
Write-Host ""

# Get all remotes to check their dependencies
$remotes = & "$PSScriptRoot\..\utils\utils-get-remotes.ps1"
$hostPath = Join-Path $PSScriptRoot "..\..\host-react-mf"

# Check if any project is missing node_modules
$missingDeps = @()

# Check host
$hostNodeModules = Join-Path $hostPath "node_modules"
if (-not (Test-Path $hostNodeModules)) {
    $missingDeps += "host"
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
    
    & "$PSScriptRoot\..\utils\utils-install-all.ps1"
    
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

# Step 1: Clean up MF ports only (5000-5006)
Write-Host "Step 1 of 3: Cleaning up Module Federation ports..." -ForegroundColor Yellow

& "$PSScriptRoot\..\utils\utils-kill-ports.ps1" -Context MF

Write-Host "Port cleanup completed" -ForegroundColor Green

# Step 2: Build all remotes
Write-Host ""
Write-Host "Step 2 of 3: Building all remotes..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\mf-build-all.ps1"

# Check if build succeeded (verify exit code from build script)
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Build failed (exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "Fix the build errors above and try again" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "Build completed successfully!" -ForegroundColor Green

# Step 3: Start all applications
Write-Host ""
Write-Host "Step 3 of 3: Starting all applications..." -ForegroundColor Yellow
Write-Host ""

# Get all remotes (already validated by build script, but we need the list to start them)
$remotes = & "$PSScriptRoot\..\utils\utils-get-remotes.ps1"

# Count remotes
$remoteCount = ($remotes | Measure-Object).Count

Write-Host "Starting $remoteCount remote(s) in preview mode..." -ForegroundColor Cyan
Write-Host ""

# Start each remote in preview mode (serves built dist folder)
foreach ($remote in $remotes) {
    Write-Host "  Starting: $($remote.Name) on port $($remote.Port)" -ForegroundColor Green
    
    Start-Process powershell `
        -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run preview" `
        -WindowStyle Normal
    
    # Small delay between starts to prevent race conditions
    Start-Sleep -Milliseconds 500
}

# Start host application
# Path to host (derived from script root)
$hostPath = Join-Path $PSScriptRoot "..\..\host-react-mf"

Write-Host ""
Write-Host "  Starting: host on port 5000" -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

# Display summary
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "All Applications Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes (preview mode - production builds):" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)" -ForegroundColor White
}
Write-Host ""
Write-Host "Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5000" -ForegroundColor White
Write-Host ""
