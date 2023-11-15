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
        className={classNames({
          'font-bold dark:font-normal': true,
        })}
        onClick={() => signIn("discord", { callbackUrl: signinCallbackURL })}
      >
        Signin with Discord
      </Button>

      <Button
        variant='bordered'
        color="success"
        className={classNames({
          'font-bold dark:font-normal': true,
        })}
        onClick={() => signIn("github", { callbackUrl: signinCallbackURL })}
      >
        Continue with GitHub
      </Button>
    </ButtonGroup>
  )
}