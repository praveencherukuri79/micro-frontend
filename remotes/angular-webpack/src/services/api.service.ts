import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface AnalyticsData {
  total: number;
  active: number;
  newToday: number;
  performance: number;
  timestamp: number;
  source: string; // API endpoint source
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private basePath: string;

  constructor() {
    // Will be set via setBasePath() when component initializes
    this.basePath = window.location.origin;
  }

  /**
   * Set the API base path (provided by host)
   */
  setBasePath(basePath?: string): void {
    this.basePath = basePath || window.location.origin;
  }

  /**
   * Fetch analytics data from API (mocked with RxJS)
   * In real scenario: this.http.get(`${this.basePath}/api/analytics`)
   */
  fetchAnalytics(): Observable<AnalyticsData> {

    const mockData: AnalyticsData = {
      total: Math.floor(Math.random() * 50000) + 100000,
      active: Math.floor(Math.random() * 10000) + 5000,
      newToday: Math.floor(Math.random() * 1000) + 500,
      performance: Math.floor(Math.random() * 30) + 70,
      timestamp: Date.now(),
      source: `${this.basePath}/api/analytics`,
    };

    // Simulate HTTP call with delay
    return of(mockData).pipe(delay(1000));
  }

  /**
   * Get current base path
   */
  getBasePath(): string {
    return this.basePath;
  }
}
