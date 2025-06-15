import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { title, artist, price, imageUrl } = await req.json();

    if (!title || !artist || !price || !imageUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const sketch = await prisma.sketch.create({
      data: {
        title,
        artist,
        price: parseFloat(price),
        imageUrl,
      },
    });

    return NextResponse.json(sketch, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create sketch" }, { status: 500 });
  }
}
