"use client"; // This file is rendered on the client

import { useEffect, useState } from "react";
import { useFetchImage, useFetchAnnotations } from "@/hooks";
import AnnotationList from "@/components/AnnotationList";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageViewer from "@/components/ImageViewer";
import ImageInfoBox from "@/components/ImageInfoBox";
import AnnotationToggle from "@/components/AnnotationToggle";
import { useStore } from "@/store";
import Spinner from "@/components/Spinner";
import clsx from "clsx";

export default function ImagePage({ params }: { params: { id: string } }) {
  // Get the image ID from the URL params
  const { id } = params;

  const [openFilter, setOpenFilter] = useState(false);

  // Fetch the image
  // This could be a high resolution image, so we fetch it separately
  const {
    data: image,
    isError: imageError,
    isPending: imagePending,
  } = useFetchImage(id);

  // Fetch the annotations
  const {
    data,
    isError: annotationsError,
    isPending: annotationsPending,
  } = useFetchAnnotations();

  // Get actions from the store
  const { annotations, setAnnotations } = useStore();

  // Set the annotations in the store when the data is available
  useEffect(() => {
    if (data) {
      setAnnotations(data);
    }
  }, [data, setAnnotations]);

  // Handle error states
  if (imageError || annotationsError) {
    return <div>Error fetching image</div>;
  }

  // Handle loading state
  if (imagePending || annotationsPending) {
    return <Spinner />;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold mb-2">Annotated image</h1>

      <p className="mb-6">
        Please use the filters if needed to view the annotations.
      </p>

      {/* Breadcrumbs component to show the current page location */}
      <div className="flex items-center mb-6">
        <Breadcrumbs current={image.name} />
        <button
          type="button"
          className="ml-auto py-2.5 px-5 me-2 mb-2 text-sm font-medium text-slate-900 focus:outline-none bg-white rounded-lg border border-slate-300 hover:bg-transparent hover:text-indigo-600 focus:z-10 focus:ring-4 focus:ring-slate-100 lg:hidden"
          onClick={() => setOpenFilter(!openFilter)}
        >
          {openFilter ? "Hide" : "Show"} Filter
        </button>
      </div>

      <div className="relative lg:grid grid-cols-3 gap-6 [&>*:first-child]:col-span-2">
        {/* ImageViewer component to display the image and annotations */}
        <ImageViewer image={image} annotations={annotations} />

        <div
          // className="hidden lg:flex flex-col gap-6 sticky top-6 self-start"
          className={clsx(
            "lg:flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start !lg:flex",
            openFilter
              ? "flex absolute top-0 left-0 w-full bg-white lg:bg-transparent border lg:border-0 border-gray-200 rounded-lg p-6 lg:p-0"
              : "hidden"
          )}
        >
          {/* ImageInfoBox component to display image details */}
          <ImageInfoBox image={image} />

          {/* AnnotationToggle component to toggle ALL annotations on/off */}
          <AnnotationToggle />

          {/* 
            AnnotationList component to display all annotations
            Toggling the AnnotationToggle will show/hide the annotations
          */}
          <AnnotationList />
        </div>
      </div>
    </main>
  );
}
