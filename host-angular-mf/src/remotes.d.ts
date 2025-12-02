// Type declarations for Module Federation remotes

declare module 'productsApp/Mount' {
  export interface MountOptions {
    theme?: 'light' | 'dark';
    apiBasePath?: string;
  }
  export function mount(
    container: HTMLElement,
    options?: MountOptions
  ): () => void;
}

declare module 'contactApp/Mount' {
  export interface MountOptions {
    theme?: 'light' | 'dark';
    apiBasePath?: string;
  }
  export function mount(
    container: HTMLElement,
    options?: MountOptions
  ): () => void;
}

declare module 'angularWebpack/App' {
  export interface MountOptions {
    theme?: 'light' | 'dark';
    apiBasePath?: string;
  }
  export default function mount(
    container: HTMLElement,
    options?: MountOptions
  ): Promise<() => void>;
}

declare module 'angularVite/App' {
  export interface MountOptions {
    theme?: 'light' | 'dark';
    apiBasePath?: string;
  }
  export default function mount(
    container: HTMLElement,
    options?: MountOptions
  ): Promise<() => void>;
}

declare module 'vueApp/App' {
  export interface MountOptions {
    theme?: 'light' | 'dark';
    apiBasePath?: string;
  }
  export default function mount(
    container: HTMLElement,
    options?: MountOptions
  ): () => void;
}

