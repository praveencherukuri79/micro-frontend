import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService, ThemeMode } from '../services/theme.service';

interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements AfterViewInit, OnDestroy {
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
      const remote = await import('contactApp/Mount');
      
      if (!remote.mount || typeof remote.mount !== 'function') {
        throw new Error('Remote module does not export a mount function');
      }

      const options: MountOptions = {
        theme: this.theme,
        apiBasePath: this.apiBasePath
      };

      // Contact mount function is synchronous (returns () => void, not Promise)
      this.cleanupFn = remote.mount(this.containerRef.nativeElement, options);
      this.loading = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error loading Contact remote:', errorMsg);
      this.error = `Failed to load Contact remote: ${errorMsg}`;
      this.loading = false;
    }
  }
}
