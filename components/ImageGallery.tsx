import type { Image } from "@/types";
import NextImage from "next/image";
import Link from "next/link";

export default function ImageGallery({ images }: { images: Image[] }) {
  if (!images || images.length === 0) {
    return <p>No images found</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {images.map((image: Image) => (
        <Link
          key={image.id}
          href={`/images/${image.id}`}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <figure className="flex flex-col h-full">
            <div className="relative aspect-square mb-2">
              <NextImage
                src={image.image_url}
                alt={image.alt}
                sizes="100%"
                fill 
                priority 
                className="object-cover"
              />
            </div>
            <figcaption className="grow flex flex-col">
              <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-gray-900">{image.name}</h5>
              <p className="font-normal text-gray-700 mb-2">{image.description}</p>
              <ul className="text-xs text-gray-700 mt-auto">
                <li>
                  <strong>Category:</strong> {image.category}
                </li>
                <li>
                  <strong>Created at:</strong> {image.created_at}
                </li>
              </ul>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
