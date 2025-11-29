<#
.SYNOPSIS
    Utility functions for Web Component parallel builds

.DESCRIPTION
    Provides reusable build execution for Web Component builds
    Handles parallel job execution, error detection, and result reporting
#>

function Build-AllWebComponents {
    param(
        [Parameter(Mandatory = $true)]
        [array]$Remotes  # Array of remote objects from utils-get-remotes.ps1
    )
    
    Write-Host ""
    Write-Host "Starting parallel builds for $(@($Remotes).Count) Web Components..." -ForegroundColor Cyan
    Write-Host ""
    
    $jobs = @()
    $startTime = Get-Date
    
    # Start parallel build jobs for each remote
    foreach ($remote in $Remotes) {
        Write-Host "  Queuing build: $($remote.Name)" -ForegroundColor Yellow
        
        # CRITICAL: Delete old dist-webcomponent folder to prevent stale builds
        $distPath = Join-Path $remote.Path "dist-webcomponent"
        if (Test-Path $distPath) {
            Write-Host "    Deleting old dist-webcomponent folder: $distPath" -ForegroundColor DarkYellow
            Remove-Item $distPath -Recurse -Force -ErrorAction SilentlyContinue
        }
        
        # Start build job
        $job = Start-Job -ScriptBlock {
            param($remotePath, $remoteName)
            
            Set-Location $remotePath
            
            # Run npm build:webcomponent and capture output
            $buildOutput = npm run build:webcomponent 2>&1
            $buildExitCode = $LASTEXITCODE
            
            # Return result
            @{
                Output = $buildOutput
                ExitCode = $buildExitCode
            }
        } -ArgumentList $remote.Path, $remote.Name -Name "WC-Build-$($remote.Name)"
        
        $jobs += $job
    }
    
    Write-Host ""
    Write-Host "Waiting for builds to complete..." -ForegroundColor Cyan
    Write-Host ""
    
    # Wait for all jobs to finish with intermediate status updates
    $completedJobs = @()
    $totalJobs = ($jobs | Measure-Object).Count
    
    while (($completedJobs | Measure-Object).Count -lt $totalJobs) {
        # Get currently completed jobs
        $currentlyCompleted = @($jobs | Where-Object { $_.State -ne "Running" })
        
        # Check if any new jobs completed since last check
        $currentCompletedCount = ($currentlyCompleted | Measure-Object).Count
        $previousCompletedCount = ($completedJobs | Measure-Object).Count
        
        if ($currentCompletedCount -gt $previousCompletedCount) {
            # Find which jobs just completed
            $newlyCompleted = $currentlyCompleted | Where-Object { $completedJobs -notcontains $_ }
            
            foreach ($job in $newlyCompleted) {
                # Extract remote name from job name (format: "WC-Build-RemoteName")
                $remoteName = $job.Name -replace '^WC-Build-', ''
                Write-Host "  COMPLETED: $remoteName" -ForegroundColor Green
            }
            
            # Update completed jobs list
            $completedJobs = $currentlyCompleted
            
            # Show progress summary
            $currentCompletedCount = ($completedJobs | Measure-Object).Count
            $pending = $totalJobs - $currentCompletedCount
            Write-Host "  Progress: $currentCompletedCount/$totalJobs completed, $pending pending..." -ForegroundColor DarkYellow
            Write-Host ""
        }
        
        # Sleep briefly before checking again
        Start-Sleep -Milliseconds 500
    }
    
    Write-Host "All builds finished!" -ForegroundColor Green
    Write-Host ""
    
    # Collect and verify results
    $results = @()
    foreach ($job in $jobs) {
        # Extract remote name from job name (format: "WC-Build-RemoteName")
        $remoteName = $job.Name -replace '^WC-Build-', ''
        
        Write-Host ""
        Write-Host "Checking result for: $remoteName" -ForegroundColor White
        
        # Get job output
        $jobResult = Receive-Job $job -ErrorAction SilentlyContinue
        
        # Find the corresponding remote object to get its path
        $remote = $Remotes | Where-Object { $_.Name -eq $remoteName } | Select-Object -First 1
        $distPath = Join-Path $remote.Path "dist-webcomponent"
        
        # Verify build success by checking if dist-webcomponent folder exists and has files
        $buildSuccess = $false
        $failureReason = ""
        
        if ($job.State -ne "Completed") {
            $failureReason = "Job failed with state: $($job.State)"
            Write-Host "  Status: FAILED (Job state: $($job.State))" -ForegroundColor Red
        }
        elseif (-not (Test-Path $distPath)) {
            $failureReason = "dist-webcomponent folder not created: $distPath"
            Write-Host "  Status: FAILED (No dist-webcomponent folder)" -ForegroundColor Red
        }
        else {
            # Check if dist-webcomponent folder has files
            $distFiles = Get-ChildItem -Path $distPath -File -Recurse -ErrorAction SilentlyContinue
            if (-not $distFiles -or @($distFiles).Count -eq 0) {
                $failureReason = "dist-webcomponent folder is empty"
                Write-Host "  Status: FAILED (Empty dist-webcomponent folder)" -ForegroundColor Red
            }
            else {
                $buildSuccess = $true
                Write-Host "  Status: SUCCESS ($(@($distFiles).Count) files generated)" -ForegroundColor Green
            }
        }
        
        # Store result
        $results += [PSCustomObject]@{
            Name = $remoteName
            Success = $buildSuccess
            FailureReason = $failureReason
            Output = if ($jobResult) { $jobResult.Output } else { @() }
            ExitCode = if ($jobResult) { $jobResult.ExitCode } else { -1 }
        }
    }
    
    # Cleanup jobs
    Write-Host ""
    Write-Host "Cleaning up build jobs..." -ForegroundColor DarkGray
    $jobs | Remove-Job -Force
    
    $endTime = Get-Date
    $totalDuration = ($endTime - $startTime).TotalSeconds
    
    # Return results
    return @{
        Results = $results
        TotalDuration = $totalDuration
    }
}

