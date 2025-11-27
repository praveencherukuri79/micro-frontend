# Quick start script - Just starts all servers (no install, no build)
# Prerequisites: Dependencies installed and remotes already built

Write-Host "Starting all servers..." -ForegroundColor Cyan
Write-Host ""

# Kill any existing Node processes to free up ports
Write-Host "Cleaning up ports..." -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    Write-Host "Killed $($nodeProcesses.Count) existing Node process(es)" -ForegroundColor Green
    Start-Sleep -Seconds 2
} else {
    Write-Host "No existing Node processes found" -ForegroundColor Green
}
Write-Host ""
Write-Host "Shell Remote:         http://localhost:5003" -ForegroundColor Magenta
Write-Host "Products Remote:      http://localhost:5001" -ForegroundColor Magenta
Write-Host "Contact Remote:       http://localhost:5002" -ForegroundColor Magenta
Write-Host "Angular Webpack:      http://localhost:5004" -ForegroundColor Magenta
Write-Host "Angular Vite:         http://localhost:5006" -ForegroundColor Magenta
Write-Host "Vue Remote:           http://localhost:5005" -ForegroundColor Magenta
Write-Host "Host:            http://localhost:5000" -ForegroundColor Green
Write-Host ""

# Start remotes in preview mode
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/shell'; npm run preview"
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/products'; npm run preview"
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/contact'; npm run preview"
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/angular-webpack'; npm run preview"
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/angular-vite'; npm run preview"
Start-Sleep -Seconds 1

Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/vue'; npm run preview"
Start-Sleep -Seconds 2

# Start host in dev mode
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/host'; npm run dev"

Write-Host ""
Write-Host "All servers started!" -ForegroundColor Green
Write-Host "Open http://localhost:5000 in your browser" -ForegroundColor Cyan
Write-Host ""

