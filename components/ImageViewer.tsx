import Picture from "next/image";
import type { Image, Annotation } from "@/types";
import { useStore } from "@/store";
import BoundingBox from "./BoundingBox";
import Card from "./Card";

export default function ImageViewer({
  image,
  annotations,
}: {
  image: Image;
  annotations: Annotation[];
}) {
  const { showAnnotations } = useStore();

  return (
    <Card>
      <div className="relative">
        <Picture
          src={image.image_url}
          alt={image.alt}
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto" }}
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
    </Card>
  );
}
