"use client";

import { useState, useEffect } from "react";
import { useFetchImages } from "@/hooks";
import ImageGallery from "@/components/ImageGallery";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { Image } from "@/types";
import Card from "@/components/Card";

export default function ImagesPage() {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { data, isError, isPending } = useFetchImages();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching images</p>;
  }

  let images = data as Image[];

  let categories = Array.from(
    new Set(images.map((image: Image) => image.category))
  );

  images = images.filter((image) => {
    const searchMatch =
      image.name.toLowerCase().includes(query.toLowerCase()) ||
      image.description.toLowerCase().includes(query.toLowerCase());

    const filterMatch =
      filter === "" || image.category.toLowerCase() === filter.toLowerCase();

    return searchMatch && filterMatch;
  });

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold mb-2">Image gallery</h1>

      <p className="mb-6">
        Please select an image to view more details or search or filter to
        refine your results.
      </p>

      <div className="sticky top-6 self-start z-10 mb-6">
        <Card>
          <div className="grid grid-cols-3 gap-6 [&>*:first-child]:col-span-2">
            <SearchBar query={query} setQuery={setQuery} />
            <Filter
              categories={categories}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </Card>
      </div>

      {query && (
        <p className="mb-6">
          Searching for: <strong>{query}</strong>
        </p>
      )}

      <div className="mt-6">
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
