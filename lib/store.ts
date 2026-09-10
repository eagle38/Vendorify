import { create } from 'zustand';
import { Stage } from '../data/types';

type AppState = {
  stage: Stage;
  setStage: (s: Stage) => void;

  savedVendorIds: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
};

export const useAppStore = create<AppState>((set, get) => ({
  stage: 'grey',
  setStage: (s) => set({ stage: s }),

  savedVendorIds: [],
  toggleSaved: (id) =>
    set((state) => ({
      savedVendorIds: state.savedVendorIds.includes(id)
        ? state.savedVendorIds.filter((x) => x !== id)
        : [...state.savedVendorIds, id],
    })),
  isSaved: (id) => get().savedVendorIds.includes(id),
}));
