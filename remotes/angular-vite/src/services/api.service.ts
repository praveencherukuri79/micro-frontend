import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

export interface AnalyticsData {
  total: number;
  active: number;
  newToday: number;
  performance: number;
  timestamp: number;
  source: string;
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private basePath: string;

  constructor() {
    this.basePath = window.location.origin;
  }

  setBasePath(basePath?: string): void {
    this.basePath = basePath || window.location.origin;
    console.log(`[Angular Vite Remote] API base path set to: ${this.basePath}`);
  }

  fetchAnalytics(): Observable<AnalyticsData> {
    console.log(
      `[Angular Vite Remote] Fetching from: ${this.basePath}/api/analytics`
    );

    const mockData: AnalyticsData = {
      total: Math.floor(Math.random() * 50000) + 100000,
      active: Math.floor(Math.random() * 10000) + 5000,
      newToday: Math.floor(Math.random() * 1000) + 500,
      performance: Math.floor(Math.random() * 30) + 70,
      timestamp: Date.now(),
      source: `${this.basePath}/api/analytics`,
    };

    return of(mockData).pipe(delay(900));
  }

  getBasePath(): string {
    return this.basePath;
  }
}
