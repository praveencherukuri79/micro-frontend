import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject: BehaviorSubject<ThemeMode>;
  public theme$: Observable<ThemeMode>;

  constructor() {
    // Initialize with stored theme or default to light
    const storedTheme = this.getStoredTheme();
    this.themeSubject = new BehaviorSubject<ThemeMode>(storedTheme);
    this.theme$ = this.themeSubject.asObservable();
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

  toggleTheme(): void {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
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
