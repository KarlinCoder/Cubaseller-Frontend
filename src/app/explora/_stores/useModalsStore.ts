import { create } from "zustand";

interface ModalsState {
  searchModal: boolean;
  toggleSearchModal: () => void;
  isSearchModalOpen: () => boolean;
}

export const useModalsStore = create<ModalsState>((set, get) => ({
  searchModal: false,
  toggleSearchModal: () => set((state) => ({ searchModal: !state.searchModal })),
  isSearchModalOpen: () => get().searchModal,
}));
