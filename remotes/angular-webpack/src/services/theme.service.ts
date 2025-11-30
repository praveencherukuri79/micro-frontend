import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject: BehaviorSubject<ThemeMode>;
  public theme$: Observable<ThemeMode>;
  private initialized = false;

  constructor() {
    // Initialize with stored theme or default to light
    const storedTheme = this.getStoredTheme();
    this.themeSubject = new BehaviorSubject<ThemeMode>(storedTheme);
    this.theme$ = this.themeSubject.asObservable();
  }

  /**
   * Initialize theme from external source (e.g., Module Federation host)
   * This should be called once when the remote is mounted
   */
  initializeFromExternal(theme: ThemeMode): void {
    if (!this.initialized) {
      this.initialized = true;
      this.setTheme(theme);
    }
  }

  getCurrentTheme(): ThemeMode {
    return this.themeSubject.value;
  }

  setTheme(theme: ThemeMode): void {
    try {
      this.themeSubject.next(theme);
      this.storeTheme(theme);
      this.applyThemeToDocument(theme);
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  }

  private getStoredTheme(): ThemeMode {
    try {
      const stored = localStorage.getItem('angular-remote-theme');
      return (stored === 'dark' ? 'dark' : 'light') as ThemeMode;
    } catch (error) {
      console.error('Error reading stored theme:', error);
      return 'light';
    }
  }

  private storeTheme(theme: ThemeMode): void {
    try {
      localStorage.setItem('angular-remote-theme', theme);
    } catch (error) {
      console.error('Error storing theme:', error);
    }
  }

  private applyThemeToDocument(theme: ThemeMode): void {
    try {
      document.documentElement.setAttribute('data-theme', theme);
    } catch (error) {
      console.error('Error applying theme to document:', error);
    }
  }
}
