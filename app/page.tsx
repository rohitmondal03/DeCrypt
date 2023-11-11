import Image from "next/image";
import classNames from "classnames";

import { monsterrat } from "@/components/font/fonts";


export default function HomePage() {
  return (
    <>
      <section className={`py-12 px-20 flex flex-row items-center justify-between gap-32 h-[80vh]`}>
        <div className="text-center space-y-14">
          <h1 className={classNames(`${monsterrat.className}`, {
            "text-5xl font-bold text-zinc-500 dark:text-zinc-400 leading-normal": true,
          })}
          >
            Welcome to &nbsp;
            <span className={`text-black dark:text-sky-400 text-6xl underline`}>DeCrypt</span>,
            the secure password manager.
          </h1>

          <p className="text-xl text-orange-500 font-bold dark:text-amber-400">
            Decrypt is the easiest and most secure way to store your passwords. With Decrypt, you can create strong, unique passwords for all of your online accounts, and never have to worry about forgetting them again.
          </p>
        </div>

        <Image
          src={"/assets/main-illustration.svg"}
          alt="image"
          height={500}
          width={500}
        />
      </section >
    </>
  )
}
