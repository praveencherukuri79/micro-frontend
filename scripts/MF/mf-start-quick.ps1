<#
.SYNOPSIS
    Quick start for Module Federation (no build)

.DESCRIPTION
    Starts host and all remotes in preview mode WITHOUT building
    Use this when:
    - Dependencies are already installed
    - Remotes are already built (dist folders exist)
    
    This is the FASTEST way to restart all Module Federation applications
    Automatically cleans up ports before starting

.PREREQUISITES
    1. Dependencies installed: .\scripts\utils-install-all.ps1
    2. Remotes built: .\scripts\mf-build-all.ps1

.EXAMPLE
    .\scripts\mf-start-quick.ps1
#>

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Module Federation: Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Clean up MF ports only (5000-5006) - won't affect WC host on 5010
& "$PSScriptRoot\..\utils\utils-kill-ports.ps1" -Context MF
Write-Host ""

# Get all remotes from package.json metadata
Write-Host "Discovering remotes..." -ForegroundColor Yellow
$remotes = & "$PSScriptRoot\..\utils\utils-get-remotes.ps1"

# Validate remotes were found
$remoteCount = ($remotes | Measure-Object).Count
if (-not $remotes -or $remoteCount -eq 0) {
    Write-Host ""
    Write-Host "ERROR: No remotes found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Validating prerequisites..." -ForegroundColor Yellow
Write-Host ""

# Validation 1: Check if dependencies are installed
$missingDeps = @()
$hostPath = Join-Path $PSScriptRoot "..\..\host-react-mf"
$hostNodeModules = Join-Path $hostPath "node_modules"

Write-Host "Checking dependencies..." -ForegroundColor White

if (-not (Test-Path $hostNodeModules)) {
    $missingDeps += "host"
}

foreach ($remote in $remotes) {
    $remoteNodeModules = Join-Path $remote.Path "node_modules"
    if (-not (Test-Path $remoteNodeModules)) {
        $missingDeps += $remote.Name
    }
}

if (@($missingDeps).Count -gt 0) {
    Write-Host "  FAIL: Dependencies missing in:" -ForegroundColor Red
    foreach ($missing in $missingDeps) {
        Write-Host "    - $missing" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\utils-install-all.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use preview mode (installs automatically):" -ForegroundColor Yellow
    Write-Host "  .\scripts\mf-start-preview.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "  OK: All dependencies installed" -ForegroundColor Green

# Validation 2: Check if all remotes are built (have dist folders)
Write-Host ""
Write-Host "Checking builds..." -ForegroundColor White

$unbuiltRemotes = @()  # Array to collect names of unbuilt remotes

foreach ($remote in $remotes) {
    # Path to dist folder (derived from remote path)
    $distPath = Join-Path $remote.Path "dist"
    
    if (-not (Test-Path $distPath)) {
        $unbuiltRemotes += $remote.Name
    }
}

# If any remotes are not built, stop and show error
$unbuiltCount = ($unbuiltRemotes | Measure-Object).Count
if ($unbuiltCount -gt 0) {
    Write-Host "  FAIL: The following remotes are not built:" -ForegroundColor Red
    foreach ($remoteName in $unbuiltRemotes) {
        Write-Host "    - $remoteName" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\mf-build-all.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use preview mode (builds automatically):" -ForegroundColor Yellow
    Write-Host "  .\scripts\mf-start-preview.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}
Write-Host "  OK: All remotes built" -ForegroundColor Green

Write-Host ""
Write-Host "All prerequisites validated!" -ForegroundColor Green
Write-Host ""

# Start all remotes in preview mode (serves built dist folder)
Write-Host "Starting $remoteCount remote(s)..." -ForegroundColor Cyan
Write-Host ""

foreach ($remote in $remotes) {
    Write-Host "Starting: $($remote.Name) on port $($remote.Port)" -ForegroundColor Green
    
    Start-Process powershell `
        -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run preview" `
        -WindowStyle Normal
    
    # Small delay between starts to prevent race conditions
    Start-Sleep -Milliseconds 500
}

# Start host application
$hostPath = Join-Path $PSScriptRoot "..\..\host-react-mf"

Write-Host ""
Write-Host "Starting: host on port 5000" -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" `
    -WindowStyle Normal

# Display summary
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
Write-Host "Host (dev mode):" -ForegroundColor Yellow
Write-Host "  http://localhost:5000" -ForegroundColor White
Write-Host ""
