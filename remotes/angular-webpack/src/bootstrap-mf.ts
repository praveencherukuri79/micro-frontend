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

/**
 * Bootstrap function for Module Federation
 * This file is dynamically imported to create async boundary
 */
export async function bootstrapAngularComponent(
  container: HTMLElement,
  theme: ThemeMode = 'light'
): Promise<() => void> {
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

  console.log('Angular webpack remote mounted successfully');

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
