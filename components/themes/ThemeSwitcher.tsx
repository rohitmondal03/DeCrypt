"use client";

import { useTheme } from "next-themes";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" isIconOnly>
          {theme === "light" ? (
            <Sun />
          ) : (
            <Moon />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => setTheme("dark")}>Dark Mode</DropdownItem>
        <DropdownItem onClick={() => setTheme("light")}>Light Mode</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};