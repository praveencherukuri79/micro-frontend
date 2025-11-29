<#
.SYNOPSIS
    Kills all Node.js processes to free up ports

.DESCRIPTION
    Stops all running Node.js processes to prevent port conflicts
    Safe to run even when no Node processes are running
    Waits 2 seconds after cleanup for ports to be fully released

.EXAMPLE
    & ".\scripts\utils-kill-ports.ps1"
#>

Write-Host ""
Write-Host "Cleaning up Node.js processes..." -ForegroundColor Yellow

# Get all Node.js processes
# Using @() to ensure we always get an array (even if 0 or 1 process)
$nodeProcesses = @(Get-Process -Name node -ErrorAction SilentlyContinue)

# Count how many processes were found
$processCount = $nodeProcesses.Count

Write-Host "Found $processCount Node.js process(es)" -ForegroundColor DarkGray

if ($processCount -gt 0) {
    Write-Host "Stopping $processCount Node.js process(es)..." -ForegroundColor Yellow
    
    # Stop all Node processes forcefully
    foreach ($process in $nodeProcesses) {
        try {
            Write-Host "  Stopping process ID: $($process.Id)" -ForegroundColor DarkGray
            Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
        }
        catch {
            Write-Host "  WARNING: Could not stop process $($process.Id): $($_.Exception.Message)" -ForegroundColor DarkYellow
        }
    }
    
    Write-Host "All Node.js processes stopped" -ForegroundColor Green
    
    # Wait for ports to be released by the operating system
    Write-Host "Waiting for ports to be released (2 seconds)..." -ForegroundColor DarkYellow
    Start-Sleep -Seconds 2
    
    Write-Host "Ports are now available" -ForegroundColor Green
}
else {
    Write-Host "No Node.js processes to clean up" -ForegroundColor Green
}

Write-Host ""
