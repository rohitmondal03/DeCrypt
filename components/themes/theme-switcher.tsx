"use client"

import dynamic from "next/dynamic";
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button";
import classNames from "classnames";

const DropdownMenu = dynamic(() => import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenu))
const DropdownMenuContent = dynamic(() => import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuContent))
const DropdownMenuItem = dynamic(() => import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuItem))
const DropdownMenuTrigger = dynamic(() => import("@/components/ui/dropdown-menu").then((mod) => mod.DropdownMenuTrigger))


export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={classNames({
            "border-2 border-zinc-500": true,
            "scale-75 xs:scale-100": true,
          })}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
