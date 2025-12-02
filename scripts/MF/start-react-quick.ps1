<#
.SYNOPSIS
    Quick start React MF Host (no build)

.DESCRIPTION
    Starts React MF Host and all remotes WITHOUT building.
    Prerequisites:
    - Dependencies installed
    - Remotes already built (dist folders exist)

.NOTES
    PORTS USED:
    - 5000: React MF Host
    - 5001-5006: Remote applications

    This is the FASTEST way to restart all applications.

.EXAMPLE
    .\scripts\MF\start-react-quick.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "React MF Host: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$hostPath = Join-Path $PSScriptRoot "..\..\host-react-mf"

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

$remotes = & "$PSScriptRoot\..\utils\get-remotes.ps1"
if (-not $remotes -or @($remotes).Count -eq 0) {
    Write-Host "ERROR: No remotes discovered" -ForegroundColor Red
    exit 1
}

$missingDeps = @()
$hostNodeModules = Join-Path $hostPath "node_modules"

if (-not (Test-Path $hostNodeModules)) {
    $missingDeps += "host-react-mf"
}

foreach ($remote in $remotes) {
    $remoteNodeModules = Join-Path $remote.Path "node_modules"
    if (-not (Test-Path $remoteNodeModules)) {
        $missingDeps += $remote.Name
    }
}

if (@($missingDeps).Count -gt 0) {
    Write-Host "ERROR: Dependencies missing in:" -ForegroundColor Red
    foreach ($missing in $missingDeps) {
        Write-Host "  - $missing" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Run: .\scripts\utils\install-all.ps1" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host "  All dependencies installed" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 3: Verify Remotes Are Built
# ===========================================
Write-Host "Step 3/4: Verifying remotes are built..." -ForegroundColor Yellow
Write-Host ""

$unbuiltRemotes = @()
foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist"
    if (-not (Test-Path $distPath)) {
        $unbuiltRemotes += $remote.Name
    }
}

if (@($unbuiltRemotes).Count -gt 0) {
    Write-Host "ERROR: The following remotes are not built:" -ForegroundColor Red
    foreach ($name in $unbuiltRemotes) {
        Write-Host "  - $name" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Run: .\scripts\MF\build-all.ps1" -ForegroundColor Yellow
    Write-Host "Or use: .\scripts\MF\start-react-preview.ps1" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host "  All remotes built" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 4: Clean Ports and Start
# ===========================================
Write-Host "Step 4/4: Cleaning ports and starting..." -ForegroundColor Yellow
Write-Host ""

& "$PSScriptRoot\..\utils\kill-ports.ps1" -Context MF

if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Port cleanup had issues, continuing anyway" -ForegroundColor DarkYellow
}
Write-Host ""

$remoteCount = @($remotes).Count
Write-Host "Starting $remoteCount remote(s) in preview mode..." -ForegroundColor Cyan
Write-Host ""

foreach ($remote in $remotes) {
    Write-Host "  Starting: $($remote.Name) on port $($remote.Port)" -ForegroundColor Green
    
    Start-Process powershell `
        -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run preview" `
        -WindowStyle Normal
    
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "  Starting: host-react-mf on port 5000" -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

# ===========================================
# SUMMARY
# ===========================================
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "All Applications Started" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes (preview mode):" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)" -ForegroundColor White
}
Write-Host ""
Write-Host "React Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5000" -ForegroundColor White
Write-Host ""

