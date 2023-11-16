"use client"

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

export default function SubmitPasswordButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="solid"
      color={pending ? "danger" : "warning"}
      className="font-bold"
    >
      {pending ? (
        <>Adding...</>
      ) : (
        <>Add password</>
      )}
    </Button>
  )
}