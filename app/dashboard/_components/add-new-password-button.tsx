"use client"

import { useState } from "react";
import classNames from "classnames";
import {
  Button,
  Modal, ModalBody, ModalContent, ModalFooter, useDisclosure,
  Input,
} from "@nextui-org/react";

import { addPassword } from "@/actions/add-password";
import { monsterrat } from "@/components/font/fonts";
import SubmitPasswordButton from "./submit-password-button";


type TInputs = {
  label: string
  password: string
}

type TProps = {
  buttonText: string
}


export default function AddNewPasswordButton({ buttonText }: TProps) {
  const { onOpen, onOpenChange, isOpen, onClose } = useDisclosure();
  const [inputValues, setInputValues] = useState<TInputs>({
    label: "",
    password: ""
  });


  return (
    <>
      <Button
        color="warning"
        variant="solid"
        onClick={onOpen}
        className="font-bold"
      >
        {buttonText}
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
          <h1 className={classNames(`${monsterrat.className}`, {
            "text-center font-bold text-3xl mb-6": true,
          })}>
            Add new Password
          </h1>

          <form
            action={() => {
              addPassword(inputValues)
              onClose()
              setInputValues({
                label: "",
                password: "",
              })
            }}
          >
            <ModalBody>
              <Input
                type="text"
                label="Label"
                autoComplete="off"
                autoFocus
                required
                value={inputValues.label}
                onChange={(e) => {
                  setInputValues((prev) => ({ ...prev, label: e.target.value }))
                }}
              />

              <Input
                type="password"
                label="Password"
                autoComplete="off"
                required
                value={inputValues.password}
                onChange={(e) => {
                  setInputValues((prev) => ({ ...prev, password: e.target.value }))
                }}
              />
            </ModalBody>

            <ModalFooter>
              <SubmitPasswordButton />
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}