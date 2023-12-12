"use client"

import dynamic from "next/dynamic";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog))
const DialogHeader = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogHeader))
const DialogContent = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogContent))
const DialogTrigger = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogTrigger))
const DialogFooter = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.DialogFooter))


export function SignOutButton() {
  const { userDetails } = useUser();

  // user's name
  const userName = userDetails?.name;


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="font-bold hover:scale-105 transition"
        >
          Sign Out
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black dark:bg-zinc-200 text-white dark:text-black">
        <DialogHeader className="text-xl font-bold">
          <p>Are you sure you want to sign Out <span className="text-amber-500">{userName}</span> ?</p>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Yes, Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}