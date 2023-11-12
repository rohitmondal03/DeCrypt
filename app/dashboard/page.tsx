import { redirect } from "next/navigation";
import classNames from "classnames";

import { monsterrat } from "@/components/font/fonts";
import { getAuthSession } from "@/utils/getServerAuthSession"
import { prisma } from "@/utils/prisma";
import { Button } from "@nextui-org/react";
import { CopyIcon } from "lucide-react";

import { encryptText } from "@/utils/encrypt";


export default async function DashboardPage() {
  const session = await getAuthSession();

  // console.log(encryptText("frontend"))
  // console.log(session?.user.id)

  session ? null : redirect("/api/auth/signin");

  // get user details.
  const userDetails = session?.user;

  // fetch all passwords of users.
  const getUsersPasswords = await prisma.password.findMany({
    where: {
      userId: userDetails?.id,
    }
  });


  return (
    <section className={classNames({
      "py-20": true,
      "space-y-16": getUsersPasswords.length <= 0,
      "space-y-20": getUsersPasswords.length > 0
    })}>
      <h1 className={classNames({
        "text-center text-4xl leading-snug": true
      })}>
        Welcome to your Dashboard <br />
        <span className={classNames(`${monsterrat.className}`, {
          'text-rose-500 font-bold underline': true,
        })}>{userDetails?.name}</span>
      </h1>

      {getUsersPasswords.length > 0 ? (
        <div className={classNames({
          "flex flex-col gap-y-2 items-center justify-center": true,
        })}>
          {getUsersPasswords.map((data, idx: number) => (
            <div
              key={data.id}
              className={classNames({
                "flex flex-row items-center justify-around border-2 border-zinc-400 rounded-xl py-4 px-2 w-[60vw]": true
              })}
            >
              <p>{idx + 1 + "."}</p>
              <p className="text-xl">{data.label}</p>
              <p>{data.encryptedPassword.slice(0, 50) + "..."}</p>
              <CopyIcon className="cursor-pointer" /> 
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto w-full text-center space-y-2">
          <p className={classNames({
            "text-2xl text-blue-500 font-bold": true,
          })}>
            No Passwords Found
          </p>

          <Button color="warning" variant="flat">
            Add your first password
          </Button>
        </div>
      )}
    </section>
  )
}