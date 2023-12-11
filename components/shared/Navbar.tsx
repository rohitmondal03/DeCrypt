"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import classNames from "classnames";

import { useUser } from "@/hooks/useUser";
import { SignOutButton } from "@/components/utility-buttons/signout-button";
import { ThemeSwitcher } from "@/components/themes/theme-switcher";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "./Logo";


export default function Navbar() {
  const pathName = usePathname();
  const { theme } = useTheme();

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

            <Link href={`/dashboard`}>
              <Button
                variant={pathName === "/dashboard" ? "default" : "ghost"}
              >
                Dashboard
              </Button>
            </Link>

            <SignOutButton />
          </>
        )}

        <ThemeSwitcher />
      </div>
    </nav>
  )
}