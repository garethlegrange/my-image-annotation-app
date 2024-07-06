import type { Image } from "@/types";
import NextImage from "next/image";
import Link from "next/link";

export default function ImageGallery({ images }: { images: Image[] }) {
  if (!images || images.length === 0) {
    return <p>No images found</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image: Image) => (
        <Link
          key={image.id}
          href={`/images/${image.id}`}
          className="block bg-gray-200 hover:bg-gray-300 transition-colors p-2 shadow-md cursor-pointer"
        >
          <figure>
            <div className="relative aspect-square mb-2">
              <NextImage
                src={image.image_url}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <figcaption>
              <h5 className="text-sm font-bold mb-1">{image.name}</h5>
              <p className="text-xs mb-2">{image.description}</p>
              <ul className="text-xs flex justify-between">
                <li>
                  <strong>Created at:</strong> {image.created_at}
                </li>
                <li>
                  <strong>Category:</strong> {image.category}
                </li>
              </ul>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
