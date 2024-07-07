import Picture from "next/image";
import type { Image, Annotation } from "@/types";
import { useStore } from "@/store";
import BoundingBox from "./BoundingBox";
import Card from "./Card";

// Image viewer component
// image: Image object
// annotations: Array of Annotation objects
export default function ImageViewer({
  image,
  annotations,
}: {
  image: Image;
  annotations: Annotation[];
}) {
  const { showAnnotations } = useStore();

  return (
    <div className="self-start">
      <Card>
        <div className="relative">
          {/* Image component from Next.js to display the image */}
          <Picture
            src={image.image_url}
            alt={image.alt}
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{ width: "100%", height: "auto" }}
          />

          {/* Bounding boxes for annotations */}
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
      </Card>
    </div>
  );
}
