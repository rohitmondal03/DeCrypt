"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@nextui-org/react"


export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="shadow"
      color={pending ? "danger" : "primary"}
    >
      {pending ? "Logging in..." : "Login"}
    </Button>
  )
}