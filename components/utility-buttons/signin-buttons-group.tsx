"use client"

import dynamic from "next/dynamic";
import { signIn } from "next-auth/react"
import { OAuthProviderType } from "next-auth/providers/oauth-types";
import classNames from "classnames";

import { monsterrat } from "../../lib/fonts";

const Button= dynamic(() => import("@/components/ui/button").then((mod) => mod.Button));

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
  },
  // {
  //   providerLabel: "Google",
  //   signInProvider: "google",
  // }
]


export function SignInButtonsGroup() {
  return (
    <div className={classNames({
      "flex flex-row gap-3 items-center justify-start": true,
    })}>
      {signInButton.map((btns) => (
        <Button
          key={btns.signInProvider}
          variant={"secondary"}
          onClick={() => signIn(btns.signInProvider, { callbackUrl: signinCallbackURL })}
          className={classNames(`${monsterrat.className}`, {
            'font-bold': true,
            "transition hover:scale-105": true,
          })}
        >
          Sign In with {btns.providerLabel}
        </Button>
      ))}
    </div>
  )
}