"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import classNames from "classnames";

const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogDescription = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogDescription))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogClose= dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogClose))
const Input = dynamic(() => import("@/components/ui/input").then((mod) => mod.Input))
const Label = dynamic(() => import("@/components/ui/label").then((mod) => mod.Label))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))

import { TPasswordInputs } from "@/types";
import { addPassword } from "../actions/add-password";

const SubmitPasswordButton = dynamic(() => import("./submit-password-button"))


type TProps = {
  buttonText: string
}


export default function AddNewPasswordButton({ buttonText }: TProps) {
  const [inputValues, setInputValues] = useState<TPasswordInputs>({
    label: "",
    password: ""
  });


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button color="warning" className="font-bold">
            {buttonText}
          </Button>
        </DialogTrigger>

        <DialogContent className={classNames({
          "sm:max-w-[425px] outline outline-2": true,
          "bg-black dark:bg-zinc-200 text-white dark:text-black": true,
        })}>
          <DialogHeader>
            <DialogTitle>Add password</DialogTitle>
            <DialogDescription className="text-white dark:text-black">
              Add a new password to your safe...!!
            </DialogDescription>
          </DialogHeader>

          <form
            className="grid gap-4 py-4"
            action={() => addPassword(inputValues)}
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="label" className="text-right">
                Label
              </Label>
              <Input
                id="label"
                className="col-span-3"
                required
                autoComplete="off"
                value={inputValues.label}
                onChange={(e) => setInputValues((prev) => ({ ...prev, label: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                className="col-span-3"
                required
                autoComplete="off"
                value={inputValues.password}
                onChange={(e) => setInputValues((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>

            <DialogFooter>
              <DialogClose>
                <SubmitPasswordButton />
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}