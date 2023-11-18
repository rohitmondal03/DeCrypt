import {
  Button,
  Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure
} from "@nextui-org/react";
import classNames from "classnames";

export default function ShowOriginalPasswordButton() {
  const { onClose, onOpen, isOpen, onOpenChange } = useDisclosure();

  
  return (
    <>
      <Button
        variant="solid"
        color="primary"
        onClick={onOpen}
      >
        Show Original Password
      </Button>

      <Modal
        placement="bottom-center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={classNames({
          "py-10": true,
        })}
      >
        <ModalContent>
          <ModalHeader></ModalHeader>

          <ModalBody>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}