import type { Image } from "@/types";

export default function ImageInfoBox({ image }: { image: Image }) {
  return (
    <div className="border p-4">
      <h2>Image Info</h2>
      <dl>
        <div>
          <dt>Image Name</dt>
          <dd>{image.name}</dd>
        </div>
        <div>
          <dt>Image Description</dt>
          <dd>{image.description}</dd>
        </div>
      </dl>
    </div>
  );
}
