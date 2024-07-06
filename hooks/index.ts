import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "@/server/actions";

export const useFetchImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: () => fetchImages(),
  });
};
