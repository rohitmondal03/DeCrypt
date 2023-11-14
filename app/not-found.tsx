import classNames from "classnames";
import Image from "next/image";
import { Button } from "@nextui-org/react";

import { monsterrat } from "@/components/font/fonts";
import Link from "next/link";


export default function NotFoundPage() {
  return (
    <section className={classNames(`${monsterrat.className}`, {
      "mx-auto py-10 space-y-12": true,
    })}>
      <Image
        src={"/assets/not_found_re.svg"}
        alt="not-found-img"
        height={"450"}
        width={"450"}
        className={classNames({
          "mx-auto": true,
        })}
      />

      <div className={classNames({
        "flex flex-col items-center justify-center gap-4": true,
      })}>
        <h1 className={classNames({
          "text-center text-4xl font-bold mt-8 uppercase": true,
        })}>
          Page not found...
        </h1>

        <Button
          as={Link}
          href={"/"}
          color="warning"
        >
          Go to Home Page
        </Button>
      </div>
    </section>
  )
}