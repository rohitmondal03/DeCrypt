"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import classNames from "classnames";
import {
  Button,
  Avatar,
  Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem,
  Modal, ModalBody, ModalContent, ModalFooter, useDisclosure,
} from "@nextui-org/react";

import { getClientSideUserDetails } from "@/hooks/getClientSideUserDetails";
import { SignOutButton } from "@/components/utility-buttons/signout-button";
import { ThemeSwitcher } from "@/components/themes/ThemeSwitcher";
import { Logo } from "./Logo";


export default function Navbar() {
  const pathName = usePathname();
  const { theme } = useTheme();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { userDetails, authStatus } = getClientSideUserDetails();


  // navbar links
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
    <Nav
      shouldHideOnScroll
      className={classNames({
        "py-8 border-b-2 border-zinc-400 dark:border-zinc-800": true,
      })}
    >
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
                "border-2 border-yellow-500 dark:border-yellow-500": pathName === link.href,
                "scale-105": true
              })}
            >
              {link.label}
            </Button>
          </NavbarItem>
        ))}
        {authStatus === "unauthenticated" ? (
          <NavbarItem>
            <Button
              as={Link}
              color={pathName === "/sign-in" ? "warning" : "default"}
              href={"/sign-in"}
              variant={pathName == "/sign-in" ? "flat" : "faded"}
              className={classNames({
                "font-bold": pathName === "/sign-in",
                "border-2 border-yellow-500 dark:border-yellow-500": pathName === "/sign-in",
                "scale-105": true,
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
                "h-40 p-6 border-2 border-red-700": true,
              })}
            >
              <ModalContent>
                <ModalBody>
                  <p className="text-xl font-bold">
                    Sign Out&nbsp;
                    <span className="text-violet-600 dark:text-cyan-500">
                      &apos;{userDetails?.name}&apos;
                    </span>
                    ?
                  </p>
                </ModalBody>

                <ModalFooter>
                  <SignOutButton />
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