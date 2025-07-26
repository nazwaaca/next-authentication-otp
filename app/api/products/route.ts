import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: 'asc', // atau 'asc' kalau mau yang lama di atas
    },
  }
  );

  return NextResponse.json(products);
}


export async function POST(req: NextRequest) {
  const { name, price } = await req.json();
  const product = await prisma.product.create({ data: { name, price } });
  return NextResponse.json(product, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const { id, name, price } = await req.json();
  const product = await prisma.product.update({
    where: { id },
    data: { name, price },
  });
  return NextResponse.json(product);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await prisma.product.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Product deleted" });
}
