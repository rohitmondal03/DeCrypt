import { redirect } from "next/navigation";
import classNames from "classnames";
import { Button } from "@nextui-org/react";

import { monsterrat } from "@/components/font/fonts";
import { getAuthSession } from "@/utils/getServerAuthSession"
import { prisma } from "@/utils/prisma";
import Passwords from "./_components/Passwords";


export default async function DashboardPage() {
  const session = await getAuthSession();

  // if no session, then redirect
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
      "py-16": true,
      "space-y-16": getUsersPasswords.length <= 0,
      "space-y-12": getUsersPasswords.length > 0
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
        <Passwords passwordList={getUsersPasswords} />
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