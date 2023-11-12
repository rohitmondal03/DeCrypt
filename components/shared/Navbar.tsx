"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"
import classNames from "classnames";
import {
  Avatar,
  Modal, ModalBody, ModalContent, ModalFooter, useDisclosure
} from "@nextui-org/react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@nextui-org/react";

import { ThemeSwitcher } from "../themes/ThemeSwitcher";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";
import { Session } from "next-auth";


let userDetails: Session["user"] | undefined;

export default function Navbar() {
  const pathName = usePathname();
  const { data, status } = useSession();
  const { theme } = useTheme();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // get user's details
  userDetails = data?.user;


  const navLinks = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Dashboard",
      href: "/dashboard"
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
        {status === "unauthenticated" ? (
          <NavbarItem>
            <Button
              as={Link}
              color={pathName === "/signin" ? "warning" : "default"}
              href={"/signin"}
              variant={pathName == "/signin" ? "flat" : "faded"}
              className={classNames({
                "font-bold": pathName === "/signin",
                "scale-105": true
              })}
            >
              Sign In
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Avatar
              isBordered
              size="md"
              color={theme === "dark" ? "danger" : "warning"}
              src={userDetails?.image as string}
              onClick={onOpen}
              className={classNames({
                "hover:scale-95 transition ease-out cursor-pointer": true,
              })}
            />
            <Modal
              placement="center"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              className={classNames({
                "h-40 p-6": true,
              })}
            >
              <ModalContent>
                <ModalBody>
                  <p className="text-xl font-bold">
                    Sign Out&nbsp;
                    <span className="text-rose-500">{userDetails?.name}</span>
                    ?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Link href={"/api/auth/signout"}>
                    <Button
                      variant="ghost"
                      color="warning"
                      className="font-bold dark:font-normal hover:scale-105 transition"
                    >
                      Sign Out
                    </Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Nav>
  )
}