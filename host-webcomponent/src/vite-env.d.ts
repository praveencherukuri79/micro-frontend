/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'shell-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
      'cart-count'?: number;
      component?: 'header' | 'footer';
    }, HTMLElement>;
    'products-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
    }, HTMLElement>;
    'contact-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
    }, HTMLElement>;
    'angular-webpack-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
    }, HTMLElement>;
    'angular-vite-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
    }, HTMLElement>;
    'vue-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      theme?: string;
    }, HTMLElement>;
  }
}

