"use client"

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react"
import classNames from "classnames";

const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const DialogTitle = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTitle))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogClose = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogClose))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button));



type TProps = {
  userId: string,
  id: string
}


export const revalidate = "true"


export default function DeletePasswordButton(props: TProps) {
  const { id, userId } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  // function for deleting password...
  async function deletePassword() {
    setLoading(true)

    await fetch("/api/deletePassword", {
      method: 'POST',
      cache: "force-cache",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        { id: id, userId: userId }
      )
    })

    setLoading(false);

    router.refresh();
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          Delete Password
        </Button>
      </DialogTrigger>

      <DialogContent className={classNames({
        "border-2 border-black dark:border-white": true
      })}>
        <DialogHeader>
          <DialogTitle className={classNames({
            "leading-relaxed": true,
          })}>
            Are you sure you want to delete this password from your safe ?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className={classNames({
          "flex flex-row justify-around": true,
        })}>
          <DialogClose>
            <Button variant={"default"}>
              No
            </Button>
          </DialogClose>

          <Button
            variant={"destructive"}
            onClick={deletePassword}
          >
            {loading ? "Deleting..." : "Yes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}