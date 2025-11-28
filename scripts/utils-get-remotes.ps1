<#
.SYNOPSIS
    Discovers all micro-frontend remotes by reading package.json metadata

.DESCRIPTION
    Scans the remotes/ directory and extracts configuration from package.json
    Returns an array of remote objects with type, port, and other metadata

.OUTPUTS
    Array of PSCustomObject with remote information

.EXAMPLE
    $remotes = & ".\scripts\utils-get-remotes.ps1"
    $remotes | Format-Table Name, Type, Port
#>

$remotesPath = Join-Path $PSScriptRoot "..\remotes"
$remotes = @()

# Get all remote directories
$remoteDirs = Get-ChildItem -Path $remotesPath -Directory

foreach ($dir in $remoteDirs) {
    $packageJsonPath = Join-Path $dir.FullName "package.json"
    
    if (Test-Path $packageJsonPath) {
        try {
            $packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
            
            # Check if microfrontend metadata exists
            if ($packageJson.PSObject.Properties.Name -contains "microfrontend") {
                $mf = $packageJson.microfrontend
                
                $remote = [PSCustomObject]@{
                    Name = $dir.Name
                    Path = $dir.FullName
                    Type = $mf.type
                    Port = $mf.port
                    Exposes = $mf.exposes
                    WebComponent = $mf.webcomponent
                    PackageName = $packageJson.name
                }
                
                $remotes += $remote
            }
            else {
                # Fallback: Auto-detect type from dependencies
                $type = "unknown"
                if ($packageJson.dependencies.PSObject.Properties.Name -contains "react") {
                    $type = "react-vite"
                }
                elseif ($packageJson.dependencies.PSObject.Properties.Name -contains "@angular/core") {
                    if ($packageJson.devDependencies.PSObject.Properties.Name -contains "@angular-architects/module-federation") {
                        $type = "angular-webpack"
                    }
                    else {
                        $type = "angular-vite"
                    }
                }
                elseif ($packageJson.dependencies.PSObject.Properties.Name -contains "vue") {
                    $type = "vue-vite"
                }
                
                # Try to get port from scripts
                $port = 5000
                if ($packageJson.scripts.dev -match '--port (\d+)') {
                    $port = [int]$matches[1]
                }
                
                $remote = [PSCustomObject]@{
                    Name = $dir.Name
                    Path = $dir.FullName
                    Type = $type
                    Port = $port
                    Exposes = @{}
                    WebComponent = @{ Name = "$($dir.Name)Widget"; Tag = "$($dir.Name)-widget" }
                    PackageName = $packageJson.name
                    Warning = "No microfrontend metadata in package.json"
                }
                
                $remotes += $remote
            }
        }
        catch {
            Write-Warning "Failed to parse package.json for $($dir.Name): $($_.Exception.Message)"
        }
    }
}

return $remotes

