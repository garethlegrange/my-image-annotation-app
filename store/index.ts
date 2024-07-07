import { create } from "zustand";
import type { Annotation } from "@/types";

interface Store {
  annotations: Annotation[];
  setAnnotations: (annotations: Annotation[]) => void;
  showAnnotations: boolean;
  toggleAllAnnotations: () => void;
}

export const useStore = create<Store>((set) => ({
  annotations: [],
  setAnnotations: (annotations) => set({ annotations }),
  showAnnotations: true,
  toggleAllAnnotations: () =>
    set((state) => ({ showAnnotations: !state.showAnnotations })),
}));
