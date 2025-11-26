/**
 * Shared constants across all applications
 */

export const PORTS = {
  HOST: 5000,
  SHELL: 5003,
  PRODUCTS: 5001,
  CONTACT: 5002,
} as const;

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeMode = typeof THEME_MODE[keyof typeof THEME_MODE];

export const APP_NAMES = {
  HOST: 'host-app',
  SHELL: 'shellApp',
  PRODUCTS: 'productsApp',
  CONTACT: 'contactApp',
} as const;

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CONTACT: '/contact',
} as const;

