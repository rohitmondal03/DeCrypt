"use server"

import { revalidatePath } from "next/cache"

import { prisma } from "@/utils/prisma"
import { encryptText } from "@/utils/encrypt"
import { getServerSideUserDetails } from "@/hooks/getServerSideUserDetails"


type TArgs = {
  label: string
  password: string
}


export async function addPassword(data: TArgs) {
  const userDetails = await getServerSideUserDetails();
  const { label, password } = data;

  const encryptedPassword = encryptText(password);

  await prisma.password.create({
    data: {
      label: label.trim(),
      encryptedPassword: encryptedPassword.trim(),
      userId: userDetails?.id as string
    },
  })

  revalidatePath("/dashboard")
  console.log("added...")
}