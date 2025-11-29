<#
.SYNOPSIS
    Build all Module Federation remotes in parallel

.DESCRIPTION
    Builds all remote applications for Module Federation
    - Deletes old dist folders before building (prevents stale builds)
    - Runs builds in parallel for speed
    - Verifies build outputs exist
    - Shows detailed error messages on failure

.EXAMPLE
    .\scripts\mf-build-all.ps1
#>

# Import Module Federation build utilities
. "$PSScriptRoot\utils-build-mf.ps1"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Module Federation: Build All Remotes" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

# Get all remotes from package.json metadata
Write-Host ""
Write-Host "Discovering remotes..." -ForegroundColor Yellow
$remotes = & "$PSScriptRoot\utils-get-remotes.ps1"

# Validate remotes were found
$remoteCount = ($remotes | Measure-Object).Count
if (-not $remotes -or $remoteCount -eq 0) {
    Write-Host ""
    Write-Host "ERROR: No remotes found" -ForegroundColor Red
    Write-Host "Make sure remotes have 'microfrontend' metadata in their package.json" -ForegroundColor Yellow
    exit 1
}

Write-Host "Found $remoteCount remotes:" -ForegroundColor Green
foreach ($remote in $remotes) {
    Write-Host "  - $($remote.Name) ($($remote.Type)) on port $($remote.Port)" -ForegroundColor White
}

# Execute parallel builds using the utility function
$buildResult = Build-AllMFRemotes -Remotes $remotes

# Display results using the utility function
# Returns $true if all builds succeeded, $false otherwise
$allSuccess = Show-MFBuildResults -Results $buildResult.Results -TotalDuration $buildResult.TotalDuration

Write-Host ""

# Exit with appropriate code
if ($allSuccess) {
    exit 0
} else {
    exit 1
}
