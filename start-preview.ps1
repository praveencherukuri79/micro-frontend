# PowerShell script to start Module Federation with proper preview mode
# Builds all remotes in PARALLEL for faster startup

Write-Host "Starting Module Federation (Preview Mode)..." -ForegroundColor Cyan
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

# Check if dependencies are installed
$needsInstall = $false

if (-not (Test-Path "host/node_modules")) {
    Write-Host "Host dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/shell/node_modules")) {
    Write-Host "Shell dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/products/node_modules")) {
    Write-Host "Products dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/contact/node_modules")) {
    Write-Host "Contact dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/angular-webpack/node_modules")) {
    Write-Host "Angular Webpack dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/angular-vite/node_modules")) {
    Write-Host "Angular Vite dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}
if (-not (Test-Path "remotes/vue/node_modules")) {
    Write-Host "Vue dependencies missing..." -ForegroundColor Yellow
    $needsInstall = $true
}

if ($needsInstall) {
    Write-Host ""
    Write-Host "Installing dependencies in PARALLEL..." -ForegroundColor Cyan
    Write-Host ""
    
    $installJobs = @()
    
    if (-not (Test-Path "host/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/host
            npm install
        } -Name "Install-Host"
        Write-Host "Installing Host..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/shell/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/shell
            npm install
        } -Name "Install-Shell"
        Write-Host "Installing Shell..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/products/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/products
            npm install
        } -Name "Install-Products"
        Write-Host "Installing Products..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/contact/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/contact
            npm install
        } -Name "Install-Contact"
        Write-Host "Installing Contact..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/angular-webpack/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/angular-webpack
            npm install
        } -Name "Install-Angular-Webpack"
        Write-Host "Installing Angular Webpack..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/angular-vite/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/angular-vite
            npm install
        } -Name "Install-Angular-Vite"
        Write-Host "Installing Angular Vite..." -ForegroundColor Green
    }
    
    if (-not (Test-Path "remotes/vue/node_modules")) {
        $installJobs += Start-Job -ScriptBlock { 
            Set-Location $using:PWD/remotes/vue
            npm install
        } -Name "Install-Vue"
        Write-Host "Installing Vue..." -ForegroundColor Green
    }
    
    # Wait for all installations to complete
    $installJobs | Wait-Job | Receive-Job
    $installJobs | Remove-Job
    
    Write-Host ""
    Write-Host "All dependencies installed!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "Building all remotes in PARALLEL..." -ForegroundColor Yellow
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

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/angular-webpack
    npm run build
} -Name "Build-Angular-Webpack"
Write-Host "Building Angular Webpack Remote..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/angular-vite
    npm run build
} -Name "Build-Angular-Vite"
Write-Host "Building Angular Vite Remote..." -ForegroundColor Green

$jobs += Start-Job -ScriptBlock {
    Set-Location $using:PWD/remotes/vue
    npm run build
} -Name "Build-Vue"
Write-Host "Building Vue Remote..." -ForegroundColor Green

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
Write-Host "All remotes built successfully in $([math]::Round($duration, 1)) seconds!" -ForegroundColor Green
Write-Host ""
Write-Host "Starting servers..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Shell Remote (Preview):         http://localhost:5003" -ForegroundColor Magenta
Write-Host "Products Remote (Preview):      http://localhost:5001" -ForegroundColor Magenta
Write-Host "Contact Remote (Preview):       http://localhost:5002" -ForegroundColor Magenta
Write-Host "Angular Webpack Remote (Preview): http://localhost:5004" -ForegroundColor Magenta
Write-Host "Angular Vite Remote (Preview):  http://localhost:5006" -ForegroundColor Magenta
Write-Host "Vue Remote (Preview):           http://localhost:5005" -ForegroundColor Magenta
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
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/angular-webpack'; npm run preview"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/angular-vite'; npm run preview"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD/remotes/vue'; npm run preview"
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
