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
  searchImages: (search) => {},
  filterImages: (filter) => {},
}));
