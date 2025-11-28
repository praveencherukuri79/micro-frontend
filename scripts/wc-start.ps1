<#
.SYNOPSIS
    Build all web components and start the web component host

.DESCRIPTION
    Complete workflow for web component integration:
    1. Builds all remotes as web components in parallel
    2. Copies built widgets to central widgets/ directory
    3. Copies widgets to host-webcomponent/public/widgets/
    4. Starts the host-webcomponent application

.EXAMPLE
    .\scripts\wc-start.ps1
#>

Write-Host "Starting Web Component workflow..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Build all web components
Write-Host "Step 1: Building all web components..." -ForegroundColor Yellow
& "$PSScriptRoot\wc-build-all.ps1"

# Step 2: Copy widgets
Write-Host ""
Write-Host "Step 2: Copying widgets..." -ForegroundColor Yellow
& "$PSScriptRoot\wc-copy-widgets.ps1"

# Step 3: Start host-webcomponent
Write-Host ""
Write-Host "Step 3: Starting host-webcomponent..." -ForegroundColor Yellow
Write-Host ""

$hostPath = Join-Path $PSScriptRoot "..\host-webcomponent"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$hostPath'; npm run dev" -WindowStyle Normal

Write-Host "Host-webcomponent started on port 5010" -ForegroundColor Green
Write-Host ""
Write-Host "Web Component Host: http://localhost:5010" -ForegroundColor Cyan
Write-Host ""
Write-Host "All web components are loaded on demand when you navigate to their pages" -ForegroundColor Yellow

