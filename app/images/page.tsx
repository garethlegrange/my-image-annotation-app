"use client";

import { useState } from "react";
import { useFetchImages } from "@/hooks";
import ImageGallery from "@/components/ImageGallery";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { Image } from "@/types";

export default function ImagesPage() {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { data: images, isError, isPending } = useFetchImages();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching images</p>;
  }

  const categories = Array.from(
    new Set(images.map((image: Image) => image.category))
  );

  const filteredImages = images.filter((image: Image) => {
    const nameMatch = image.name.toLowerCase().includes(query.toLowerCase());
    const categoryMatch =
      filter === "" || image.category.toLowerCase() === filter.toLowerCase();
    return nameMatch && categoryMatch;
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex gap-x-4 mb-4">
        <SearchBar value={query} onChange={setQuery} />
        <Filter value={filter} onChange={setFilter} categories={categories} />
      </div>

      <p className="flex">
        {query && (
          <>
            Searching for: <strong>{query}</strong>
          </>
        )}

        {filter && (
          <>
            Filtering by: <strong>{filter}</strong>
          </>
        )}
      </p>

      <ImageGallery images={filteredImages} />

      {/* add pagination here or infinite scroll */}
    </>
  );
}
