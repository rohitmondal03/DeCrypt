"use server"

import { revalidatePath } from "next/cache"

import { prisma } from "@/utils/prisma"
import { encryptText } from "@/utils/encrypt"
import { getServerSideUserDetails } from "@/hooks/getServerSideUserDetails"


type TProps = {
  label: string
  password: string
}

export async function addPassword(data: TProps) {
  const userDetails = await getServerSideUserDetails();
  const { label, password } = data;

  const encryptedPassword = encryptText(password);

  await prisma.password.create({
    data: {
      label: label,
      encryptedPassword: encryptedPassword,
      userId: userDetails?.id as string
    },
  })

  revalidatePath("/dashboard")
  console.log("added...")
}