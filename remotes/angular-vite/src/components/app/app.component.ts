import type { OnDestroy, OnInit } from "@angular/core";
import { Component, inject, Input } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { DataService } from "../../services/data.service";
import type { ThemeMode } from "../../services/theme.service";
import { ThemeService } from "../../services/theme.service";

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
  selector: "app-root",
  template: `
    <div [class]="'app-container ' + themeMode">
      <div class="app-header">
        <h1>Angular Remote (Vite)</h1>
        <p class="subtitle">Built with Angular 17 + RxJS + TypeScript + Vite</p>
        <button class="theme-toggle" (click)="toggleTheme()">
          {{ themeMode === 'light' ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </div>

      <div class="stats-grid">
        <div class="stat-card" *ngFor="let stat of stats">
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-info">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div
              class="stat-change"
              [class.positive]="stat.change > 0"
              [class.negative]="stat.change < 0"
            >
              {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
            </div>
          </div>
        </div>
      </div>

      <div class="content-grid">
        <div class="card">
          <h3>Data Visualization</h3>
          <div class="bar-chart">
            <div *ngFor="let item of chartData" class="bar-item">
              <div
                class="bar"
                [style.height.%]="getBarHeight(item.value)"
                [style.background-color]="item.color"
              ></div>
              <div class="bar-label">{{ item.label }}</div>
              <div class="bar-value">{{ item.value }}</div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Status</h3>
          <div class="status-list">
            <div class="status-item">
              <span class="status-dot active"></span>
              <span>Service: Running</span>
            </div>
            <div class="status-item">
              <span class="status-dot active"></span>
              <span>State: Connected</span>
            </div>
            <div class="status-item">
              <span class="status-dot"></span>
              <span>Updates: Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tech-info">
        <span class="badge">Angular 17</span>
        <span class="badge">TypeScript</span>
        <span class="badge">RxJS</span>
        <span class="badge">Vite (Inline Template Hack)</span>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      min-height: 100vh;
      transition: background-color 0.3s, color 0.3s;
    }
    .app-container.light {
      background-color: #f5f5f5;
      color: #212121;
    }
    .app-container.dark {
      background-color: #121212;
      color: #ffffff;
    }
    .app-header {
      margin-bottom: 2rem;
      position: relative;
    }
    .app-header h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }
    .subtitle {
      color: #757575;
      margin: 0;
      font-size: 1.125rem;
    }
    .dark .subtitle {
      color: #b0b0b0;
    }
    .theme-toggle {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      background-color: #1976d2;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    .theme-toggle:hover {
      background-color: #1565c0;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .dark .stat-card {
      background: #1e1e1e;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .stat-icon {
      font-size: 2.5rem;
    }
    .stat-info {
      flex: 1;
    }
    .stat-label {
      font-size: 0.875rem;
      color: #757575;
      margin-bottom: 0.25rem;
    }
    .dark .stat-label {
      color: #b0b0b0;
    }
    .stat-value {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    .stat-change {
      font-size: 0.875rem;
      font-weight: 500;
    }
    .stat-change.positive {
      color: #4caf50;
    }
    .stat-change.negative {
      color: #f44336;
    }
    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .card {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .dark .card {
      background: #1e1e1e;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .card h3 {
      margin: 0 0 1.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
    .bar-chart {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      height: 200px;
      gap: 1rem;
    }
    .bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
    .bar {
      width: 100%;
      border-radius: 8px 8px 0 0;
      transition: height 0.3s;
      min-height: 20px;
    }
    .bar-label {
      font-size: 0.875rem;
      color: #757575;
    }
    .dark .bar-label {
      color: #b0b0b0;
    }
    .bar-value {
      font-weight: 600;
      font-size: 1rem;
    }
    .status-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .status-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
    }
    .status-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #757575;
    }
    .status-dot.active {
      background-color: #4caf50;
      box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
    }
    .tech-info {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .badge {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-weight: 500;
      background-color: #1976d2;
      color: white;
    }
    .dark .badge {
      background-color: #90caf9;
      color: #121212;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  @Input() initialTheme: ThemeMode = "light";

  private destroy$ = new Subject<void>();

  themeMode: ThemeMode = "light";
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

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private updateStats(data: any): void {
    this.stats = [
      {
        icon: "📊",
        label: "Total Items",
        value: data.total.toLocaleString(),
        change: 12.5,
      },
      {
        icon: "✅",
        label: "Active",
        value: data.active.toLocaleString(),
        change: 8.2,
      },
      {
        icon: "🆕",
        label: "New Today",
        value: data.newToday.toLocaleString(),
        change: 15.3,
      },
      {
        icon: "⚡",
        label: "Performance",
        value: `${data.performance}%`,
        change: 5.7,
      },
    ];
  }

  private updateChartData(): void {
    this.chartData = [
      { label: "Mon", value: 245, color: "#1976d2" },
      { label: "Tue", value: 312, color: "#42a5f5" },
      { label: "Wed", value: 289, color: "#1976d2" },
      { label: "Thu", value: 401, color: "#42a5f5" },
      { label: "Fri", value: 367, color: "#1976d2" },
    ];
  }

  getBarHeight(value: number): number {
    const max = Math.max(...this.chartData.map((d) => d.value));
    return (value / max) * 100;
  }
}
