import dynamic from "next/dynamic";
import { memo } from "react";
import classNames from "classnames";

const HeroSection= dynamic(() => import("./_components/HeroSection"));


function HomePage() {
  return (
    <section className={classNames({
      "px-2 sm:px-6 md:px-20 py-12 md:py-20": true,
    })}>
      <HeroSection />
    </section >
  )
}

export default memo(HomePage);