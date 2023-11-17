import { prisma } from "@/utils/prisma"
import { Password } from "@prisma/client";
import classNames from "classnames";

import { getAuthSession } from "@/utils/getServerAuthSession";
import SinglePage from "./_components/SinglePage";
import { redirect } from "next/navigation";


type TProps = {
  params: {
    slug: string
  }
}

export default async function SinglePasswordPage({ params }: TProps) {
  const { slug } = params;  // id of single password.
  const session= await getAuthSession();

  const userDetails= session?.user;

  const getPasswordDetails = await prisma.password.findFirst({
    where: {
      id: slug
    },
  })

  getPasswordDetails?.userId !== userDetails?.id && redirect("/dashboard")

  return (
    <section className={classNames({
      "h-[80vh] flex items-center justify-center": true,
    })}>
      <SinglePage passwordDetails={getPasswordDetails as Password} />
    </section>
  )
}


export async function generateStaticParams() {
  const data = await prisma.password.findMany();

  return data.map((item) => ({
    slug: item.id
  }))
}