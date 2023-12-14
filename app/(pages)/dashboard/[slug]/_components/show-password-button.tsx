"use client"

import dynamic from "next/dynamic";
import classNames from "classnames";

import { monsterrat } from "@/lib/fonts";
import { decryptText } from "@/lib/decrypt";

const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button));



type TProps = {
  encryptedPassword: string
}


export default function ShowPasswordButton(
  { encryptedPassword }: TProps
) {
  const originalPassword = decryptText(encryptedPassword) as string;


  // function to copy original password.
  const copyPassword = () => {
    navigator.clipboard.writeText(originalPassword);
  }


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            Show Password
          </Button>
        </DialogTrigger>

        <DialogContent className={classNames({
          "border-2 border-black dark:border-white": true
        })}>
          <div>
            <h1 className={classNames(`${monsterrat.className}`, {
              "text-3xl font-bold text-blue-400": true,
            })}>
              Original Password
            </h1>

            <div>
              <h2>{originalPassword}</h2>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-fit"
              variant={"default"}
              onClick={copyPassword}
            >
              Copy Original Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}