<#
.SYNOPSIS
    Start all applications in watch mode (Module Federation)

.DESCRIPTION
    Starts remotes in watch mode (build on file change + preview server)
    Useful for development when you want to see production-like behavior
    Ports are automatically cleaned up before starting

.EXAMPLE
    .\scripts\mf-start-watch.ps1
#>

# Clean up ports first
& "$PSScriptRoot\utils-kill-ports.ps1"

Write-Host ""
Write-Host "Starting in watch mode..." -ForegroundColor Cyan
Write-Host ""

# Build all remotes first (initial build)
Write-Host "Step 1: Initial build of all remotes..." -ForegroundColor Yellow
& "$PSScriptRoot\mf-build-all.ps1"

Write-Host ""
Write-Host "Step 2: Starting watch mode..." -ForegroundColor Yellow
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Start all remotes in watch mode
foreach ($remote in $remotes) {
    Write-Host "Starting: $($remote.Name) in watch mode on port $($remote.Port)" -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run dev:watch" -WindowStyle Normal
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "Starting: host on port 5000" -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$(Join-Path $PSScriptRoot '..\host')'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "All applications started in watch mode!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes:" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)"
}
Write-Host ""
Write-Host "Host: http://localhost:5000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Files will rebuild automatically on change" -ForegroundColor Cyan

