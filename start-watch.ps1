# PowerShell script to start Module Federation with WATCH mode
# This script auto-rebuilds remotes when you edit files!

Write-Host "Starting Module Federation (Watch Mode)..." -ForegroundColor Cyan
Write-Host ""

Write-Host "Building all remotes (initial build)..." -ForegroundColor Yellow
Write-Host ""

# Build Shell Remote
Write-Host "Building Shell Remote..." -ForegroundColor Green
Set-Location remotes/shell
npm run build
Set-Location ../..

# Build Products Remote  
Write-Host "Building Products Remote..." -ForegroundColor Green
Set-Location remotes/products
npm run build
Set-Location ../..

# Build Contact Remote
Write-Host "Building Contact Remote..." -ForegroundColor Green
Set-Location remotes/contact
npm run build
Set-Location ../..

Write-Host ""
Write-Host "Initial builds complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Starting servers in WATCH mode..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Shell Remote:    http://localhost:5003 (auto-rebuild enabled)" -ForegroundColor Magenta
Write-Host "Products Remote: http://localhost:5001 (auto-rebuild enabled)" -ForegroundColor Magenta
Write-Host "Contact Remote:  http://localhost:5002 (auto-rebuild enabled)" -ForegroundColor Magenta  
Write-Host "Host:            http://localhost:5000" -ForegroundColor Green
Write-Host ""
Write-Host "WATCH MODE ENABLED - Remotes will auto-rebuild on file changes!" -ForegroundColor Yellow
Write-Host "Just edit, save, and refresh your browser!" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C in any window to stop that server" -ForegroundColor Cyan
Write-Host ""

# Start each remote with dev:watch (combines build:watch + preview)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/shell'; Write-Host 'Shell Remote - Watch Mode' -ForegroundColor Magenta; npm run dev:watch"
Start-Sleep -Seconds 2

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/products'; Write-Host 'Products Remote - Watch Mode' -ForegroundColor Magenta; npm run dev:watch"
Start-Sleep -Seconds 2

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/contact'; Write-Host 'Contact Remote - Watch Mode' -ForegroundColor Magenta; npm run dev:watch"
Start-Sleep -Seconds 3

# Start host in dev mode
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/host'; Write-Host 'Host Application - Dev Server' -ForegroundColor Green; npm run dev"

Write-Host ""
Write-Host "All servers started with WATCH mode!" -ForegroundColor Green
Write-Host "Open http://localhost:5000 in your browser" -ForegroundColor Cyan
Write-Host ""
Write-Host "How it works:" -ForegroundColor Yellow
Write-Host "  - Edit remote files -> Auto rebuilds -> Refresh browser" -ForegroundColor White
Write-Host "  - Edit host files -> Auto reloads (no refresh needed)" -ForegroundColor White
Write-Host ""
Write-Host "You will see 4 PowerShell windows (one per app)" -ForegroundColor Cyan
Write-Host ""
