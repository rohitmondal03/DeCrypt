import { memo, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Button,
  Dropdown, DropdownItem, DropdownMenu, DropdownTrigger
} from "@nextui-org/react"
import { Moon, Sun } from "lucide-react";
import classNames from "classnames";


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
        <Button variant="bordered" isIconOnly
          className={classNames({
            "border-zinc-400 hover:rotate-90 dark:hover:-rotate-90": true,
          })}
        >
          {theme === "light" ? (
            <Sun className="scale-90" />
          ) : (
            <Moon className="scale-90" />
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