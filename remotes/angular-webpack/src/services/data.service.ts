import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  interval,
  switchMap,
  catchError,
  of,
} from 'rxjs';
import { ApiService, AnalyticsData } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject: BehaviorSubject<AnalyticsData>;
  public data$: Observable<AnalyticsData>;
  private apiService = inject(ApiService);

  constructor() {
    const initialData = this.getInitialData();
    this.dataSubject = new BehaviorSubject<AnalyticsData>(initialData);
    this.data$ = this.dataSubject.asObservable();

    this.startAutoUpdate();
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

  refreshData(): void {
    this.loadData();
  }

  private startAutoUpdate(): void {
    interval(10000)
      .pipe(
        switchMap(() => this.apiService.fetchAnalytics()),
        catchError((error) => {
          console.error('Error in auto-update:', error);
          return of(this.getInitialData());
        })
      )
      .subscribe((data) => {
        this.dataSubject.next(data);
      });
  }
}
