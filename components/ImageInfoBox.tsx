import type { Image } from "@/types";
import Card from "./Card";

export default function ImageInfoBox({ image }: { image: Image }) {
  return (
    <Card>
      <h2 className="font-bold mb-2">Image information</h2>
      <ul className="text-sm space-y-2">
        <li>
          <strong>Name</strong>: {image.name}
        </li>
        <li>
          <strong>Description</strong>: <p>{image.description}</p>
        </li>
      </ul>
    </Card>
  );
}
