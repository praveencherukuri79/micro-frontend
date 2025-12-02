<#
.SYNOPSIS
    Discovers all micro-frontend remotes from package.json metadata

.DESCRIPTION
    Scans remotes/ directory and reads microfrontend configuration from each package.json
    Returns array of remote objects with validated metadata
    
.OUTPUTS
    Array of PSCustomObject with properties: Name, Path, Type, Port, Exposes, WebComponent, PackageName

.EXAMPLE
    $remotes = & ".\scripts\utils\get-remotes.ps1"
    $remotes | ForEach-Object { Write-Host "$($_.Name) on port $($_.Port)" }
#>

# Base path for remotes directory
$remotesPath = Join-Path $PSScriptRoot "..\..\remotes"

# Check if remotes directory exists
if (-not (Test-Path $remotesPath)) {
    Write-Host "ERROR: Remotes directory not found: $remotesPath" -ForegroundColor Red
    return @()
}

Write-Host "Scanning remotes directory: $remotesPath" -ForegroundColor DarkGray

# Get all subdirectories in remotes/
$remoteDirs = Get-ChildItem -Path $remotesPath -Directory -ErrorAction SilentlyContinue

if (-not $remoteDirs) {
    Write-Host "WARNING: No remote directories found" -ForegroundColor Yellow
    return @()
}

$remoteDirCount = ($remoteDirs | Measure-Object).Count
Write-Host "Found $remoteDirCount potential remote directories" -ForegroundColor DarkGray

# Array to store discovered remotes
$remotes = @()

# Scan each directory for package.json with microfrontend metadata
foreach ($dir in $remoteDirs) {
    $packageJsonPath = Join-Path $dir.FullName "package.json"
    
    Write-Host "  Checking: $($dir.Name)" -ForegroundColor DarkGray
    
    if (-not (Test-Path $packageJsonPath)) {
        Write-Host "    SKIP: No package.json found" -ForegroundColor DarkYellow
        continue
    }
    
    try {
        # Read and parse package.json
        $packageJsonContent = Get-Content $packageJsonPath -Raw -ErrorAction Stop
        $packageJson = $packageJsonContent | ConvertFrom-Json -ErrorAction Stop
        
        # Check if microfrontend metadata exists
        if ($packageJson.PSObject.Properties.Name -contains "microfrontend") {
            # Get microfrontend metadata object
            $mf = $packageJson.microfrontend
            
            # Validate required fields
            if (-not $mf.type) {
                Write-Host "    SKIP: microfrontend.type is missing" -ForegroundColor DarkYellow
                continue
            }
            
            if (-not $mf.port) {
                Write-Host "    SKIP: microfrontend.port is missing" -ForegroundColor DarkYellow
                continue
            }
            
            # Create remote object
            $remote = [PSCustomObject]@{
                Name = $dir.Name                        # Folder name (e.g., "products")
                Path = $dir.FullName                    # Full path to remote directory
                Type = $mf.type                         # Type (e.g., "react-vite", "angular-webpack")
                Port = [int]$mf.port                    # Port number
                Exposes = $mf.exposes                   # Exposed modules for MF
                WebComponent = $mf.webcomponent         # Web component metadata
                PackageName = $packageJson.name         # Package name from package.json
            }
            
            $remotes += $remote
            Write-Host "    OK: Added $($remote.Name) ($($remote.Type)) on port $($remote.Port)" -ForegroundColor Green
        }
        else {
            Write-Host "    SKIP: No microfrontend metadata" -ForegroundColor DarkYellow
        }
    }
    catch {
        Write-Host "    ERROR: Failed to parse package.json: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
$remoteCount = ($remotes | Measure-Object).Count
Write-Host "Discovered $remoteCount valid remotes" -ForegroundColor Green

# Return the array of remotes
return $remotes
