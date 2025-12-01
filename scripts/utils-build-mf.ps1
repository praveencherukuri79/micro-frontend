<#
.SYNOPSIS
    Utility functions for Module Federation parallel builds

.DESCRIPTION
    Provides reusable build functions for Module Federation remotes
    - Runs builds in parallel using background processes
    - Properly inherits PATH (no environment issues)
    - Verifies build outputs exist
    - Returns clear success/failure status
#>

function Build-AllMFRemotes {
    <#
    .SYNOPSIS
        Build all Module Federation remotes in parallel
    
    .PARAMETER Remotes
        Array of remote objects from utils-get-remotes.ps1
    
    .OUTPUTS
        Hashtable with Results array and TotalDuration
    #>
    param(
        [Parameter(Mandatory = $true)]
        [array]$Remotes
    )
    
    $remoteCount = @($Remotes).Count
    
    Write-Host ""
    Write-Host "Building $remoteCount Module Federation remotes in parallel..." -ForegroundColor Cyan
    Write-Host ""
    
    # ------------------------------------------
    # Validate npm is available
    # ------------------------------------------
    try {
        $null = npm --version 2>&1
        if ($LASTEXITCODE -ne 0) { throw "npm not found" }
    }
    catch {
        Write-Host "ERROR: npm is not available in PATH" -ForegroundColor Red
        return @{
            Results = @()
            TotalDuration = 0
            Success = $false
        }
    }
    
    $startTime = Get-Date
    $jobs = @()
    
    # ------------------------------------------
    # Start parallel builds using PowerShell jobs
    # ------------------------------------------
    foreach ($remote in $Remotes) {
        Write-Host "  Queuing: $($remote.Name)" -ForegroundColor Yellow
        
        # Delete old dist folder to prevent stale builds
        $distPath = Join-Path $remote.Path "dist"
        if (Test-Path $distPath) {
            Remove-Item $distPath -Recurse -Force -ErrorAction SilentlyContinue
        }
        
        # Start build as a PowerShell background job
        $job = Start-Job -ScriptBlock {
            param($buildPath)
            Set-Location $buildPath
            npm run build 2>&1
            exit $LASTEXITCODE
        } -ArgumentList $remote.Path
        
        $jobs += [PSCustomObject]@{
            Name = $remote.Name
            Path = $remote.Path
            Job = $job
        }
    }
    
    Write-Host ""
    Write-Host "Waiting for builds to complete..." -ForegroundColor Cyan
    Write-Host "(Checking progress every 3 seconds)" -ForegroundColor DarkGray
    Write-Host ""
    
    # ------------------------------------------
    # Monitor progress and wait for jobs
    # ------------------------------------------
    $results = @()
    $completedJobs = @{}
    
    while ($true) {
        $runningCount = 0
        $completedCount = 0
        $statusLine = @()
        
        foreach ($item in $jobs) {
            $jobState = $item.Job.State
            
            if ($jobState -eq "Running") {
                $runningCount++
                $statusLine += "$($item.Name)[...]"
            }
            elseif ($jobState -eq "Completed" -or $jobState -eq "Failed") {
                if (-not $completedJobs.ContainsKey($item.Name)) {
                    # Job just completed - process it
                    $completedJobs[$item.Name] = $true
                    
                    $output = Receive-Job -Job $item.Job
                    $distPath = Join-Path $item.Path "dist"
                    
                    # Verify success: dist folder exists with files
                    $success = $false
                    $failureReason = ""
                    
                    if (-not (Test-Path $distPath)) {
                        $failureReason = "dist folder not created"
                    }
                    else {
                        $distFiles = @(Get-ChildItem -Path $distPath -File -Recurse -ErrorAction SilentlyContinue)
                        if (@($distFiles).Count -eq 0) {
                            $failureReason = "dist folder is empty"
                        }
                        else {
                            $success = $true
                        }
                    }
                    
                    # Display result immediately
                    if ($success) {
                        Write-Host "  [OK] $($item.Name)" -ForegroundColor Green
                    }
                    else {
                        Write-Host "  [FAIL] $($item.Name) - $failureReason" -ForegroundColor Red
                        if ($output) {
                            $lastLines = ($output | Out-String).Split("`n") | Select-Object -Last 5
                            foreach ($line in $lastLines) {
                                if ($line.Trim()) {
                                    Write-Host "    $line" -ForegroundColor DarkRed
                                }
                            }
                        }
                    }
                    
                    $results += [PSCustomObject]@{
                        Name = $item.Name
                        Success = $success
                        FailureReason = $failureReason
                        ExitCode = 0
                        Output = $output
                    }
                    
                    Remove-Job -Job $item.Job -Force
                }
                $completedCount++
            }
        }
        
        # Exit loop when all jobs are done
        if ($completedCount -eq $remoteCount) {
            break
        }
        
        # Show progress status
        if ($runningCount -gt 0) {
            $elapsed = [math]::Round(((Get-Date) - $startTime).TotalSeconds, 0)
            Write-Host "  [$elapsed`s] Building: $($statusLine -join ', ')" -ForegroundColor DarkGray
        }
        
        Start-Sleep -Seconds 3
    }
    
    $endTime = Get-Date
    $totalDuration = ($endTime - $startTime).TotalSeconds
    
    Write-Host ""
    Write-Host "All builds finished in $([math]::Round($totalDuration, 1))s" -ForegroundColor Cyan
    
    return @{
        Results = $results
        TotalDuration = $totalDuration
    }
}


