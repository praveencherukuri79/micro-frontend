# PowerShell script to start Module Federation with WATCH mode
# Builds all remotes in PARALLEL, then starts with auto-rebuild

Write-Host "Starting Module Federation (Watch Mode)..." -ForegroundColor Cyan
Write-Host ""

Write-Host "Building all remotes in PARALLEL (initial build)..." -ForegroundColor Yellow
Write-Host ""

$startTime = Get-Date

# Start all builds in parallel using jobs
$jobs = @()

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/shell
    npm run build
} -Name "Build-Shell"
Write-Host "Building Shell Remote..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/products
    npm run build
} -Name "Build-Products"
Write-Host "Building Products Remote..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/contact
    npm run build
} -Name "Build-Contact"
Write-Host "Building Contact Remote..." -ForegroundColor Green

Write-Host ""
Write-Host "Waiting for builds to complete..." -ForegroundColor Cyan

# Wait for all jobs to complete
$jobs | Wait-Job | Out-Null

# Check for failures
$failed = $false
foreach ($job in $jobs) {
    if ($job.State -eq "Failed") {
        Write-Host "Build failed: $($job.Name)" -ForegroundColor Red
        Receive-Job -Job $job
        $failed = $true
    }
}

# Clean up jobs
$jobs | Remove-Job

$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

if ($failed) {
    Write-Host ""
    Write-Host "Build failed! Check errors above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Initial builds complete in $([math]::Round($duration, 1)) seconds!" -ForegroundColor Green
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
