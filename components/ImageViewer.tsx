import Picture from "next/image";
import type { Image, Annotation } from "@/types";

export default function ImageViewer({
  image,
  annotations,
}: {
  image: Image;
  annotations: Annotation[];
}) {
  return (
    <div className="relative">
      <Picture
        src={image.image_url}
        alt={image.alt}
        width={500}
        height={500}
        priority
      />
      {annotations.map((annotation) => (
        <div
          key={annotation.class_uuid}
          className="absolute border-2"
          style={{
            top: `${annotation.y * 100}%`,
            left: `${annotation.x * 100}%`,
            width: `${annotation.w * 100}%`,
            height: `${annotation.h * 100}%`,
            backgroundColor: annotation.color,
            borderColor: annotation.color,
          }}
        ></div>
      ))}
    </div>
  );
}
