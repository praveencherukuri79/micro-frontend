import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

@Component({
  selector: 'app-angular-webpack-page',
  templateUrl: './angular-webpack-page.component.html',
  styleUrls: ['./angular-webpack-page.component.css']
})
export class AngularWebpackPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: false }) containerRef!: ElementRef<HTMLDivElement>;
  loading = true;
  error: string | null = null;
  theme: ThemeMode = 'light';
  apiBasePath = window.location.origin;
  private cleanupFn: (() => void) | null = null;
  private themeSubscription?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    // Wait for ViewChild to be available
    setTimeout(() => {
      this.themeSubscription = this.themeService.theme$.subscribe(theme => {
        this.theme = theme;
        this.loadAndMountRemote();
      });
    }, 0);
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
    if (this.cleanupFn) {
      this.cleanupFn();
      this.cleanupFn = null;
    }
  }

  async loadRemote(): Promise<void> {
    await this.loadAndMountRemote();
  }

  private async loadAndMountRemote(): Promise<void> {
    if (!this.containerRef?.nativeElement) {
      this.error = 'Container element not found.';
      this.loading = false;
      return;
    }

    // Clear previous remote if exists
    if (this.cleanupFn) {
      this.cleanupFn();
      this.containerRef.nativeElement.innerHTML = '';
    }

    this.loading = true;
    this.error = null;

    try {
      // Direct import from Module Federation remote
      const remote = await import('angularWebpack/App');
      
      const mountFn = remote.default || remote;
      if (typeof mountFn !== 'function') {
        throw new Error('Remote module does not export a mount function');
      }

      const options: MountOptions = {
        theme: this.theme,
        apiBasePath: this.apiBasePath
      };

      // Angular remotes return Promise<() => void>
      this.cleanupFn = await mountFn(this.containerRef.nativeElement, options);
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error loading Angular Webpack remote:', errorMsg);
      this.error = `Failed to load Angular Webpack remote: ${errorMsg}`;
      this.loading = false;
    }
  }
}