function Show-WCBuildResults {
    param(
        [Parameter(Mandatory = $true)]
        [array]$Results,  # Array of build result objects from Build-AllWebComponents
        
        [Parameter(Mandatory = $true)]
        [double]$TotalDuration  # Total build duration in seconds
    )
    
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "Web Component Build Results" -ForegroundColor Cyan
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Count successes and failures
    $successCount = 0
    $failureCount = 0
    
    foreach ($result in $Results) {
        if ($result.Success) {
            $successCount++
        } else {
            $failureCount++
        }
    }
    
    $totalCount = @($Results).Count
    
    # Display individual results
    foreach ($result in $Results) {
        if ($result.Success) {
            Write-Host "[OK] $($result.Name)" -ForegroundColor Green
        }
        else {
            Write-Host "[FAIL] $($result.Name)" -ForegroundColor Red
            Write-Host "  Reason: $($result.FailureReason)" -ForegroundColor DarkRed
            
            # Show last 10 lines of error output
            if ($result.Output -and @($result.Output).Count -gt 0) {
                Write-Host "  Error output (last 10 lines):" -ForegroundColor DarkRed
                $errorLines = $result.Output | Select-Object -Last 10
                foreach ($line in $errorLines) {
                    Write-Host "    $line" -ForegroundColor DarkRed
                }
            }
        }
    }
    
    # Summary
    Write-Host ""
    Write-Host "--------------------------------------------" -ForegroundColor Cyan
    
    if ($failureCount -eq 0) {
        Write-Host "SUCCESS: All $totalCount web component builds completed in $([math]::Round($TotalDuration, 1))s" -ForegroundColor Green
        return $true
    }
    else {
        Write-Host "FAILED: $failureCount/$totalCount web component builds failed in $([math]::Round($TotalDuration, 1))s" -ForegroundColor Red
        Write-Host ""
        Write-Host "Failed web components:" -ForegroundColor Yellow
        foreach ($result in $Results) {
            if (-not $result.Success) {
                Write-Host "  - $($result.Name): $($result.FailureReason)" -ForegroundColor DarkYellow
            }
        }
        return $false
    }
}

