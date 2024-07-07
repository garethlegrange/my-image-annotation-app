import { create } from "zustand";
import type { Annotation } from "@/types";

interface Store {
  annotations: Annotation[];
  setAnnotations: (annotations: Annotation[]) => void;
  showAnnotations: boolean;
  toggleAllAnnotations: () => void;
  toggleAnnotation: (class_uuid: string) => void;
  searchAnnotations: (search: string) => void;
}

export const useStore = create<Store>((set) => ({
  annotations: [],
  setAnnotations: (annotations) =>
    set({
      annotations: annotations.map((annotation) => ({
        ...annotation,
        visible: true,
      })),
    }),
  showAnnotations: true,
  toggleAllAnnotations: () =>
    set((state) => {
        const showAnnotations = !state.showAnnotations;
        const annotations = state.annotations.map((annotation) => ({
            ...annotation,
            visible: showAnnotations,
        }));
    
        return { showAnnotations, annotations };
    }),
  toggleAnnotation: (class_uuid) => {
    set((state) => {
      const annotations = state.annotations.map((annotation) =>
        annotation.class_uuid === class_uuid
          ? { ...annotation, visible: !annotation.visible }
          : annotation
      );

      return { annotations };
    });
  },
  searchAnnotations: (search) => {
    set((state) => {
      const annotations = state.annotations.map((annotation) => ({
        ...annotation,
        visible: annotation.class_name
          .toLowerCase()
          .includes(search.toLowerCase()),
      }));

      return { annotations };
    });
  },
}));
