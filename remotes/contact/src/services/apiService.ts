/**
 * API Service for Contact Remote
 * Handles contact form submissions and configuration
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

export interface ContactConfig {
  supportEmail: string;
  phone: string;
  address: string;
  officeHours: string;
}

export class ContactApiService {
  private basePath: string;

  constructor(basePath?: string) {
    // Auto-resolve: if no basePath provided, use same origin
    this.basePath = basePath || window.location.origin;
  }

  /**
   * Submit contact form
   * In real scenario: fetch(`${this.basePath}/api/contact`, { method: 'POST', body: ... })
   */
  async submitContactForm(
    data: ContactFormData
  ): Promise<ContactSubmissionResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Contact Remote] Submitting to: ${this.basePath}/api/contact`
        );
        console.log("Form data:", data);

        // Simulate successful submission
        resolve({
          success: true,
          message: "Thank you! We'll get back to you within 24 hours.",
          ticketId: `TICKET-${Date.now()}`,
        });
      }, 1200); // Simulate network delay
    });
  }

  /**
   * Fetch contact configuration
   * In real scenario: fetch(`${this.basePath}/api/contact/config`)
   */
  async fetchContactConfig(): Promise<ContactConfig> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Contact Remote] Fetching from: ${this.basePath}/api/contact/config`
        );

        resolve({
          supportEmail: "support@modulefed.com",
          phone: "+1 (555) 123-4567",
          address: "123 Micro-Frontend St, Cloud City, CA 94000",
          officeHours: "Monday - Friday, 9:00 AM - 5:00 PM PST",
        });
      }, 500);
    });
  }

  /**
   * Get current base path
   */
  getBasePath(): string {
    return this.basePath;
  }
}
