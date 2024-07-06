"use client";

import { useState } from "react";
import { useFetchImages } from "@/hooks";
import ImageGallery from "@/components/ImageGallery";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { Image } from "@/types";

export default function ImagesPage() {
  const [query, setQuery] = useState<string>("");

  const { data: images, isError, isPending } = useFetchImages();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching images</p>;
  }

  const filteredImages = images.filter(
    (image: Image) =>
      image.name.toLowerCase().includes(query.toLowerCase()) ||
      image.description.toLowerCase().includes(query.toLowerCase()) ||
      image.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1>Images Page</h1>

      <div className="flex gap-x-4 mb-4">
        <SearchBar value={query} onChange={setQuery} />
        <Filter />
      </div>

      {query && (
        <p className="transition-all duration-300 ease-in-out text-lg text-gray-600">
          Searching for: <strong>{query}</strong>
        </p>
      )}

      <ImageGallery images={filteredImages} />

      {/* add pagination here or infinite scroll */}
    </>
  );
}
