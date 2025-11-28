<#
.SYNOPSIS
    Build and start all applications in preview mode (Module Federation)

.DESCRIPTION
    Builds all remotes in parallel, then starts them in preview mode
    Preview mode serves production builds for testing before deployment
    Ports are automatically cleaned up before starting

.EXAMPLE
    .\scripts\mf-start-preview.ps1
#>

# Clean up ports first
& "$PSScriptRoot\utils-kill-ports.ps1"

Write-Host ""
Write-Host "Building and starting in preview mode..." -ForegroundColor Cyan
Write-Host ""

# Build all remotes first
Write-Host "Step 1: Building all remotes..." -ForegroundColor Yellow
& "$PSScriptRoot\mf-build-all.ps1"

Write-Host ""
Write-Host "Step 2: Starting preview servers..." -ForegroundColor Yellow
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Start all remotes in preview mode
foreach ($remote in $remotes) {
    Write-Host "Starting: $($remote.Name) on port $($remote.Port)" -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run preview" -WindowStyle Normal
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "Starting: host on port 5000" -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$(Join-Path $PSScriptRoot '..\host')'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "All applications started in preview mode!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes:" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)"
}
Write-Host ""
Write-Host "Host: http://localhost:5000" -ForegroundColor Yellow

