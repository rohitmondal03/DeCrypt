import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      color="warning"
      className="font-bold dark:font-normal hover:scale-105 transition"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </Button>
  )
}