"use client"

import { signIn } from "next-auth/react"
import { Button, ButtonGroup } from '@nextui-org/react';
import classNames from "classnames";


const signinCallbackURL = "/dashboard"

export function SignInButtonsGroup() {
  return (
    <ButtonGroup className="space-x-1">
      <Button
        variant='bordered'
        color="warning"
        onClick={() => signIn("discord", { callbackUrl: signinCallbackURL })}
        className={classNames({
          'font-bold dark:font-normal': true,
        })}
      >
        Signin with Discord
      </Button>

      <Button
        variant='bordered'
        color="success"
        onClick={() => signIn("github", { callbackUrl: signinCallbackURL })}
        className={classNames({
          'font-bold dark:font-normal': true,
        })}
      >
        Signin with GitHub
      </Button>
    </ButtonGroup>
  )
}