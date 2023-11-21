"use client"

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { Button, useDisclosure } from "@nextui-org/react";
import classNames from "classnames";

const Modal = dynamic(() => import("@nextui-org/react").then((mod) => mod.Modal))
const ModalContent = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalContent))
const ModalFooter = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalFooter))
const ModalHeader = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalHeader))


import { monsterrat } from "@/components/font/fonts";


type TProps = {
  userId: string,
  id: string
}


export const revalidate = "true"


export default function DeletePasswordButton(props: TProps) {
  const { id, userId } = props;
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  // function for deleting password...
  async function deletePassword() {
    setLoading(true)

    const data = await fetch("/api/deletePassword", {
      method: 'POST',
      cache: "force-cache",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ id: id, userId: userId })
    })

    setLoading(false);

    onClose();
    router.refresh();
  }


  return (
    <>
      <Button
        variant="ghost"
        color="danger"
        onClick={onOpen}
      >
        Delete Password
      </Button>

      <Modal
        placement="bottom-center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={classNames(`${monsterrat.className}`, {
          "py-5 border-2 dark:border-zinc-800 bg-black dark:bg-white": true,
          "text-white dark:text-black": true,
        })}
      >
        <ModalContent>
          <ModalHeader>
            Are you sure you want to delete password?
          </ModalHeader>

          <ModalFooter className={classNames({
            "flex flex-row items-center justify-between": true,
          })}>
            <Button
              color="danger"
              onClick={deletePassword}
            >
              {loading ? "Deleting..." : "Yes"}
            </Button>

            <Button
              variant="bordered"
              color="primary"
              onClick={onClose}
            >
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}