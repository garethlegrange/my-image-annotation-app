import Picture from "next/image";
import type { Image, Annotation } from "@/types";
import { useStore } from "@/store";
import BoundingBox from "./BoundingBox";

export default function ImageViewer({
  image,
  annotations,
}: {
  image: Image;
  annotations: Annotation[];
}) {
  const { showAnnotations } = useStore();

  return (
    <div className="border p-4">
      <div className="relative">
        <Picture
          src={image.image_url}
          alt={image.alt}
          width={500}
          height={500}
          priority
        />
        {showAnnotations &&
          annotations.map((annotation) => (
            <BoundingBox
              key={annotation.class_uuid}
              style={{
                top: `${annotation.y * 100}%`,
                left: `${annotation.x * 100}%`,
                width: `${annotation.w * 100}%`,
                height: `${annotation.h * 100}%`,
                backgroundColor: annotation.color,
                borderColor: annotation.color,
                visibility: annotation.visible ? "visible" : "hidden",
              }}
            />
          ))}
      </div>
    </div>
  );
}
