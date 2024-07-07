"use client";

import { useState, useEffect } from "react";
import { useFetchImages } from "@/hooks";
import ImageGallery from "@/components/ImageGallery";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import { Image } from "@/types";
import { useGalleryStore } from "@/store/gallery";

export default function ImagesPage() {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { data, isError, isPending } = useFetchImages();

  const { images, setImages, searchImages, filterImages } = useGalleryStore();

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data, setImages]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching images</p>;
  }

  // const categories = Array.from(
  //   new Set(images.map((image: Image) => image.category))
  // );

  // const filteredImages = images.filter((image: Image) => {
  //   const nameMatch = image.name.toLowerCase().includes(query.toLowerCase());
  //   const categoryMatch =
  //     filter === "" || image.category.toLowerCase() === filter.toLowerCase();
  //   return nameMatch && categoryMatch;
  // });

  // searchImages(query);

  const handleSearch = (search: string) => {
    setQuery(search);
    searchImages(search);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Image gallery</h1>

      <p className="mb-6">
        Please select an image to view more details or search or filter to
        refine your results.
      </p>

      <section className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search images..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
          >
            <option>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </section>

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

      <ImageGallery images={images} />
    </>
  );
}
