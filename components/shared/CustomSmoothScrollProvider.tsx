"use client"

import { ReactNode, useEffect } from "react";
import Lenis from '@studio-freight/lenis'


export default function SmoothScrollProvider(
  { children }: { children: ReactNode }
) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])


  return <div>{children}</div>
}