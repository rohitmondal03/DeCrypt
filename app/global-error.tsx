"use client"

import { Button } from "@nextui-org/react"
import classNames from "classnames"
import Image from "next/image"


type TProps = {
  reset: () => void,
}

export default function ErrorPage({ reset }: TProps) {
  return (
    <section className={classNames({
      "flex items-center justify-center gap-7": true
    })}>
      <Image
        src={"/assets/error.svg"}
        alt="error image"
        height={"450"}
        width={"450"}
        placeholder="blur"
        blurDataURL="/assets/error.svg"
        className={classNames({
          "mx-auto": true,
        })}
      />

      <div className="space-y-4">
        <h1 className={classNames({
          "text-4xl font-bold text-gray-900 dark:text-white": true,
        })}>
          Something went wrong !!
        </h1>

        <Button
          color="primary"
          variant="solid"
          onClick={() => reset()}
        >
          Try Again !!
        </Button>
      </div>
    </section>
  )
}