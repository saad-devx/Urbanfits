import { create } from 'zustand'

export const useCursor = create((set) => ({
  cursor: true,
  toggleCursor: () => set((state) => ({ cursor: !state.cursor })),
}));
