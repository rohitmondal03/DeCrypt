"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import classNames from "classnames";
import { Menu } from "lucide-react"

import { useUser } from "@/hooks/useUser";
import { SheetTrigger } from "../ui/sheet";

const Logo = dynamic(() => import("./Logo").then((mod) => mod.Logo))
const ThemeSwitcher = dynamic(() => import("@/components/themes/theme-switcher").then((mod) => mod.ThemeSwitcher))
const SignOutButton = dynamic(() => import("@/components/utility-buttons/signout-button").then((mod) => mod.SignOutButton))
const Button = dynamic(() => import("@/components/ui/button").then((mod) => mod.Button))
const Avatar = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.Avatar))
const AvatarFallback = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarFallback))
const AvatarImage = dynamic(() => import("@/components/ui/avatar").then((mod) => mod.AvatarImage))
const Sheet = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet))



function Navbar() {
  const pathName = usePathname();
  const { userDetails, authStatus } = useUser();


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-between md:justify-around md:px-0 px-10 py-8 border-b-2": true,
      "border-zinc-400 dark:border-zinc-600": true,
    })}>
      <Link href="/">
        <Logo />
      </Link>

      <div className={classNames({
        "hidden md:flex flex-row items-center justify-center gap-6": true,
        "": true,
      })}>
        {authStatus === "unauthenticated" ? (
          <>
            <Link href={`/sign-in`}>
              <Button variant={pathName === "/sign-in" ? "default" : "secondary"}>
                Sign In
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
          </>
        )}

        <Link href={`/dashboard`}>
          <Button variant={pathName.startsWith("/dashboard") ? "default" : "secondary"}>
            Dashboard
          </Button>
        </Link>

        <Link href={`/generate-password`}>
          <Button variant={pathName === "/generate-password" ? "default" : "secondary"}>
            Generate Password
          </Button>
        </Link>

        <ThemeSwitcher />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Menu className={classNames({
            "flex md:hidden": true,
          })} />
        </SheetTrigger>
      </Sheet>
    </nav>
  )
}

export default memo(Navbar);