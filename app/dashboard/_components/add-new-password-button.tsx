"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import {  useDisclosure } from "@nextui-org/react";
import classNames from "classnames";

const Modal = dynamic(() => import("@nextui-org/react").then((mod) => mod.Modal))
const ModalBody = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalBody))
const ModalContent = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalContent))
const ModalFooter = dynamic(() => import("@nextui-org/react").then((mod) => mod.ModalFooter))
const Input = dynamic(() => import("@nextui-org/react").then((mod) => mod.Input))

import { addPassword } from "@/app/dashboard/actions/add-password";
import { monsterrat } from "@/components/font/fonts";
import { Button } from "@/components/ui/button";
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