"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@nextui-org/react";
import classNames from "classnames";

import { ThemeSwitcher } from "../themes/ThemeSwitcher";
import { Logo } from "./Logo";


export default function Navbar() {
  const pathName = usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Login",
      href: "/login"
    },
    {
      label: "Signup",
      href: "/signup"
    },
  ]


  return (
    <Nav shouldHideOnScroll className="py-8 border-b-2 border-zinc-400 dark:border-zinc-700">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.label}>
            <Button
              as={Link}
              color={pathName === link.href ? "warning" : "default"}
              href={link.href}
              variant={pathName == link.href ? "flat" : "faded"}
              className={classNames({
                "font-bold": pathName === link.href,
                "scale-105": true
              })}
            >
              {link.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Nav>
  )
}