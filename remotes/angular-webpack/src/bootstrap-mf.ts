import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';
import { ApiService } from './services/api.service';
import { ThemeMode, ThemeService } from './services/theme.service';

export interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

/**
 * Bootstrap function for Module Federation
 * This file is dynamically imported to create async boundary
 */
export async function bootstrapAngularComponent(
  container: HTMLElement,
  options: MountOptions = {}
): Promise<() => void> {
  const { theme = 'light', apiBasePath } = options;
  const mountPoint = document.createElement('div');
  mountPoint.id = `angular-webpack-${Date.now()}`;
  container.appendChild(mountPoint);

  const appRef = await createApplication({
    providers: [],
  });

  const injector = appRef.injector;
  const applicationRef = injector.get(ApplicationRef);
  const environmentInjector = injector.get(EnvironmentInjector);

  const componentRef: ComponentRef<AppComponent> = createComponent(
    AppComponent,
    {
      environmentInjector,
      hostElement: mountPoint,
    }
  );

  applicationRef.attachView(componentRef.hostView);

  // Initialize theme from host
  const themeService = componentRef.injector.get(ThemeService);
  themeService.initializeFromExternal(theme);

  componentRef.changeDetectorRef.detectChanges();

  // Set API base path
  const apiService = componentRef.injector.get(ApiService);
  apiService.setBasePath(apiBasePath);

  let destroyed = false;

  return () => {
    if (destroyed) {
      return;
    }
    destroyed = true;

    try {
      applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      container.innerHTML = '';
    } catch (error) {
      console.error('[Angular Webpack MF] Error during cleanup:', error);
    }
  };
}
