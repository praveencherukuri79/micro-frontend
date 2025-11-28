import { CommonModule } from '@angular/common';
import type { OnDestroy, OnInit } from '@angular/core';
import { Component, inject, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';
import type { ThemeMode } from '../../services/theme.service';
import { ThemeService } from '../../services/theme.service';

interface StatCard {
  icon: string;
  label: string;
  value: string;
  change: number;
}

interface ChartDataItem {
  label: string;
  value: number;
  color: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  providers: [ThemeService, DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() initialTheme: ThemeMode = 'light';

  private destroy$ = new Subject<void>();

  themeMode: ThemeMode = 'light';
  stats: StatCard[] = [];
  chartData: ChartDataItem[] = [];

  private themeService = inject(ThemeService);
  private dataService = inject(DataService);

  ngOnInit(): void {
    this.themeMode = this.initialTheme;
    this.themeService.setTheme(this.initialTheme);

    this.themeService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme: ThemeMode) => {
        this.themeMode = theme;
      });

    this.dataService.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.updateStats(data);
        this.updateChartData();
      });

    this.dataService.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateStats(data: any): void {
    this.stats = [
      {
        icon: '📊',
        label: 'Total Items',
        value: data.total.toLocaleString(),
        change: 12.5,
      },
      {
        icon: '✅',
        label: 'Active',
        value: data.active.toLocaleString(),
        change: 8.2,
      },
      {
        icon: '🆕',
        label: 'New Today',
        value: data.newToday.toLocaleString(),
        change: 15.3,
      },
      {
        icon: '⚡',
        label: 'Performance',
        value: `${data.performance}%`,
        change: 5.7,
      },
    ];
  }

  private updateChartData(): void {
    this.chartData = [
      { label: 'Mon', value: 245, color: '#1976d2' },
      { label: 'Tue', value: 312, color: '#42a5f5' },
      { label: 'Wed', value: 289, color: '#1976d2' },
      { label: 'Thu', value: 401, color: '#42a5f5' },
      { label: 'Fri', value: 367, color: '#1976d2' },
    ];
  }

  getBarHeight(value: number): number {
    const max = Math.max(...this.chartData.map((d) => d.value));
    return (value / max) * 100;
  }
}
