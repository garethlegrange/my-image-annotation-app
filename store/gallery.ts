import { create } from "zustand";
import type { Image } from "@/types";

interface galleryStore {
  images: Image[];
  setImages: (images: Image[]) => void;
  searchImages: (search: string) => void;
  filterImages: (filter: string) => void;
}

export const useGalleryStore = create<galleryStore>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  searchImages: (search) => {
    set((state) => {
      console.log("searching images", search);

      if (!search.trim()) {
        return { images: state.images };
      }

      const filtered = state.images.filter((image) =>
        image.name.toLowerCase().includes(search.toLowerCase())
      );

      return { images: filtered };
    });
  },
  filterImages: (filter) => {},
}));
