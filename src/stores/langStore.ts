import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { i18n, type Locale } from "@/i18n-config";

interface LangStore {
  currentLang: Locale;
  setCurrentLang: (newLang: Locale) => void;
}

const useLangStore = create(
  persist<LangStore>(
    (set, get) => ({
      currentLang: i18n.defaultLocale,
      setCurrentLang: (newLang: Locale) =>
        set({
          currentLang: newLang,
        }),
    }),
    {
      name: "lang",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLangStore;
