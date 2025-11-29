<#
.SYNOPSIS
    Copy built web components to central widgets directory

.DESCRIPTION
    Copies all web component files from remotes/*/dist-webcomponent/ to widgets/
    Then copies from widgets/ to host-webcomponent/public/widgets/
    The widgets/ directory is the single source of truth for built widgets

.PREREQUISITES
    Web components must be built first (run wc-build-all.ps1)

.EXAMPLE
    .\scripts\wc-copy-widgets.ps1
#>

Write-Host "Copying web components to widgets directory..." -ForegroundColor Cyan
Write-Host ""

# Define directories
$widgetsDir = Join-Path $PSScriptRoot "..\widgets"
$publicWidgetsDir = Join-Path $PSScriptRoot "..\host-webcomponent\public\widgets"

# CRITICAL: Delete old widgets to prevent stale builds
if (Test-Path $widgetsDir) {
    Write-Host "Deleting old widgets directory: $widgetsDir" -ForegroundColor DarkYellow
    Remove-Item $widgetsDir -Recurse -Force -ErrorAction SilentlyContinue
}

if (Test-Path $publicWidgetsDir) {
    Write-Host "Deleting old public widgets directory: $publicWidgetsDir" -ForegroundColor DarkYellow
    Remove-Item $publicWidgetsDir -Recurse -Force -ErrorAction SilentlyContinue
}

# Ensure widgets directories exist (fresh)
Write-Host "Creating fresh widgets directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $widgetsDir -Force | Out-Null
New-Item -ItemType Directory -Path $publicWidgetsDir -Force | Out-Null

# Get all remotes
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Check if all web components are built
$unbuiltWidgets = @()
foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist-webcomponent"
    if (-not (Test-Path $distPath)) {
        $unbuiltWidgets += $remote.Name
    }
}

$unbuiltCount = ($unbuiltWidgets | Measure-Object).Count
if ($unbuiltCount -gt 0) {
    Write-Host "ERROR: The following web components are not built:" -ForegroundColor Red
    $unbuiltWidgets | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

# Copy each remote's web component
foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist-webcomponent"
    
    # Different copy logic based on remote type
    switch ($remote.Name) {
        "shell" {
            Copy-Item "$distPath\webcomponent.js" "$widgetsDir\shell-widget.js" -Force
            Write-Host "[OK] Copied shell-widget.js" -ForegroundColor Green
        }
        "products" {
            Copy-Item "$distPath\webcomponent.js" "$widgetsDir\products-widget.js" -Force
            Write-Host "[OK] Copied products-widget.js" -ForegroundColor Green
        }
        "contact" {
            Copy-Item "$distPath\webcomponent.js" "$widgetsDir\contact-widget.js" -Force
            Write-Host "[OK] Copied contact-widget.js" -ForegroundColor Green
        }
        "angular-webpack" {
            Copy-Item "$distPath\angular-webpack-widget.js" "$widgetsDir\" -Force
            Write-Host "[OK] Copied angular-webpack-widget.js" -ForegroundColor Green
        }
        "angular-vite" {
            Copy-Item "$distPath\angular-vite-widget.iife.js" "$widgetsDir\angular-vite-widget.js" -Force
            Write-Host "[OK] Copied angular-vite-widget.js" -ForegroundColor Green
        }
        "vue" {
            Copy-Item "$distPath\vue-widget.iife.js" "$widgetsDir\vue-widget.js" -Force
            Write-Host "[OK] Copied vue-widget.js" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "Step 2: Copying to host-webcomponent..." -ForegroundColor Yellow

# Copy all files from widgets/ to host-webcomponent/public/widgets/
Copy-Item "$widgetsDir\*" "$publicWidgetsDir\" -Force
Write-Host "[OK] Copied all widgets to host-webcomponent/public/widgets/" -ForegroundColor Green

Write-Host ""
Write-Host "Widget copy complete!" -ForegroundColor Cyan

