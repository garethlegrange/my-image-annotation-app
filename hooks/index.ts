import { useQuery } from "@tanstack/react-query";
// Import the fetchImages, fetchImage, and fetchAnnotations functions from the server actions
import { fetchImages, fetchImage, fetchAnnotations } from "@/server/actions";

// Custom hooks to fetch images, image, and annotations
export const useFetchImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: () => fetchImages(),
  });
};

// Custom hook to fetch a single image by ID
export const useFetchImage = (id: string) => {
  return useQuery({
    queryKey: ["image", id],
    queryFn: () => fetchImage(id),
  });
};

// Custom hook to fetch annotations
export const useFetchAnnotations = () => {
  return useQuery({
    queryKey: ["annotations"],
    queryFn: () => fetchAnnotations(),
  });
};
