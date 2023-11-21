"use client"

import Link from "next/link";
import { Password } from "@prisma/client";
import classNames from "classnames";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";


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
      delay: 0.1 * idx,
      type: 'spring',
      stiffness: 100,
    }
  })
}


type TProps = {
  passwordList: Password[]
}

export default function UsersPasswordsList({ passwordList }: TProps) {
  return (
    <div className={classNames({
      "flex flex-col gap-y-4 items-center justify-center": true,
    })}>
      {passwordList.map((data, idx: number) => (
        <motion.div
          key={data.id}
          className={classNames({
            "flex flex-row items-center justify-around text-black dark:text-zinc-300": true,
            "border-2 border-zinc-700 dark:border-zinc-400 rounded-xl py-4 px-2 w-[55vw]": true,
          })}
          variants={fadeInAnimationVariants}
          initial={"initial"}
          animate={"animate"}
          custom={idx}
        >
          <p>{idx + 1 + "."}</p>
          <p className="text-xl font-bold">{data.label.slice(0, 8) + "..."}</p>
          <p>
            {data.encryptedPassword.length > 50
              ? data.encryptedPassword.slice(0, 30) + "..."
              : data.encryptedPassword
            }
          </p>

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