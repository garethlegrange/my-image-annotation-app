import { create } from "zustand";
import type { Annotation } from "@/types";

// Define the store
interface Store {
  annotations: Annotation[];
  setAnnotations: (annotations: Annotation[]) => void;
  showAnnotations: boolean;
  toggleAllAnnotations: () => void;
  toggleAnnotation: (class_uuid: string) => void;
  searchAnnotations: (search: string) => void;
}

export const useStore = create<Store>((set) => ({
  // Initial state
  annotations: [],
  // Actions
  // Set the annotations and set them all to visible
  setAnnotations: (annotations) =>
    set({
      annotations: annotations.map((annotation) => ({
        ...annotation,
        visible: true,
      })),
    }),
  // Show all annotations
  showAnnotations: true,
  // Toggle all annotations
  toggleAllAnnotations: () =>
    set((state) => {
        // Toggle the showAnnotations state
        const showAnnotations = !state.showAnnotations;

        // Map over the annotations and set them to visible or not based on the showAnnotations state
        const annotations = state.annotations.map((annotation) => ({
            ...annotation,
            visible: showAnnotations,
        }));
    
        // Return the new state
        return { showAnnotations, annotations };
    }),
  // Toggle an annotation by class_uuid
  toggleAnnotation: (class_uuid) => {
    set((state) => {
      // Map over the annotations and toggle the visibility of the annotation with the matching class_uuid
      const annotations = state.annotations.map((annotation) =>
        annotation.class_uuid === class_uuid
          ? { ...annotation, visible: !annotation.visible }
          : annotation
      );

      // Return the new state
      return { annotations };
    });
  },
  // Search annotations by class_name
  searchAnnotations: (search) => {
    set((state) => {
      // Map over the annotations and set the visibility based on the search term
      const annotations = state.annotations.map((annotation) => ({
        ...annotation,
        visible: annotation.class_name
          .toLowerCase()
          .includes(search.toLowerCase()),
      }));

      // Return the new state
      return { annotations };
    });
  },
}));
