"use client"; // This file is rendered on the client

import { useEffect } from "react";
import { useFetchImage, useFetchAnnotations } from "@/hooks";
import AnnotationList from "@/components/AnnotationList";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageViewer from "@/components/ImageViewer";
import ImageInfoBox from "@/components/ImageInfoBox";
import AnnotationToggle from "@/components/AnnotationToggle";
import { useStore } from "@/store";

export default function ImagePage({ params }: { params: { id: string } }) {
  // Get the image ID from the URL params
  const { id } = params;

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
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold mb-2">Annotated image</h1>

      <p className="mb-6">
        Please use the filters if needed to view the annotations.
      </p>

      {/* Breadcrumbs component to show the current page location */}
      <Breadcrumbs current={image.name} />

      <div className="relative grid grid-cols-3 gap-6 [&>*:first-child]:col-span-2">
        {/* ImageViewer component to display the image and annotations */}
        <ImageViewer image={image} annotations={annotations} />

        <div className="flex flex-col gap-6 sticky top-6 self-start">
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
