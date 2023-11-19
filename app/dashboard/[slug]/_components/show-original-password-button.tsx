import { useMemo } from "react";
import {
  Button,
  Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import classNames from "classnames";

import { monsterrat } from "@/components/font/fonts";
import { decryptText } from "@/utils/decrypt";


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