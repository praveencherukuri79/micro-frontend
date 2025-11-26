import { create } from 'zustand';

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

export const useAppStore = create<AppState>((set) => ({
  user: null,
  cartCount: 0,
  setUser: (user) => set({ user }),
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  removeFromCart: () => set((state) => ({ cartCount: Math.max(0, state.cartCount - 1) })),
  clearCart: () => set({ cartCount: 0 }),
}));

