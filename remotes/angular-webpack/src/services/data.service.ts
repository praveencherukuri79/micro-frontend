import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { AnalyticsData, ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject: BehaviorSubject<AnalyticsData>;
  public data$: Observable<AnalyticsData>;
  public apiService = inject(ApiService); // Public for component access

  constructor() {
    const initialData = this.getInitialData();
    this.dataSubject = new BehaviorSubject<AnalyticsData>(initialData);
    this.data$ = this.dataSubject.asObservable();
  }

  private getInitialData(): AnalyticsData {
    return {
      total: 0,
      active: 0,
      newToday: 0,
      performance: 0,
      timestamp: Date.now(),
      source: 'initial',
    };
  }

  getCurrentData(): AnalyticsData {
    return this.dataSubject.value;
  }

  loadData(): void {
    this.apiService
      .fetchAnalytics()
      .pipe(
        catchError((error) => {
          console.error('Error fetching analytics:', error);
          return of(this.getInitialData());
        })
      )
      .subscribe((data) => {
        this.dataSubject.next(data);
      });
  }

}
