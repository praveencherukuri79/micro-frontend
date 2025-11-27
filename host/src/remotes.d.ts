// Type declarations for Module Federation remotes

declare module "shellApp/Header" {
  export interface HeaderProps {
    themeMode?: "light" | "dark";
    cartCount?: number;
    onToggleTheme?: () => void;
    onNavigate?: (path: string) => void;
  }
  const Header: React.ComponentType<HeaderProps>;
  export default Header;
}

declare module "shellApp/Footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "productsApp/ProductsPage" {
  const ProductsPage: React.ComponentType;
  export default ProductsPage;
}

declare module "contactApp/ContactPage" {
  const ContactPage: React.ComponentType;
  export default ContactPage;
}

declare module "angularWebpack/App" {
  export default function mount(
    container: HTMLElement,
    theme: "light" | "dark"
  ): Promise<() => void>;
}

declare module "angularVite/App" {
  export default function mount(
    container: HTMLElement,
    theme: "light" | "dark"
  ): Promise<() => void>;
}

declare module "vueApp/App" {
  export default function mount(
    container: HTMLElement,
    theme: "light" | "dark"
  ): () => void;
}
