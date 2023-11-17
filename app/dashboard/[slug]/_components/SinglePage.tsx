"use client"

import {
  Button,
  Divider,
  Card, CardBody, CardFooter, CardHeader,
} from "@nextui-org/react"
import { Password } from "@prisma/client"
import classNames from "classnames"

import { monsterrat } from "@/components/font/fonts"
import { decryptText } from "@/utils/decrypt"


type TProps = {
  passwordDetails: Password
}

export default function SinglePage(props: TProps) {
  const { passwordDetails } = props;

  return (
    <Card className={classNames({
      "w-[40vw] mx-auto": true,
      "border-2 border-zinc-700 dark:border-zinc-400": true,
    })}>
      <CardHeader className={classNames(`${monsterrat.className}`, {
        "text-3xl fon-bold": true,
      })}>
        {passwordDetails.label}
      </CardHeader>

      <Divider orientation="horizontal" />

      <CardBody className={classNames({
        "space-y-4": true,
      })}>
        <p className="text-lg text-blue-500 dark:text-sky-400 font-bold">
          Encrypted Password:
        </p>

        <p>
          {passwordDetails.encryptedPassword.slice(0, 100) + "..."}
        </p>
      </CardBody>

      <Divider orientation="horizontal" />

      <CardFooter>
        <Button variant="solid" color="primary">
          Show Original Password
        </Button>
      </CardFooter>
    </Card>
  )
}