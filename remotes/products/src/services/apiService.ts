/**
 * API Service for Products Remote
 * Makes async API calls using the base path provided by the host
 */

export interface ProductApiData {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
  stock: number;
}

export class ProductApiService {
  private basePath: string;

  constructor(basePath?: string) {
    // Auto-resolve: if no basePath provided, use same origin
    this.basePath = basePath || window.location.origin;
  }

  /**
   * Fetch products from API (mocked with Promise)
   * In real scenario: fetch(`${this.basePath}/api/products`)
   */
  async fetchProducts(): Promise<ProductApiData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `[Products Remote] Fetching from: ${this.basePath}/api/products`
        );

        resolve([
          {
            id: 1,
            name: "Premium Headphones",
            price: 299.99,
            category: "Electronics",
            rating: 4.5,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            description:
              "High-quality wireless headphones with noise cancellation",
            stock: 45,
          },
          {
            id: 2,
            name: "Smart Watch",
            price: 399.99,
            category: "Electronics",
            rating: 4.8,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
            description: "Feature-rich smartwatch with health tracking",
            stock: 32,
          },
          {
            id: 3,
            name: "Laptop Stand",
            price: 49.99,
            category: "Accessories",
            rating: 4.3,
            image:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
            description: "Ergonomic aluminum laptop stand",
            stock: 78,
          },
          {
            id: 4,
            name: "Mechanical Keyboard",
            price: 159.99,
            category: "Electronics",
            rating: 4.7,
            image:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
            description: "RGB mechanical keyboard with premium switches",
            stock: 23,
          },
          {
            id: 5,
            name: "Wireless Mouse",
            price: 79.99,
            category: "Electronics",
            rating: 4.4,
            image:
              "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
            description: "Ergonomic wireless mouse with precision tracking",
            stock: 56,
          },
          {
            id: 6,
            name: "USB-C Hub",
            price: 69.99,
            category: "Accessories",
            rating: 4.6,
            image:
              "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
            description: "Multi-port USB-C hub with 4K HDMI support",
            stock: 34,
          },
        ]);
      }, 800); // Simulate network delay
    });
  }

  /**
   * Fetch single product by ID
   */
  async fetchProductById(id: number): Promise<ProductApiData | null> {
    const products = await this.fetchProducts();
    return products.find((p) => p.id === id) || null;
  }

  /**
   * Get current base path
   */
  getBasePath(): string {
    return this.basePath;
  }
}
