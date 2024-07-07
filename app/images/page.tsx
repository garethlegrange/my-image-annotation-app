"use client"; // This file is rendered on the client

import { useState } from "react";
import { useFetchImages } from "@/hooks";
import ImageGallery from "@/components/ImageGallery";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { Image } from "@/types";
import Card from "@/components/Card";

export default function ImagesPage() {
  // Local state for search and filter
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  // Fetch images from the API
  const { data, isError, isPending } = useFetchImages();

  // Handle loading state
  if (isPending) {
    return <p>Loading...</p>;
  }

  // Handle error state if images fetch fails
  if (isError) {
    return <p>Error fetching images</p>;
  }

  // Variable to store images
  let images = data as Image[];

  // Get unique categories from images
  let categories = Array.from(
    new Set(images.map((image: Image) => image.category))
  );

  // Filter images based on search and filter
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

      {/* Search bar and filter component */} 
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

      {/* Display search query "term" if present */}
      {query && (
        <p className="mb-6">
          Searching for: <strong>{query}</strong>
        </p>
      )}

      {/* Image gallery component */}
      <div className="mt-6">
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
