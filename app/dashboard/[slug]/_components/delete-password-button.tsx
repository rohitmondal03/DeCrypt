import {
  Button,
  Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import classNames from "classnames";
import { DeleteIcon } from "lucide-react";

import { monsterrat } from "@/components/font/fonts";


type TProps = {
  userId: string,
  id: string
}

export default function DeletePasswordButton(props: TProps) {
  const { id, userId } = props
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();

  async function deletePassword() {
    await fetch("/api/deletePassword", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ ...props })
    })
  }


  return (
    <>
      <Button
        variant="ghost"
        color="danger"
        onClick={onOpen}
        isIconOnly
      >
        <DeleteIcon />
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
          <ModalHeader>Are you sure you want to delete password</ModalHeader>

          <ModalFooter className={classNames({
            "flex flex-row items-center justify-between": true,
          })}>
            <Button color="danger">Yes</Button>

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