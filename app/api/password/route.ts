import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { slug } = body;

  const getPassword = await prisma.password.findFirst({
    where: {
      id: slug,
    },
    select: {
      label: true,
      encryptedPassword: true,
    }
  })

  return getPassword
    ? NextResponse.json(getPassword, { status: 200 })
    : new NextResponse("Error !!", { status: 500 })
}