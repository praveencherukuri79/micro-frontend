# PowerShell script to start Module Federation with proper preview mode
# This script builds remotes and runs them in preview mode for proper Module Federation support

Write-Host "Starting Module Federation (Preview Mode)..." -ForegroundColor Cyan
Write-Host ""

Write-Host "Building all remotes..." -ForegroundColor Yellow
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
Write-Host "All remotes built successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Starting servers..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Shell Remote (Preview):    http://localhost:5003" -ForegroundColor Magenta
Write-Host "Products Remote (Preview): http://localhost:5001" -ForegroundColor Magenta
Write-Host "Contact Remote (Preview):  http://localhost:5002" -ForegroundColor Magenta  
Write-Host "Host Application (Dev):    http://localhost:5000" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C in any window to stop that server" -ForegroundColor Yellow
Write-Host ""

# Start remotes in preview mode (serves built files)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/shell'; npm run preview"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/products'; npm run preview"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/contact'; npm run preview"
Start-Sleep -Seconds 3

# Start host in dev mode
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/host'; npm run dev"

Write-Host ""
Write-Host "All servers started!" -ForegroundColor Green
Write-Host "Open http://localhost:5000 in your browser" -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: Remotes run in PREVIEW mode (serving built files)" -ForegroundColor Yellow
Write-Host "      To see changes in remotes, rebuild them and refresh the browser" -ForegroundColor Yellow
Write-Host ""
