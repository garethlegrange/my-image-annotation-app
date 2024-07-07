import { useQuery } from "@tanstack/react-query";
import { fetchImages, fetchImage, fetchAnnotations } from "@/server/actions";

export const useFetchImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: () => fetchImages(),
  });
};

export const useFetchImage = (id: string) => {
  return useQuery({
    queryKey: ["image", id],
    queryFn: () => fetchImage(id),
  });
};

export const useFetchAnnotations = () => {
  return useQuery({
    queryKey: ["annotations"],
    queryFn: () => fetchAnnotations(),
  });
};
