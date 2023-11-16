import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      color="danger"
      className="font-bold hover:scale-105 transition"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </Button>
  )
}