"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import { Password } from "@prisma/client"
import classNames from "classnames"

import { monsterrat } from "@/lib/fonts"

const Card = dynamic(() => import("@/components/ui/card").then((mod) => mod.Card))
const CardContent = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardContent))
const CardHeader = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardHeader))
const CardFooter = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardFooter))
const Tooltip = dynamic(() => import("@/components/ui/tooltip").then((mod) => mod.Tooltip))
const TooltipContent = dynamic(() => import("@/components/ui/tooltip").then((mod) => mod.TooltipContent))
const TooltipTrigger = dynamic(() => import("@/components/ui/tooltip").then((mod) => mod.TooltipTrigger))
const TooltipProvider = dynamic(() => import("@/components/ui/tooltip").then((mod) => mod.TooltipProvider))
const ShowOriginalPasswordButton = dynamic(() => import("./show-original-password-button"));
const DeletePasswordButton = dynamic(() => import("./delete-password-button"));



type TProps = {
  passwordDetails: Password
}


export default function SinglePage(props: TProps) {
  const { label, encryptedPassword, id, userId } = props.passwordDetails;

  // for toggling b/w showing full or short encryted password
  const [isFullEncryptedPassword, setIsFullEncryptedPassword] = useState<boolean>(false);


  // showing full password or not...
  const showFullEncryptedPassword = () => {
    setIsFullEncryptedPassword((prev) => !prev)
  }


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

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p
                onClick={showFullEncryptedPassword}
                className={classNames({
                  "cursor-pointer transition ease-out hover:scale-[101%]": true,
                  "w-fit": true,
                })}
              >
                {isFullEncryptedPassword
                  ? encryptedPassword
                  : encryptedPassword.slice(0, 40) + "..."
                }
              </p>
            </TooltipTrigger>

            <TooltipContent>
              <p>Show Full Encrypted Password</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>

      <CardFooter className={classNames({
        "flex flex-row items-center justify-between": true,
      })}>
        <ShowOriginalPasswordButton encryptedPassword={encryptedPassword} />
        <DeletePasswordButton userId={userId} id={id} />
      </CardFooter>
    </Card>
  )
}