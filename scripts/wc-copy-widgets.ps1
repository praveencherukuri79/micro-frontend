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

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Copying Web Components to Widgets Directory" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ===========================================
# STEP 1: Define and prepare directories
# ===========================================
$widgetsDir = Join-Path $PSScriptRoot "..\widgets"
$publicDir = Join-Path $PSScriptRoot "..\host-webcomponent\public"
$publicWidgetsDir = Join-Path $publicDir "widgets"

Write-Host "Preparing directories..." -ForegroundColor Yellow

# Delete old widgets to prevent stale files
if (Test-Path $widgetsDir) {
    Write-Host "  Removing old widgets directory" -ForegroundColor DarkYellow
    Remove-Item $widgetsDir -Recurse -Force
}

if (Test-Path $publicWidgetsDir) {
    Write-Host "  Removing old public widgets directory" -ForegroundColor DarkYellow
    Remove-Item $publicWidgetsDir -Recurse -Force
}

# Create fresh directories
Write-Host "  Creating widgets directory" -ForegroundColor DarkGray
New-Item -ItemType Directory -Path $widgetsDir -Force | Out-Null

# Ensure public directory exists before creating widgets subdirectory
if (-not (Test-Path $publicDir)) {
    Write-Host "  Creating public directory" -ForegroundColor DarkGray
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

Write-Host "  Creating public widgets directory" -ForegroundColor DarkGray
New-Item -ItemType Directory -Path $publicWidgetsDir -Force | Out-Null

Write-Host ""

# ===========================================
# STEP 2: Discover remotes and verify builds
# ===========================================
Write-Host "Discovering remotes..." -ForegroundColor Yellow

$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

if (-not $remotes -or @($remotes).Count -eq 0) {
    Write-Host "ERROR: No remotes found" -ForegroundColor Red
    exit 1
}

# Verify all web components are built
Write-Host ""
Write-Host "Verifying builds..." -ForegroundColor Yellow

$unbuiltWidgets = @()
foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist-webcomponent"
    if (-not (Test-Path $distPath)) {
        $unbuiltWidgets += $remote.Name
    }
}

if (@($unbuiltWidgets).Count -gt 0) {
    Write-Host ""
    Write-Host "ERROR: The following web components are not built:" -ForegroundColor Red
    foreach ($name in $unbuiltWidgets) {
        Write-Host "  - $name" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Run the following first:" -ForegroundColor Yellow
    Write-Host "  .\scripts\wc-build-all.ps1" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "  All remotes have dist-webcomponent folders" -ForegroundColor Green
Write-Host ""

# ===========================================
# STEP 3: Copy widget files
# ===========================================
Write-Host "Copying widget files..." -ForegroundColor Yellow
Write-Host ""

$copyErrors = @()
$copiedCount = 0

foreach ($remote in $remotes) {
    $distPath = Join-Path $remote.Path "dist-webcomponent"
    $copied = $false
    
    try {
        switch ($remote.Name) {
            "shell" {
                $srcFile = Join-Path $distPath "webcomponent.js"
                $dstFile = Join-Path $widgetsDir "shell-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] shell-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            "products" {
                $srcFile = Join-Path $distPath "webcomponent.js"
                $dstFile = Join-Path $widgetsDir "products-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] products-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            "contact" {
                $srcFile = Join-Path $distPath "webcomponent.js"
                $dstFile = Join-Path $widgetsDir "contact-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] contact-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            "angular-webpack" {
                $srcFile = Join-Path $distPath "angular-webpack-widget.js"
                $dstFile = Join-Path $widgetsDir "angular-webpack-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] angular-webpack-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            "angular-vite" {
                $srcFile = Join-Path $distPath "angular-vite-widget.iife.js"
                $dstFile = Join-Path $widgetsDir "angular-vite-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] angular-vite-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            "vue" {
                $srcFile = Join-Path $distPath "vue-widget.iife.js"
                $dstFile = Join-Path $widgetsDir "vue-widget.js"
                if (Test-Path $srcFile) {
                    Copy-Item $srcFile $dstFile -Force
                    $copied = $true
                    Write-Host "  [OK] vue-widget.js" -ForegroundColor Green
                }
                else {
                    throw "Source file not found: $srcFile"
                }
            }
            default {
                Write-Host "  [SKIP] $($remote.Name) - no copy rule defined" -ForegroundColor DarkYellow
            }
        }
        
        if ($copied) {
            $copiedCount++
        }
    }
    catch {
        Write-Host "  [FAIL] $($remote.Name) - $($_.Exception.Message)" -ForegroundColor Red
        $copyErrors += $remote.Name
    }
}

# Check if any copies failed
if (@($copyErrors).Count -gt 0) {
    Write-Host ""
    Write-Host "ERROR: Failed to copy some widgets:" -ForegroundColor Red
    foreach ($name in $copyErrors) {
        Write-Host "  - $name" -ForegroundColor Red
    }
    exit 1
}

Write-Host ""

# ===========================================
# STEP 4: Copy to public widgets directory
# ===========================================
Write-Host "Copying to host-webcomponent/public/widgets/..." -ForegroundColor Yellow

try {
    $widgetFiles = Get-ChildItem -Path $widgetsDir -Filter "*.js" -ErrorAction Stop
    
    $widgetCount = @($widgetFiles).Count
    if ($widgetCount -eq 0) {
        Write-Host "ERROR: No widget files found in $widgetsDir" -ForegroundColor Red
        exit 1
    }
    
    Copy-Item "$widgetsDir\*" $publicWidgetsDir -Force
    Write-Host "  [OK] Copied $widgetCount widget(s) to public/widgets/" -ForegroundColor Green
}
catch {
    Write-Host "ERROR: Failed to copy widgets to public directory: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# ===========================================
# STEP 5: Summary
# ===========================================
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Widget Copy Complete" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Successfully copied $copiedCount widget(s)" -ForegroundColor Green
Write-Host ""
Write-Host "Widget locations:" -ForegroundColor Yellow
Write-Host "  Source: $widgetsDir" -ForegroundColor White
Write-Host "  Public: $publicWidgetsDir" -ForegroundColor White
Write-Host ""

exit 0
