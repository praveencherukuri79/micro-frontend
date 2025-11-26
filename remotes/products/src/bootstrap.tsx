// This file is used to demonstrate how to share the cart store across remotes
// In a real application, you would import the actual store from the host

export interface AppStoreType {
  cartCount: number;
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

// Mock store for standalone mode
export const mockAppStore = {
  cartCount: 0,
  addToCart: () => console.log('Add to cart (standalone mode)'),
  removeFromCart: () => console.log('Remove from cart (standalone mode)'),
  clearCart: () => console.log('Clear cart (standalone mode)'),
};

// In production, this would be imported from the host via Module Federation
// export { useAppStore } from 'host/appStore';

