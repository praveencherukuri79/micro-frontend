import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, interval } from "rxjs";

export interface AppData {
  total: number;
  active: number;
  newToday: number;
  performance: number;
  timestamp: number;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  private dataSubject: BehaviorSubject<AppData>;
  public data$: Observable<AppData>;

  constructor() {
    const initialData = this.generateMockData();
    this.dataSubject = new BehaviorSubject<AppData>(initialData);
    this.data$ = this.dataSubject.asObservable();

    this.startAutoUpdate();
  }

  getCurrentData(): AppData {
    return this.dataSubject.value;
  }

  loadData(): void {
    try {
      const newData = this.generateMockData();
      this.dataSubject.next(newData);
    } catch (error) {
      console.error("Error loading data:", error);
      this.handleError(error);
    }
  }

  refreshData(): void {
    this.loadData();
  }

  private generateMockData(): AppData {
    return {
      total: Math.floor(Math.random() * 50000) + 100000,
      active: Math.floor(Math.random() * 10000) + 5000,
      newToday: Math.floor(Math.random() * 1000) + 500,
      performance: Math.floor(Math.random() * 30) + 70,
      timestamp: Date.now(),
    };
  }

  private startAutoUpdate(): void {
    try {
      interval(10000).subscribe(() => {
        this.loadData();
      });
    } catch (error) {
      console.error("Error starting auto-update:", error);
    }
  }

  private handleError(error: unknown): void {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Data Service Error:", errorMessage);

    const fallbackData: AppData = {
      total: 0,
      active: 0,
      newToday: 0,
      performance: 0,
      timestamp: Date.now(),
    };
    this.dataSubject.next(fallbackData);
  }
}

