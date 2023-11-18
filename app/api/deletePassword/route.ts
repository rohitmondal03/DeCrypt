import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest,) {
  // const body = await request.json();

  // await prisma.password.delete({
  //   where: {
  //     id: body.id,
  //     user: {}
  //   }
  // })

  return NextResponse.json({ id: "hello" })
}