function Show-MFBuildResults {
    <#
    .SYNOPSIS
        Display build results summary
    
    .PARAMETER Results
        Array of build result objects from Build-AllMFRemotes
    
    .PARAMETER TotalDuration
        Total build duration in seconds
    
    .OUTPUTS
        $true if all builds succeeded, $false otherwise
    #>
    param(
        [Parameter(Mandatory = $true)]
        [array]$Results,
        
        [Parameter(Mandatory = $true)]
        [double]$TotalDuration
    )
    
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "Module Federation Build Results" -ForegroundColor Cyan
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host ""
    
    $successCount = @($Results | Where-Object { $_.Success }).Count
    $failureCount = @($Results | Where-Object { -not $_.Success }).Count
    $totalCount = @($Results).Count
    
    # Display each result
    foreach ($result in $Results) {
        if ($result.Success) {
            Write-Host "[OK] $($result.Name)" -ForegroundColor Green
        }
        else {
            Write-Host "[FAIL] $($result.Name)" -ForegroundColor Red
            Write-Host "  Reason: $($result.FailureReason)" -ForegroundColor DarkRed
            
            # Show last 10 lines of output for failed builds
            if ($result.Output -and @($result.Output).Count -gt 0) {
                Write-Host "  Build output (last 10 lines):" -ForegroundColor DarkRed
                $lastLines = $result.Output | Select-Object -Last 10
                foreach ($line in $lastLines) {
                    Write-Host "    $line" -ForegroundColor DarkRed
                }
            }
        }
    }
    
    # Summary
    Write-Host ""
    Write-Host "--------------------------------------------" -ForegroundColor Cyan
    
    if ($failureCount -eq 0) {
        Write-Host "SUCCESS: All $totalCount builds completed in $([math]::Round($TotalDuration, 1))s" -ForegroundColor Green
        return $true
    }
    else {
        Write-Host "FAILED: $failureCount of $totalCount builds failed" -ForegroundColor Red
        Write-Host ""
        Write-Host "Failed remotes:" -ForegroundColor Yellow
        foreach ($result in $Results | Where-Object { -not $_.Success }) {
            Write-Host "  - $($result.Name): $($result.FailureReason)" -ForegroundColor DarkYellow
        }
        return $false
    }
}
