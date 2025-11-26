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

Write-Host ""
Write-Host "All Web Components built successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Web component files are in:" -ForegroundColor Cyan
Write-Host "  - remotes/shell/dist-webcomponent/" -ForegroundColor White
Write-Host "  - remotes/products/dist-webcomponent/" -ForegroundColor White
Write-Host "  - remotes/contact/dist-webcomponent/" -ForegroundColor White
Write-Host ""
Write-Host "To test, open: examples/webcomponent-example.html" -ForegroundColor Yellow
Write-Host ""

