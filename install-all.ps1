# Install all dependencies in PARALLEL for faster setup

Write-Host "Installing all dependencies in PARALLEL..." -ForegroundColor Cyan
Write-Host ""

$startTime = Get-Date

# Start all installs in parallel
$jobs = @()

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/host
    npm install
} -Name "Install-Host"
Write-Host "Installing Host dependencies..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/shell
    npm install
} -Name "Install-Shell"
Write-Host "Installing Shell Remote dependencies..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/products
    npm install
} -Name "Install-Products"
Write-Host "Installing Products Remote dependencies..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/contact
    npm install
} -Name "Install-Contact"
Write-Host "Installing Contact Remote dependencies..." -ForegroundColor Green

Write-Host ""
Write-Host "Waiting for installations to complete..." -ForegroundColor Cyan

# Wait for all jobs to complete
$jobs | Wait-Job | Out-Null

# Check for failures
$failed = $false
foreach ($job in $jobs) {
    if ($job.State -eq "Failed") {
        Write-Host "Install failed: $($job.Name)" -ForegroundColor Red
        Receive-Job -Job $job
        $failed = $true
    } else {
        Write-Host "$($job.Name) completed successfully" -ForegroundColor Green
    }
}

# Clean up jobs
$jobs | Remove-Job

$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

Write-Host ""

if ($failed) {
    Write-Host "Installation failed! Check errors above." -ForegroundColor Red
    exit 1
} else {
    Write-Host "All dependencies installed successfully in $([math]::Round($duration, 1)) seconds!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  Run: .\start-watch.ps1    (for development with auto-rebuild)" -ForegroundColor White
    Write-Host "  Or:  .\start-preview.ps1  (for one-time build)" -ForegroundColor White
    Write-Host "  Or:  .\start.ps1          (if already built)" -ForegroundColor White
}

Write-Host ""

