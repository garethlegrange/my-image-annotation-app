"use client";

import { useState, useEffect } from "react";
import { useFetchImage, useFetchAnnotations } from "@/hooks";
import AnnotationList from "@/components/AnnotationList";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageViewer from "@/components/ImageViewer";
import ImageInfoBox from "@/components/ImageInfoBox";
import AnnotationToggle from "@/components/AnnotationToggle";
import { useStore } from "@/store";

export default function ImagePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const {
    data: image,
    isError: imageError,
    isPending: imagePending,
  } = useFetchImage(id);

  const {
    data,
    isError: annotationsError,
    isPending: annotationsPending,
  } = useFetchAnnotations();

  const { annotations, setAnnotations } = useStore();

  useEffect(() => {
    if (data) {
      setAnnotations(data);
    }
  }, [data, setAnnotations]);

  if (imageError || annotationsError) {
    return <div>Error fetching image</div>;
  }

  if (imagePending || annotationsPending) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold mb-2">Annotated image</h1>

      <p className="mb-6">
        Please use the filters if needed to view the annotations.
      </p>

      <Breadcrumbs current={image.name} />

      <div className="relative grid grid-cols-3 gap-6 [&>*:first-child]:col-span-2">
        <ImageViewer image={image} annotations={annotations} />

        <div className="flex flex-col gap-6 sticky top-6 self-start">
          <ImageInfoBox image={image} />
          <AnnotationToggle />
          <AnnotationList />
        </div>
      </div>
    </main>
  );
}
