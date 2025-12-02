import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme-storage';
  private themeSubject: BehaviorSubject<ThemeMode>;
  public theme$: Observable<ThemeMode>;

  constructor() {
    const savedTheme = this.getStoredTheme();
    this.themeSubject = new BehaviorSubject<ThemeMode>(savedTheme);
    this.theme$ = this.themeSubject.asObservable();
    this.initTheme();
  }

  get currentTheme(): ThemeMode {
    return this.themeSubject.value;
  }

  initTheme(): void {
    const theme = this.getStoredTheme();
    this.applyTheme(theme);
    this.themeSubject.next(theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.applyTheme(theme);
    this.saveTheme(theme);
    this.themeSubject.next(theme);
  }

  private applyTheme(theme: ThemeMode): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    
    // Update data attribute for CSS variables
    document.documentElement.setAttribute('data-theme', theme);
  }

  private getStoredTheme(): ThemeMode {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }
    return 'light';
  }

  private saveTheme(theme: ThemeMode): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }
}

