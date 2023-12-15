import dynamic from "next/dynamic";
import { memo } from "react";
import classNames from "classnames";

const HeroSection= dynamic(() => import("./_components/HeroSection"));


function HomePage() {
  return (
    <section className={classNames({
      'px-20 flex flex-row items-center justify-between gap-32 h-[80vh]': true,
    })}>
      <HeroSection />
    </section >
  )
}

export default memo(HomePage);