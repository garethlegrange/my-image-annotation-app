import { NextResponse } from "next/server";
import images from "@/data/images.json";

export async function GET() {
  return NextResponse.json(images, { status: 200 });

  // Error response with status code 500
  //   return NextResponse.json(
  //     { error: "Failed to fetch images" },
  //     { status: 500 }
  //   );
}
