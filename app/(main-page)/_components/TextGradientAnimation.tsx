"use client"

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitTypes from "split-type";
import gsap from "gsap";


type TProps = {
  children: ReactNode
  classes: string
}

export default function TextGradientAnimate({ children, classes }: TProps) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    // @ts-ignore
    const text = new SplitTypes(splitTypes, { types: "chars, words" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: splitTypes,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.5,
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e: ScrollBehavior) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])


  return (
    <p className={`${classes} `}>
      {children}
    </p>
  )
}