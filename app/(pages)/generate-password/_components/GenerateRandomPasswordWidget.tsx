"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import randomstring from "randomstring"

import { monsterrat } from "@/lib/fonts";

const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button));
const Card = dynamic(() => import("@/components/ui/card").then((mod) => mod.Card))
const CardContent = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardContent))
const CardDescription = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardDescription))
const CardHeader = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardHeader))
const CardTitle = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardTitle))
const CardFooter = dynamic(() => import("@/components/ui/card").then((mod) => mod.CardFooter))
const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const Checkbox = dynamic(() => import("@/components/ui/checkbox").then((mod) => mod.Checkbox))
const Label = dynamic(() => import("@/components/ui/label").then((mod) => mod.Label))



export default function GenerateRandomPasswordWidget() {
  const [randomText, setRandomText] = useState<string>("");
  const [chk, setChk] = useState({
    splCharsChecked: true,
    numCharsChecked: true,
  })

  useEffect(() => {
    console.log(chk)
  }, [chk])


  // generating random string
  function generateRandomString() {
    const randomString = randomstring.generate();
    setRandomText(randomString);
  }


  return (
    <div className={classNames({
      "mx-auto space-y-10": true,
    })}>
      <h1 className={classNames(`${monsterrat.className}`, {
        "text-5xl text-blue-500 font-bold text-center": true,
      })}>
        Random password generator...
      </h1>


      <Card className={classNames({
        "w-[50%] mx-auto": true,
        "border-2 border-zinc-500": true,
      })}>
        <CardHeader>
          <CardTitle className={classNames({
            "text-2xl": true,
            "space-y-5": true,
          })}>
            Generate a new random password
          </CardTitle>

          <CardDescription>
            This will generate with a randomly generated password that is unique to this device. If you have previously requested a password for this
          </CardDescription>
        </CardHeader>

        <CardContent className={classNames({
          "space-y-5": true,
        })}>
          <div className={classNames({
            "flex items-center gap-x-3": true,
          })}>
            <Label htmlFor="add-special-chars">
              Add special characters
            </Label>

            <Checkbox
              defaultChecked
              id="add-special-chars"
              onCheckedChange={() =>
                setChk((prev) => ({ ...prev, splCharsChecked: !prev.splCharsChecked }))                
              }
            />
          </div>

          <div className={classNames({
            "flex items-center gap-x-3": true,
          })}>
            <Label htmlFor="add-nums">
              Add Numbers
            </Label>

            <Checkbox
              defaultChecked
              id="add-nums"
              onCheckedChange={() =>
                setChk((prev) => ({ ...prev, numCharsChecked: !prev.numCharsChecked }))
              }
            />
          </div>
        </CardContent>

        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={"default"}
                onClick={generateRandomString}
              >
                Generate password
              </Button>
            </DialogTrigger>

            <RandomPasswordWidget randomText={randomText} />
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}



function RandomPasswordWidget(
  { randomText }: { randomText: string }
) {
  return (
    <DialogContent className={classNames({
      "border-2 border-black dark:border-white": true,
    })}>
      <DialogHeader className={classNames({
        "text-2xl text-zinc-600 dark:text-zinc-300 font-bold": true,
      })}>
        Your random password
      </DialogHeader>

      <div>
        <h1>
          Random password:
          <br />
          <span className={classNames({
            "font-bold text-lg text-amber-500": true,
          })}>
            {randomText}
          </span>
        </h1>
      </div>

      <DialogFooter>
        <Button onClick={
          () => navigator.clipboard.writeText(randomText)
        }>
          Copy
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}