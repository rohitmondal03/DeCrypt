import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


export async function POST(request: NextRequest,) {
  const body = await request.json();

  const { id, userId } = body;

  const { count } = await prisma.password.deleteMany({
    where: {
      id: id,
      userId: userId,
    }
  })


  if (count === 0) {
    return new NextResponse("ERROR", { status: 500 })
  } else {
    return new NextResponse("DELETED", { status: 200 })
  }
}