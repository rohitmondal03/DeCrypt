import type { Metadata } from "next";

import { TLayoutProps } from "@/types";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
}


export default function DashboardLayout(
  { children }: TLayoutProps
) {
  return (
    <>
      {children}
    </>
  )
}