import Image from "next/image";
import classNames from "classnames";

import { monsterrat } from "@/lib/fonts";


export default function HeroSection() {
  return (
    <div className={classNames({
      'flex flex-col xl:flex-row items-center justify-between gap-20 sm:gap-16 md:gap-24 lg:gap-32 h-[80vh]': true,
    })}>
      <div className="text-center space-y-10 md:space-y-14">
        <h1 className={classNames(`${monsterrat.className}`, {
          "text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-500 dark:text-zinc-300": true,
          "sm:leading-normal lg:leading-tight": true,
        })}>
          Welcome to &nbsp;
          <span className={classNames({
            'text-black dark:text-blue-500 text-4xl md:text-5xl lg:text-6xl underline': true,
          })}>
            DeCrypt
          </span>,
          the secure password manager.
        </h1>

        <p className={classNames({
          "text-sm sm:text-base md:text-lg lg:text-xl text-orange-500 font-bold dark:text-amber-400": true,
        })}>
          Decrypt is the easiest and most secure way to store your passwords. With Decrypt, you can create strong, unique passwords for all of your online accounts, and never have to worry about forgetting them again.
        </p>
      </div>

      <Image
        src={"/assets/main-illustration.svg"}
        alt="image"
        height={500}
        width={500}
        blurDataURL='/assets/main-illustration.svg'
        placeholder='blur'
        className={classNames({
          "scale-75 sm:scale-90 md:scale-95 lg:scale-100": true
        })}
      />
    </div>
  )
}