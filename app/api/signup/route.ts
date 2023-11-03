import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// create user
export const POST = async (request: Request) => {
  try {
    const { data } = await request.json();
    const newUser = await prisma.user.create({ data: data });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  return new NextResponse(JSON.stringify({ data: "yes" }));
};
