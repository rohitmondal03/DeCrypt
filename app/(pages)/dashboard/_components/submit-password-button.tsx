"use client"

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";


export default function SubmitPasswordButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="secondary"
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