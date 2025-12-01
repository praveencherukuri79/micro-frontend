<#
.SYNOPSIS
    Kills Node.js processes on specific ports based on context

.DESCRIPTION
    Intelligently stops Node.js processes based on the context:
    - MF (Module Federation): Kills processes on ports 5000-5006
    - WC (Web Components): Kills processes on port 5010
    - All: Kills all Node.js processes (legacy behavior)
    
    Uses Get-NetTCPConnection to find processes by port
    Safe to run even when no processes are running

.PARAMETER Context
    The context to determine which ports to kill:
    - "MF" - Module Federation (ports 5000, 5001-5006)
    - "WC" - Web Components (port 5010)
    - "All" - All Node.js processes (default for backward compatibility)

.EXAMPLE
    & ".\scripts\utils-kill-ports.ps1" -Context MF
    & ".\scripts\utils-kill-ports.ps1" -Context WC
    & ".\scripts\utils-kill-ports.ps1"  # Kills all (legacy)
#>

param(
    [Parameter(Mandatory = $false)]
    [ValidateSet("MF", "WC", "All")]
    [string]$Context = "All"
)

Write-Host ""

# Define port ranges for each context
$MF_HOST_PORT = 5000
$MF_REMOTE_PORTS = @(5001, 5002, 5003, 5004, 5005, 5006)
$WC_HOST_PORT = 5010

# Determine which ports to check based on context
$portsToKill = @()
$contextDescription = ""

switch ($Context) {
    "MF" {
        $portsToKill = @($MF_HOST_PORT) + $MF_REMOTE_PORTS
        $contextDescription = "Module Federation (ports 5000-5006)"
    }
    "WC" {
        $portsToKill = @($WC_HOST_PORT)
        $contextDescription = "Web Components (port 5010)"
    }
    "All" {
        $portsToKill = @()  # Empty means kill all Node processes
        $contextDescription = "All Node.js processes"
    }
}

Write-Host "============================================" -ForegroundColor Yellow
Write-Host "Port Cleanup: $contextDescription" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow
Write-Host ""

if ($Context -eq "All") {
    # Legacy behavior: kill all Node.js processes
    Write-Host "Mode: Kill ALL Node.js processes" -ForegroundColor DarkGray
    Write-Host ""
    
    $nodeProcesses = @(Get-Process -Name node -ErrorAction SilentlyContinue)
    $processCount = @($nodeProcesses).Count
    
    Write-Host "Found $processCount Node.js process(es)" -ForegroundColor DarkGray
    
    if ($processCount -gt 0) {
        Write-Host "Stopping $processCount Node.js process(es)..." -ForegroundColor Yellow
        
        foreach ($process in $nodeProcesses) {
            try {
                Write-Host "  Stopping PID $($process.Id)..." -ForegroundColor DarkGray
                Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
                Write-Host "  [OK] PID $($process.Id) stopped" -ForegroundColor Green
            }
            catch {
                Write-Host "  [WARN] Could not stop PID $($process.Id): $($_.Exception.Message)" -ForegroundColor DarkYellow
            }
        }
        
        Write-Host ""
        Write-Host "Waiting for ports to be released (2 seconds)..." -ForegroundColor DarkYellow
        Start-Sleep -Seconds 2
        Write-Host "Ports released" -ForegroundColor Green
    }
    else {
        Write-Host "No Node.js processes to clean up" -ForegroundColor Green
    }
}
else {
    # Intelligent behavior: kill only processes on specific ports
    Write-Host "Mode: Kill processes on specific ports" -ForegroundColor DarkGray
    Write-Host "Target ports: $($portsToKill -join ', ')" -ForegroundColor DarkGray
    Write-Host ""
    
    $killedCount = 0
    $skippedCount = 0
    
    foreach ($port in $portsToKill) {
        Write-Host "Checking port $port..." -ForegroundColor DarkGray
        
        try {
            # Find process using this port
            $connection = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
            
            if ($connection) {
                $processId = $connection.OwningProcess
                $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
                
                if ($process) {
                    $processName = $process.ProcessName
                    Write-Host "  Found: $processName (PID $processId) on port $port" -ForegroundColor Yellow
                    
                    try {
                        Stop-Process -Id $processId -Force -ErrorAction Stop
                        Write-Host "  [OK] Stopped $processName (PID $processId)" -ForegroundColor Green
                        $killedCount++
                    }
                    catch {
                        Write-Host "  [WARN] Could not stop PID $processId`: $($_.Exception.Message)" -ForegroundColor DarkYellow
                        $skippedCount++
                    }
                }
                else {
                    Write-Host "  [SKIP] Process no longer exists" -ForegroundColor DarkGray
                }
            }
            else {
                Write-Host "  [FREE] Port $port is not in use" -ForegroundColor DarkGray
            }
        }
        catch {
            Write-Host "  [FREE] Port $port is not in use" -ForegroundColor DarkGray
        }
    }
    
    Write-Host ""
    
    if ($killedCount -gt 0) {
        Write-Host "Stopped $killedCount process(es)" -ForegroundColor Green
        Write-Host "Waiting for ports to be released (2 seconds)..." -ForegroundColor DarkYellow
        Start-Sleep -Seconds 2
        Write-Host "Ports released" -ForegroundColor Green
    }
    else {
        Write-Host "No processes needed to be stopped" -ForegroundColor Green
    }
    
    if ($skippedCount -gt 0) {
        Write-Host "WARNING: $skippedCount process(es) could not be stopped" -ForegroundColor DarkYellow
    }
}

Write-Host ""
