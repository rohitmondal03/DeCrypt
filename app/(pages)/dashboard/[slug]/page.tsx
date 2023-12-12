import { redirect } from "next/navigation";
import classNames from "classnames";
import { Password } from "@prisma/client";

import { prisma } from "@/lib/prisma"
import { getServerSideUserDetails } from "@/lib/getServerSideUserDetails";
import SinglePage from "./_components/SinglePage";


type TProps = {
  params: {
    slug: string
  }
}

export default async function SinglePasswordPage(
  { params }: TProps
) {
  const { slug } = params;  // id of single password.
  const userDetails = await getServerSideUserDetails();

  const getPasswordDetails = await prisma.password.findFirst({
    where: {
      id: slug
    },
  })

  // user's id !== the password detail's userID ==> redirect to "/dashboard"
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