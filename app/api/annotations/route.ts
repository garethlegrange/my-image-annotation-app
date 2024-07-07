import { NextResponse } from "next/server";
import { regions } from "@/data/robot_regions.json";

export async function GET() {
  return NextResponse.json(regions, { status: 200 });
}
