import dynamic from "next/dynamic";
import { Button, useDisclosure } from "@nextui-org/react";
import classNames from "classnames";

const Modal = dynamic(() => import("@nextui-org/react").then((mod) => mod.Modal))
const ModalContent = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalContent))
const ModalFooter = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalFooter))
const ModalHeader = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalHeader))
const ModalBody = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalBody))

import { monsterrat } from "@/components/font/fonts";
import { decryptText } from "@/lib/decrypt";


type TProps = {
  encryptedPassword: string
}


export default function ShowOriginalPasswordButton({ encryptedPassword }: TProps) {
  const { onClose, onOpen, isOpen, onOpenChange } = useDisclosure();

  const originalPassword = decryptText(encryptedPassword) as string

  // function to copy original password.
  const copyPassword = () => {
    navigator.clipboard.writeText(originalPassword);
  }


  return (
    <>
      <Button
        variant="solid"
        color="primary"
        onClick={onOpen}
      >
        Original Password
      </Button>

      <Modal
        placement="bottom-center"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        className={classNames({
          "py-10": true,
        })}
      >
        <ModalContent className={classNames({
          "border-2 bg-black border-zinc-300 dark:bg-white dark:border-zinc-800": true,
        })}>
          <ModalHeader className={classNames(`${monsterrat.className}`, {
            "text-3xl font-bold text-blue-500": true,
          })}>
            Original Password
          </ModalHeader>

          <ModalBody>
            <p className="text-white dark:text-black">
              {originalPassword}
            </p>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="flat"
              color="warning"
              onClick={copyPassword}
            >
              Copy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}