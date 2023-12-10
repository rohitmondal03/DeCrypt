"use client"

import { signIn } from "next-auth/react"
import { OAuthProviderType } from "next-auth/providers/oauth-types";
import classNames from "classnames";

import { Button } from "../ui/button";


type TSignInButton = {
  providerLabel: string,
  color: "warning" | "success",
  signInProvider: OAuthProviderType,
}

const signinCallbackURL = "/dashboard"

const signInButton: TSignInButton[] = [
  {
    providerLabel: "Github",
    color: "warning",
    signInProvider: "github"
  },
  {
    providerLabel: "Discord",
    color: "success",
    signInProvider: "discord"
  }
]


export function SignInButtonsGroup() {
  return (
    <div className={classNames({
      "flex flex-row gap-3 items-center justify-center": true,
    })}>
      {signInButton.map((btns) => (
        <Button
          color={btns.color}
          onClick={() => signIn(btns.signInProvider, { callbackUrl: signinCallbackURL })}
          className={classNames({
            'font-bold dark:font-normal': true,
          })}
        >
          Sign In with {btns.providerLabel}
        </Button>
      ))}
    </div>
  )
}