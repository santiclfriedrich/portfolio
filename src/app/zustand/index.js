import { create } from "zustand";

export const useStoreLanguage = create((set) => ({
    currentLanguage: 'es',
    changeCurrentLanguage: () => {
        set((state) => ({
            currentLanguage: state.currentLanguage === 'en' ? 'es' : 'en',
        }));
    },
}));