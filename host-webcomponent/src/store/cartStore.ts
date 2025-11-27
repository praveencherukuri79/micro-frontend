import { create } from "zustand";

interface CartState {
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  count: 22,
  addToCart: () => set((state) => ({ count: state.count + 1 })),
  removeFromCart: () => set((state) => ({ count: Math.max(0, state.count - 1) })),
  clearCart: () => set({ count: 0 }),
}));
