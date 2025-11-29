import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';
import { ThemeMode, ThemeService } from './services/theme.service';
import { ApiService } from './services/api.service';

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

  componentRef.instance.initialTheme = theme;

  applicationRef.attachView(componentRef.hostView);
  componentRef.changeDetectorRef.detectChanges();

  const themeService = componentRef.injector.get(ThemeService);
  themeService.setTheme(theme);

  // Set API base path
  const apiService = componentRef.injector.get(ApiService);
  apiService.setBasePath(apiBasePath);

  console.log('Angular webpack remote mounted successfully');
  console.log(`API base path: ${apiService.getBasePath()}`);

  return () => {
    try {
      applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      appRef.destroy();
      mountPoint.remove();
      console.log('Angular webpack remote unmounted');
    } catch (error) {
      console.error('Error cleaning up Angular app:', error);
    }
  };
}
