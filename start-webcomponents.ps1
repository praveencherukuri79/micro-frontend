Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Web Components Build & Start Script  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kill all node processes to free ports
Write-Host "Cleaning up ports..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Build all web components in parallel
Write-Host ""
Write-Host "Building all web components in parallel..." -ForegroundColor Green
Write-Host ""

$buildJobs = @()

# Shell Web Component
Write-Host "  [1/6] Building shell-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\shell"
    npm run build:webcomponent 2>&1
}

# Products Web Component
Write-Host "  [2/6] Building products-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\products"
    npm run build:webcomponent 2>&1
}

# Contact Web Component
Write-Host "  [3/6] Building contact-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\contact"
    npm run build:webcomponent 2>&1
}

# Angular Webpack Web Component
Write-Host "  [4/6] Building angular-webpack-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\angular-webpack"
    npm run build:webcomponent 2>&1
}

# Angular Vite Web Component
Write-Host "  [5/6] Building angular-vite-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\angular-vite"
    npm run build:webcomponent 2>&1
}

# Vue Web Component
Write-Host "  [6/6] Building vue-widget..." -ForegroundColor Cyan
$buildJobs += Start-Job -ScriptBlock {
    Set-Location "D:\Projects\module-federation\remotes\vue"
    npm run build:webcomponent 2>&1
}

# Wait for all builds to complete
Write-Host ""
Write-Host "Waiting for parallel builds to complete..." -ForegroundColor Yellow
$buildJobs | Wait-Job | Out-Null

# Check for build failures and show output
Write-Host ""
Write-Host "Build Results:" -ForegroundColor Cyan
$failedBuilds = @()
$buildNames = @("shell-widget", "products-widget", "contact-widget", "angular-webpack-widget", "angular-vite-widget", "vue-widget")
$buildIndex = 0

$buildJobs | ForEach-Object {
    $buildName = $buildNames[$buildIndex]
    $buildIndex++
    
    if ($_.State -eq "Completed") {
        Write-Host "  OK $buildName" -ForegroundColor Green
    } else {
        Write-Host "  FAIL $buildName (Job State: $($_.State))" -ForegroundColor Red
        $failedBuilds += $buildName
        
        $errorOutput = Receive-Job -Job $_ -ErrorAction SilentlyContinue
        if ($errorOutput) {
            Write-Host "    Error: $errorOutput" -ForegroundColor Yellow
        }
    }
}

$buildJobs | Remove-Job

