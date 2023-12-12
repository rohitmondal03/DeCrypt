"use client"

import dynamic from "next/dynamic"
import { useState } from "react"
import {
  Divider,
  Card, CardBody, CardFooter, CardHeader,
} from "@nextui-org/react"
import { Password } from "@prisma/client"
import classNames from "classnames"

const Tooltip= dynamic(() => import("@nextui-org/react").then((mod) => mod.Tooltip))

import { monsterrat } from "@/lib/fonts"
import ShowOriginalPasswordButton from "./show-original-password-button"
import DeletePasswordButton from "./delete-password-button"


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
      "w-[40vw] mx-auto": true,
      "border-2 border-zinc-700 dark:border-zinc-400": true,
    })}>
      <CardHeader className={classNames(`${monsterrat.className}`, {
        "text-3xl fon-bold": true,
      })}>
        {label}
      </CardHeader>

      <Divider orientation="horizontal" />

      <CardBody className={classNames({
        "space-y-4": true,
      })}>
        <p className="text-lg text-blue-500 dark:text-sky-400 font-bold">
          Encrypted Password:
        </p>

        <Tooltip
          content={`Click to show ${isFullEncryptedPassword ? "short" : "full"} password`}
          color="warning"
          placement="top-end"
        >
          <p
            onClick={showFullEncryptedPassword}
            className={classNames({
              "cursor-pointer transition ease-out hover:scale-[101%]": true,
            })}
          >
            {isFullEncryptedPassword
              ? encryptedPassword
              : encryptedPassword.slice(0, 100) + "..."
            }
          </p>
        </Tooltip>
      </CardBody>

      <Divider orientation="horizontal" />

      <CardFooter className={classNames({
        "flex flex-row items-center justify-between": true,
      })}>
        <ShowOriginalPasswordButton encryptedPassword={encryptedPassword} />
        <DeletePasswordButton userId={userId} id={id} />
      </CardFooter>
    </Card>
  )
}