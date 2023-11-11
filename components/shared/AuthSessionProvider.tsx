"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";


export default function AuthSessionWrapper(
  {children}:{children: ReactNode}
) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}