if ($failedBuilds.Count -gt 0) {
    Write-Host ""
    Write-Host "FAILED builds: $($failedBuilds -join ', ')" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please check if each remote has 'build:webcomponent' script in package.json" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "All web components built successfully!" -ForegroundColor Green

# Copy built files to widgets directory first
Write-Host ""
Write-Host "Copying built files to widgets/..." -ForegroundColor Green

$widgetsDir = "D:\Projects\module-federation\widgets"
if (!(Test-Path $widgetsDir)) {
    New-Item -ItemType Directory -Path $widgetsDir -Force | Out-Null
}

Copy-Item "D:\Projects\module-federation\remotes\shell\dist-webcomponent\webcomponent.js" "$widgetsDir\shell-widget.js" -Force
Copy-Item "D:\Projects\module-federation\remotes\products\dist-webcomponent\webcomponent.js" "$widgetsDir\products-widget.js" -Force
Copy-Item "D:\Projects\module-federation\remotes\contact\dist-webcomponent\webcomponent.js" "$widgetsDir\contact-widget.js" -Force

# Angular Webpack (single file bundle)
Copy-Item "D:\Projects\module-federation\remotes\angular-webpack\dist-webcomponent\angular-webpack-widget.js" "$widgetsDir\angular-webpack-widget.js" -Force

Copy-Item "D:\Projects\module-federation\remotes\angular-vite\dist-webcomponent\angular-vite-widget.iife.js" "$widgetsDir\angular-vite-widget.js" -Force
Copy-Item "D:\Projects\module-federation\remotes\vue\dist-webcomponent\vue-widget.iife.js" "$widgetsDir\vue-widget.js" -Force
if (Test-Path "D:\Projects\module-federation\remotes\vue\dist-webcomponent\style.css") {
    Copy-Item "D:\Projects\module-federation\remotes\vue\dist-webcomponent\style.css" "$widgetsDir\vue-widget.css" -Force
}

Write-Host "OK All files copied to widgets/" -ForegroundColor Green

# Copy web component files to host-webcomponent/public/widgets
Write-Host ""
Write-Host "Copying all widget files from widgets/ to host..." -ForegroundColor Green

$widgetsSourceDir = "D:\Projects\module-federation\widgets"
$hostWidgetsDir = "D:\Projects\module-federation\host-webcomponent\public\widgets"

if (!(Test-Path $hostWidgetsDir)) {
    New-Item -ItemType Directory -Path $hostWidgetsDir -Force | Out-Null
}

# Copy ALL files from widgets/ to host (includes Angular chunks)
try {
    Copy-Item "$widgetsSourceDir\*" "$hostWidgetsDir\" -Recurse -Force -Exclude "*.html"
    Write-Host "  OK Copied all widget files" -ForegroundColor Green
    $copyErrors = @()
} catch {
    $copyErrors = @("Failed to copy widget files: $_")
    Write-Host "  FAIL Failed to copy files" -ForegroundColor Red
}

Write-Host ""
if ($copyErrors.Count -gt 0) {
    Write-Host "Some widgets failed to copy:" -ForegroundColor Yellow
    $copyErrors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
    Write-Host ""
    Write-Host "The app will start but some widgets may not work." -ForegroundColor Yellow
} else {
    Write-Host "All widgets copied successfully!" -ForegroundColor Green
}

# Verify critical widgets exist
Write-Host ""
Write-Host "Verifying widget files..." -ForegroundColor Yellow
$criticalWidgets = @(
    "$hostWidgetsDir\shell-widget.js",
    "$hostWidgetsDir\products-widget.js",
    "$hostWidgetsDir\contact-widget.js"
)

$missingCritical = @()
foreach ($widget in $criticalWidgets) {
    if (!(Test-Path $widget)) {
        $missingCritical += Split-Path $widget -Leaf
    }
}

if ($missingCritical.Count -gt 0) {
    Write-Host ""
    Write-Host "CRITICAL widgets missing:" -ForegroundColor Red
    $missingCritical | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    Write-Host ""
    Write-Host "Cannot start the application. Please check the build errors above." -ForegroundColor Red
    exit 1
}

Write-Host "OK All critical widgets verified" -ForegroundColor Green

# Install host-webcomponent dependencies if needed
Write-Host ""
if (!(Test-Path "D:\Projects\module-federation\host-webcomponent\node_modules")) {
    Write-Host "Installing host-webcomponent dependencies..." -ForegroundColor Yellow
    Set-Location "D:\Projects\module-federation\host-webcomponent"
    npm install
}

# Start host-webcomponent
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Host Web Component App      " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  URL: http://localhost:5100" -ForegroundColor Green
Write-Host ""
Write-Host "Available Routes:" -ForegroundColor Cyan
Write-Host "  - http://localhost:5100/          (Home)" -ForegroundColor Gray
Write-Host "  - http://localhost:5100/products  (Products Widget)" -ForegroundColor Gray
Write-Host "  - http://localhost:5100/contact   (Contact Widget)" -ForegroundColor Gray
Write-Host "  - http://localhost:5100/angular-webpack  (Angular Webpack)" -ForegroundColor Gray
Write-Host "  - http://localhost:5100/angular-vite     (Angular Vite)" -ForegroundColor Gray
Write-Host "  - http://localhost:5100/vue       (Vue Widget)" -ForegroundColor Gray
Write-Host ""

Set-Location "D:\Projects\module-federation\host-webcomponent"
npm run dev
