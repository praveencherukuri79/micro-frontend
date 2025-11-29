/**
 * API Service for Vue Remote
 * Fetches settings and configuration data
 */

export interface SettingsData {
  notifications: boolean;
  autoSave: boolean;
  language: string;
  theme: string;
  privacy: string;
  dataCollection: boolean;
  timestamp: number;
  source: string;
}

export class VueApiService {
  private basePath: string;

  constructor(basePath?: string) {
    this.basePath = basePath || window.location.origin;
  }

  /**
   * Fetch user settings
   * In real scenario: fetch(`${this.basePath}/api/settings`)
   */
  async fetchSettings(): Promise<SettingsData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Vue Remote] Fetching from: ${this.basePath}/api/settings`
        );

        resolve({
          notifications: true,
          autoSave: false,
          language: "English",
          theme: "System Default",
          privacy: "Friends Only",
          dataCollection: false,
          timestamp: Date.now(),
          source: `${this.basePath}/api/settings`,
        });
      }, 600);
    });
  }

  /**
   * Save user settings
   * In real scenario: fetch(`${this.basePath}/api/settings`, { method: 'POST', ... })
   */
  async saveSettings(
    settings: Partial<SettingsData>
  ): Promise<{ success: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Vue Remote] Saving to: ${this.basePath}/api/settings`,
          settings
        );
        resolve({ success: true });
      }, 800);
    });
  }

  getBasePath(): string {
    return this.basePath;
  }
}
