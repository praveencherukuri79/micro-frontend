<#
.SYNOPSIS
    Quick start - instantly start all applications (Module Federation)

.DESCRIPTION
    Starts host and all remotes in preview mode WITHOUT building
    Use this when dependencies are installed and remotes are already built
    Fastest way to start everything
    Ports are automatically cleaned up before starting

.PREREQUISITES
    - Dependencies installed (run utils-install-all.ps1)
    - Remotes already built (run mf-build-all.ps1)

.EXAMPLE
    .\scripts\mf-start-quick.ps1
#>

# Clean up ports first
& "$PSScriptRoot\utils-kill-ports.ps1"

Write-Host ""
Write-Host "Quick start - launching all applications..." -ForegroundColor Cyan
Write-Host ""

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Check if remotes are built
$unbuiltRemotes = @()
foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist"
    if (-not (Test-Path $distPath)) {
        $unbuiltRemotes += $remote.Name
    }
}

if ($unbuiltRemotes.Count -gt 0) {
    Write-Host "ERROR: The following remotes are not built:" -ForegroundColor Red
    $unbuiltRemotes | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\mf-build-all.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Or use preview mode (builds first):" -ForegroundColor Yellow
    Write-Host "  .\scripts\mf-start-preview.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Start all remotes in preview mode (no build)
foreach ($remote in $remotes) {
    Write-Host "Starting: $($remote.Name) on port $($remote.Port)" -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$($remote.Path)'; npm run preview" -WindowStyle Normal
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host "Starting: host on port 5000" -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$(Join-Path $PSScriptRoot '..\host')'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "All applications started!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Remotes:" -ForegroundColor Yellow
foreach ($remote in $remotes) {
    Write-Host "  http://localhost:$($remote.Port) - $($remote.Name)"
}
Write-Host ""
Write-Host "Host: http://localhost:5000" -ForegroundColor Yellow

