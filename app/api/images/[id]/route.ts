import { NextResponse, NextRequest } from "next/server";
import images from "@/data/images.json";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  const image = images.find((image) => image.id === Number(id));

  return NextResponse.json(image, { status: 200 });
}
