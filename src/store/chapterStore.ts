import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CurrentChapterState {
  chId: string;
  setChId: (newChId: string) => void;
}

const useCurrentChapterStore = create<CurrentChapterState>()(
  immer((set) => ({
    chId: "01",

    setChId: (newChId: string) =>
      set((state) => {
        state.chId = newChId;
      }),
  }))
);

export { useCurrentChapterStore };
