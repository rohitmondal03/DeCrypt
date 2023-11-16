"use server"

import { getAuthSession } from "@/utils/getServerAuthSession"

import { prisma } from "@/utils/prisma"
import { encryptText } from "@/utils/encrypt"
import { revalidatePath } from "next/cache"

type TProps= {
  label: string
  password: string
}

export async function addPassword(data: TProps) {
  const session= await getAuthSession(); 
  const {label, password}= data;

  const encryptedPassword= encryptText(password);

  await prisma.password.create({
    data: {
      label: label,
      encryptedPassword: encryptedPassword,
      userId: session?.user.id as string
    },
  })

  revalidatePath("/dashboard")
  console.log("added...")
}