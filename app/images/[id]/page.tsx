"use client";

import { useState } from "react";
import { useFetchImage, useFetchAnnotations } from "@/hooks";
import AnnotationList from "@/components/AnnotationList";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageViewer from "@/components/ImageViewer";
import ImageInfoBox from "@/components/ImageInfoBox";
import AnnotationToggle from "@/components/AnnotationToggle";

export default function ImagePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const {
    data: image,
    isError: imageError,
    isPending: imagePending,
  } = useFetchImage(id);

  const {
    data: annotations,
    isError: annotationsError,
    isPending: annotationsPending,
  } = useFetchAnnotations();

  const [showAnnotations, setShowAnnotations] = useState(true);

  const handleToggleAnnotations = () => {
    setShowAnnotations((prev) => !prev);
  };

  if (imageError || annotationsError) {
    return <div>Error fetching image</div>;
  }

  if (imagePending || annotationsPending) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="text-3xl font-bold">Image Page width {params.id}</h1>

      <div>Back button</div>

      <Breadcrumbs />

      <div className="flex">
        <ImageViewer image={image} annotations={showAnnotations ? annotations : []} />
        <div>
          <ImageInfoBox image={image} />
          <AnnotationToggle value={showAnnotations} handler={handleToggleAnnotations} />
          <AnnotationList annotations={annotations} />
        </div>
      </div>
    </main>
  );
}
