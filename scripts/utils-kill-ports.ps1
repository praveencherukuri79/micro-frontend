<#
.SYNOPSIS
    Kills all Node.js processes to free up ports

.DESCRIPTION
    Stops all running Node processes to prevent port conflicts
    Waits 2 seconds after cleanup for ports to be released

.EXAMPLE
    & ".\scripts\utils-kill-ports.ps1"
#>

Write-Host "Cleaning up ports..." -ForegroundColor Yellow

$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    $nodeProcesses | Stop-Process -Force
    $count = $nodeProcesses.Count
    Write-Host "Stopped $count Node process(es)" -ForegroundColor Green
    Start-Sleep -Seconds 2
}
else {
    Write-Host "No Node processes found" -ForegroundColor Green
}

