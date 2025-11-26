import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { logger } from '../utils/logger';

interface User {
  name: string;
  email: string;
}

interface AppState {
  user: User | null;
  cartCount: number;
  setUser: (user: User | null) => void;
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

const MAX_CART_ITEMS = 99;

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      cartCount: 0,
      setUser: (user) => {
        logger.debug('User set:', user?.email);
        set({ user });
      },
      addToCart: () =>
        set((state) => {
          const newCount = Math.min(state.cartCount + 1, MAX_CART_ITEMS);
          if (newCount >= MAX_CART_ITEMS) {
            logger.warn('Maximum cart items reached');
          }
          logger.debug('Added to cart. New count:', newCount);
          return { cartCount: newCount };
        }),
      removeFromCart: () =>
        set((state) => {
          const newCount = Math.max(0, state.cartCount - 1);
          logger.debug('Removed from cart. New count:', newCount);
          return { cartCount: newCount };
        }),
      clearCart: () => {
        logger.debug('Cart cleared');
        set({ cartCount: 0 });
      },
    }),
    {
      name: 'app-storage',
    }
  )
);

