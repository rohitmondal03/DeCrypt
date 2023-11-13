import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { id } = body;

  const getPassword = await prisma.password.findFirst({
    where: {
      id: id,
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