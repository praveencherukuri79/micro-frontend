import { ThemeMode } from './services/theme.service';

export interface MountOptions {
  theme?: ThemeMode;
  apiBasePath?: string;
}

/**
 * Angular Remote - Module Federation entry point (Webpack)
 * Uses async import to avoid eager consumption of shared Angular modules
 */
export default async function mount(
  container: HTMLElement,
  options: MountOptions = {}
): Promise<() => void> {
  try {
    // Dynamic import creates async boundary to prevent eager consumption
    const { bootstrapAngularComponent } = await import('./bootstrap-mf');
    return await bootstrapAngularComponent(container, options);
  } catch (error) {
    console.error('Error loading Angular webpack remote:', error);

    const errorDiv = document.createElement('div');
    errorDiv.style.padding = '2rem';
    errorDiv.style.background = '#ffebee';
    errorDiv.style.border = '1px solid #f44336';
    errorDiv.style.borderRadius = '8px';
    errorDiv.style.color = '#c62828';

    const title = document.createElement('h3');
    title.textContent = 'Error Loading Angular Remote';
    title.style.margin = '0 0 0.5rem 0';

    const message = document.createElement('p');
    message.textContent =
      error instanceof Error ? error.message : 'Unknown error';
    message.style.margin = '0';

    errorDiv.appendChild(title);
    errorDiv.appendChild(message);
    container.appendChild(errorDiv);

    return () => {};
  }
}
