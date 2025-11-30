import { Injectable, inject, OnDestroy } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  interval,
  switchMap,
  catchError,
  of,
  Subscription,
} from "rxjs";
import { ApiService, AnalyticsData } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DataService implements OnDestroy {
  private dataSubject: BehaviorSubject<AnalyticsData>;
  public data$: Observable<AnalyticsData>;
  public apiService = inject(ApiService); // Public for component access
  private autoUpdateSubscription?: Subscription;

  constructor() {
    console.log("[DataService Vite] Constructor called");
    const initialData = this.getInitialData();
    this.dataSubject = new BehaviorSubject<AnalyticsData>(initialData);
    this.data$ = this.dataSubject.asObservable();

    // Don't start auto-update in constructor - let component control when to fetch
  }

  ngOnDestroy(): void {
    console.log("[DataService Vite] ngOnDestroy called");
    this.stopAutoUpdate();
  }

  private getInitialData(): AnalyticsData {
    return {
      total: 0,
      active: 0,
      newToday: 0,
      performance: 0,
      timestamp: Date.now(),
      source: "initial",
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
          console.error("Error fetching analytics:", error);
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
    // Clean up any existing subscription first
    this.stopAutoUpdate();

    this.autoUpdateSubscription = interval(10000)
      .pipe(
        switchMap(() => this.apiService.fetchAnalytics()),
        catchError((error) => {
          console.error("Error in auto-update:", error);
          return of(this.getInitialData());
        })
      )
      .subscribe((data) => {
        this.dataSubject.next(data);
      });
  }

  private stopAutoUpdate(): void {
    if (this.autoUpdateSubscription) {
      this.autoUpdateSubscription.unsubscribe();
      this.autoUpdateSubscription = undefined;
    }
  }
}
