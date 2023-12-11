"use client"

import { signIn } from "next-auth/react"
import { OAuthProviderType } from "next-auth/providers/oauth-types";
import classNames from "classnames";

import { Button } from "../ui/button";
import { monsterrat } from "../font/fonts";


type TSignInButton = {
  providerLabel: string,
  signInProvider: OAuthProviderType,
}

const signinCallbackURL = "/dashboard"

const signInButton: TSignInButton[] = [
  {
    providerLabel: "Github",
    signInProvider: "github"
  },
  {
    providerLabel: "Discord",
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
          key={btns.signInProvider}
          variant={"secondary"}
          onClick={() => signIn(btns.signInProvider, { callbackUrl: signinCallbackURL })}
          className={classNames(`${monsterrat.className}`, {
            'font-bold outline outline-1 outline-zinc-400 dark:outline-zinc-700': true,
            "transition hover:scale-105": true,
          })}
        >
          Sign In with {btns.providerLabel}
        </Button>
      ))}
    </div>
  )
}