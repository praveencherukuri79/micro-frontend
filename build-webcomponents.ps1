# Build all remotes as Web Components

Write-Host "Building Web Components..." -ForegroundColor Cyan
Write-Host ""

# Build Shell Web Component
Write-Host "Building Shell Widget..." -ForegroundColor Green
Set-Location remotes/shell
npm run build:webcomponent
Set-Location ../..

# Build Products Web Component
Write-Host "Building Products Widget..." -ForegroundColor Green
Set-Location remotes/products
npm run build:webcomponent
Set-Location ../..

# Build Contact Web Component
Write-Host "Building Contact Widget..." -ForegroundColor Green
Set-Location remotes/contact
npm run build:webcomponent
Set-Location ../..

# Build Angular Webpack Web Component
Write-Host "Building Angular Webpack Widget..." -ForegroundColor Green
Set-Location remotes/angular-webpack
npm run build:webcomponent
Set-Location ../..

# Build Angular Vite Web Component
Write-Host "Building Angular Vite Widget..." -ForegroundColor Green
Set-Location remotes/angular-vite
npm run build:webcomponent
Set-Location ../..

# Build Vue Web Component
Write-Host "Building Vue Widget..." -ForegroundColor Green
Set-Location remotes/vue
npm run build:webcomponent
Set-Location ../..

Write-Host ""
Write-Host "Copying web components to examples folder..." -ForegroundColor Yellow

# Create examples directory if it doesn't exist
if (-not (Test-Path ".\examples")) {
    New-Item -ItemType Directory -Path ".\examples" | Out-Null
}

# Copy built web components
Copy-Item ".\remotes\shell\dist-webcomponent\webcomponent.js" ".\examples\shell-widget.js" -Force
Copy-Item ".\remotes\products\dist-webcomponent\webcomponent.js" ".\examples\products-widget.js" -Force
Copy-Item ".\remotes\contact\dist-webcomponent\webcomponent.js" ".\examples\contact-widget.js" -Force
Copy-Item ".\remotes\angular-webpack\dist-webcomponent\main.js" ".\examples\angular-webpack-widget.js" -Force
Copy-Item ".\remotes\angular-vite\dist-webcomponent\angular-vite-widget.iife.js" ".\examples\angular-vite-widget.js" -Force
Copy-Item ".\remotes\vue\dist-webcomponent\vue-widget.iife.js" ".\examples\vue-widget.js" -Force
if (Test-Path ".\remotes\vue\dist-webcomponent\style.css") {
    Copy-Item ".\remotes\vue\dist-webcomponent\style.css" ".\examples\vue-widget.css" -Force
}

Write-Host ""
Write-Host "All Web Components built successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Files available in ./examples/ directory:" -ForegroundColor Cyan
Write-Host "  - shell-widget.js" -ForegroundColor White
Write-Host "  - products-widget.js" -ForegroundColor White
Write-Host "  - contact-widget.js" -ForegroundColor White
Write-Host "  - angular-webpack-widget.js (Angular 17 + Webpack)" -ForegroundColor White
Write-Host "  - angular-vite-widget.js (Angular 17 + Vite)" -ForegroundColor White
Write-Host "  - vue-widget.js (Vue 3)" -ForegroundColor White
Write-Host ""
Write-Host "To test, open: examples/webcomponent-example.html" -ForegroundColor Yellow
Write-Host ""

