import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
}

type TProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: TProps) {
  return (
    <>
      {children}
    </>
  )
}