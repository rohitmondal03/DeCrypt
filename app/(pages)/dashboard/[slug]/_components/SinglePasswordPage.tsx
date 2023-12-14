"use client"

import dynamic from "next/dynamic"
import { Password } from "@prisma/client"
import classNames from "classnames"

import { monsterrat } from "@/lib/fonts"

const ShowPasswordButton = dynamic(() => import("./show-password-button"));
const DeletePasswordButton = dynamic(() => import("./delete-password-button"));
const Card = dynamic(() => import("@/components/ui/card").then((mod) => mod.Card))
const CardContent = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardContent))
const CardHeader = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardHeader))
const CardFooter = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardFooter))



type TProps = {
  passwordDetails: Password
}


export default function SinglePage(props: TProps) {
  const { label, encryptedPassword, id, userId } = props.passwordDetails;


  return (
    <Card className={classNames({
      "max-w-[40vw] mx-auto": true,
      "border-2 border-zinc-700 dark:border-zinc-400": true,
    })}>
      <CardHeader className={classNames(`${monsterrat.className}`, {
        "text-3xl fon-bold": true,
      })}>
        {label}
      </CardHeader>

      <CardContent className={classNames({
        "space-y-4": true,
      })}>
        <p className="text-lg text-blue-500 dark:text-sky-400 font-bold">
          Encrypted Password:
        </p>

        <p>
          {encryptedPassword.slice(0, 40) + "..."}
        </p>
      </CardContent>

      <CardFooter className={classNames({
        "flex flex-row items-center justify-between": true,
      })}>
        <ShowPasswordButton encryptedPassword={encryptedPassword} />
        <DeletePasswordButton userId={userId} id={id} />
      </CardFooter>
    </Card>
  )
}