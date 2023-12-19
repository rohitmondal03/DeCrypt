"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import classNames from "classnames";
import { Menu } from "lucide-react"

import { useUser } from "@/hooks/useUser";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

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
      "flex flex-row items-center justify-between md:justify-around": true,
      "border-zinc-400 dark:border-zinc-600 border-b-2": true,
      "px-2 xs:px-6 sm:px-10 py-8": true,
    })}>
      <Link href="/">
        <Logo />
      </Link>


      <div className={classNames({
        "hidden lg:flex flex-row items-center justify-center gap-6": true,
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
      </div>


      <div className={classNames({
        "flex flex-row items-center justify-center gap-x-1 xs:gap-x-5": true,
      })}>
        <ThemeSwitcher />

        <Sheet>
          <SheetTrigger asChild>
            <Menu className={classNames({
              "flex lg:hidden": true,
              "scale-75 xs:scale-100": true,
            })} />
          </SheetTrigger>

          <SheetContent className={classNames({
            "w-[90vw] sm:w-[60vw]": true,
          })}>
            <SheetHeader>
              <SheetTitle className={classNames({
                "mb-10": true,
                "text-2xl text-left font-bold": true,
              })}>
                {userDetails ? (
                  <>{userDetails.name}</>
                ) : (
                  <>Welcome to Decrypt</>
                )}
              </SheetTitle>
            </SheetHeader>

            <div className={classNames({
              "flex flex-col gap-8 items-start justify-center": true,
            })}>
              {authStatus === "unauthenticated" ? (
                <>
                  <SheetClose asChild>
                    <Link href={`/sign-in`}>
                      <Button variant={pathName === "/sign-in" ? "default" : "secondary"}>
                        Sign In
                      </Button>
                    </Link>
                  </SheetClose>
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

              <SheetClose asChild>
                <Link href={`/dashboard`}>
                  <Button variant={pathName.startsWith("/dashboard") ? "default" : "secondary"}>
                    Dashboard
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={`/generate-password`}>
                  <Button variant={pathName === "/generate-password" ? "default" : "secondary"}>
                    Generate Password
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default memo(Navbar);