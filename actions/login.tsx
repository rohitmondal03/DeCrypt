"use server"

import { revalidatePath } from "next/cache";

import { prisma } from "@/utils/prismaDB";


export async function submitNewProject(enteredData: any) {
  await prisma.user.findFirstOrThrow({
    where: {}
  });

  // revalidatePath("/");
}