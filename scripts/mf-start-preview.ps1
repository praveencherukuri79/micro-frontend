<#
.SYNOPSIS
    Build and start Module Federation in preview mode

.DESCRIPTION
    Complete workflow for Module Federation preview:
    1. Cleans up ports (kills existing Node processes)
    2. Builds all remotes in parallel
    3. Starts remotes in preview mode (serves production builds)
    4. Starts host in dev mode
    
    This is the RECOMMENDED mode for development and testing

.EXAMPLE
    .\scripts\mf-start-preview.ps1
#>

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Module Federation: Build and Preview" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean up ports
Write-Host "Step 1 of 3: Cleaning up ports..." -ForegroundColor Yellow

& "$PSScriptRoot\utils-kill-ports.ps1"

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
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

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
$hostPath = Join-Path $PSScriptRoot "..\host"

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
