"use client"

import { Password } from "@prisma/client";
import classNames from "classnames";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


type TProps = {
  passwordList: Password[]
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: .25,
      delay: 0.4 * idx,
      type: 'spring',
      stiffness: 100,
    }
  })
}


export default function SingleUsersPage({ passwordList }: TProps) {
  return (
    <div className={classNames({
      "flex flex-col gap-y-4 items-center justify-center": true,
    })}>
      {passwordList.map((data, idx: number) => (
        <motion.div
          key={data.id}
          className={classNames({
            "flex flex-row items-center justify-around border-2": true,
            "border-zinc-400 rounded-xl py-4 px-2 w-[60vw]": true,
          })}
          variants={fadeInAnimationVariants}
          initial={"initial"}
          animate={"animate"}
          custom={idx}
        >
          <p>{idx + 1 + "."}</p>
          <p className="text-xl">{data.label.slice(0, 10) + "..."}</p>
          <p>{data.encryptedPassword.slice(0, 50) + "..."}</p>

          <Link href={`/dashboard/${data.id}`}>
            <MoveRight className={classNames({
              "cursor-pointer hover:scale-150 transition": true,
            })} />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}