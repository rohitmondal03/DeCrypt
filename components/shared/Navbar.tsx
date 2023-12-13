"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { useUser } from "@/hooks/useUser";
import { Logo } from "./Logo";

const ThemeSwitcher= dynamic(() => import("@/components/themes/theme-switcher").then((mod) => mod.ThemeSwitcher))
const SignOutButton= dynamic(() => import("@/components/utility-buttons/signout-button").then((mod) => mod.SignOutButton))
const Button= dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Avatar= dynamic(() => import("@/components/ui/avatar").then((mod) => mod.Avatar))
const AvatarFallback= dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarFallback))
const AvatarImage= dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarImage))



export default function Navbar() {
  const pathName = usePathname();
  const { userDetails, authStatus } = useUser();


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around py-8 border-b-2": true,
      "border-zinc-400 dark:border-zinc-600": true,
    })}>
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex flex-row items-center justify-center gap-6">
        {authStatus === "unauthenticated" ? (
          <>
            <Link href={`/sign-in`}>
              <Button variant={pathName === "/sign-in" ? "default" : "secondary"}>
                Sign In
              </Button>
            </Link>

            <Link href={`/dashboard`}>
              <Button variant={pathName === "/dashboard" ? "default" : "secondary"}>
                Dashboard
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Avatar>
              <AvatarFallback>{userDetails?.name?.charAt(0).toUpperCase()}</AvatarFallback>
              <AvatarImage src={userDetails?.image || ""} />
            </Avatar>

            <SignOutButton />

            <Link href={`/dashboard`}>
              <Button variant={pathName === "/dashboard" ? "default" : "secondary"}>
                Dashboard
              </Button>
            </Link>
          </>
        )}

        <ThemeSwitcher />
      </div>
    </nav>
  )
}