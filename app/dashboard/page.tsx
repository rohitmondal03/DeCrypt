import dynamic from "next/dynamic";
import classNames from "classnames";

import { monsterrat } from "@/components/font/fonts";
import { prisma } from "@/utils/prisma";
import { getServerSideUserDetails } from "@/utils/getServerSideUserDetails";

const UsersPasswordsList = dynamic(() => import("./_components/UsersPasswordList"))
const AddNewPasswordButton = dynamic(() => import("./_components/add-new-password-button"))


export default async function DashboardPage() {
  const userDetails = await getServerSideUserDetails();

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
        <div className={classNames({
          "flex flex-col items-center justify-center gap-y-12": true,
        })}>
          <UsersPasswordsList passwordList={getUsersPasswords} />

          <AddNewPasswordButton buttonText="Add more password" />
        </div>
      ) : (
        <div className="mx-auto w-full text-center space-y-5">
          <p className={classNames({
            "text-2xl text-blue-500 font-bold": true,
          })}>
            No Passwords Found
          </p>

          <AddNewPasswordButton buttonText="Add your first password" />
        </div>
      )}
    </section>
  )
}