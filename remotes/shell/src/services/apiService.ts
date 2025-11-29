/**
 * API Service for Shell Remote
 * Fetches navigation and footer configuration
 */

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
}

export interface FooterConfig {
  companyName: string;
  tagline: string;
  links: Array<{
    label: string;
    url: string;
  }>;
  socialMedia: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

export class ShellApiService {
  private basePath: string;

  constructor(basePath?: string) {
    // Auto-resolve: if no basePath provided, use same origin
    this.basePath = basePath || window.location.origin;
  }

  /**
   * Fetch navigation configuration
   * In real scenario: fetch(`${this.basePath}/api/navigation`)
   */
  async fetchNavigation(): Promise<NavigationItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Shell Remote] Fetching from: ${this.basePath}/api/navigation`
        );

        resolve([
          { label: "Home", path: "/", icon: "🏠" },
          { label: "Products", path: "/products", icon: "📦" },
          { label: "Contact", path: "/contact", icon: "📧" },
          { label: "Angular (WP)", path: "/angular-webpack", icon: "🅰️" },
          { label: "Angular (Vite)", path: "/angular-vite", icon: "⚡" },
          { label: "Vue", path: "/vue", icon: "💚" },
        ]);
      }, 300);
    });
  }

  /**
   * Fetch footer configuration
   * In real scenario: fetch(`${this.basePath}/api/footer`)
   */
  async fetchFooterConfig(): Promise<FooterConfig> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Shell Remote] Fetching from: ${this.basePath}/api/footer`
        );

        resolve({
          companyName: "ModuleFed Corp",
          tagline: "Building the future with micro-frontends",
          links: [
            { label: "About Us", url: "/about" },
            { label: "Privacy Policy", url: "/privacy" },
            { label: "Terms of Service", url: "/terms" },
          ],
          socialMedia: [
            { platform: "GitHub", url: "https://github.com", icon: "🐙" },
            { platform: "Twitter", url: "https://twitter.com", icon: "🐦" },
            {
              platform: "LinkedIn",
              url: "https://linkedin.com",
              icon: "💼",
            },
          ],
        });
      }, 300);
    });
  }

  /**
   * Get current base path
   */
  getBasePath(): string {
    return this.basePath;
  }
}
