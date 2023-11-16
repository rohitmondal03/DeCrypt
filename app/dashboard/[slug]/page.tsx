"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Divider,
  Card, CardBody, CardFooter, CardHeader, Button,
} from "@nextui-org/react";
import classNames from "classnames";
import { Password } from "@prisma/client";

import { monsterrat } from "@/components/font/fonts";
import LoadingCard from "@/components/loading/loading-card";



export default function SinglePasswordPage() {
  const { slug } = useParams();
  const [passwordData, setPasswordData] = useState<Password>();
  const [loading, setloading] = useState(false)


  // fetch password data from slug
  useEffect(() => {
    async function fetchData() {
      setloading(true);

      const retrievedData = await fetch("/api/password", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      })

      const resp = await retrievedData.json();
      setPasswordData(resp);

      setloading(false);
    }

    fetchData();
  }, [])


  if (loading) {
    return (
      <LoadingCard />
    )
  }


  return (
    <section className={classNames({
      "flex items-center justify-center h-[80vh]": true,
    })}>
      <Card className={classNames({
        "w-[30rem] text-white bg-black dark:text-black dark:bg-white": true,
      })}>
        <CardHeader>
          <h1 className={classNames(`${monsterrat.className}`,{
            "text-3xl text-center": true
          })}>
            {passwordData?.label}
          </h1>
        </CardHeader>

        <Divider className="bg-white dark:bg-zinc-800" />

        <CardBody className="space-y-2">
          <div>
            <h2 className="text-xl font-bold">Encrypted password-</h2>
            <p>{passwordData?.encryptedPassword.slice(0, 25) + "..."}</p>
          </div>
        </CardBody>

        <Divider className="bg-white dark:bg-zinc-800" />

        <CardFooter>
          <Button
            color="primary"
            variant="solid"
          >
            Show original Password
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}