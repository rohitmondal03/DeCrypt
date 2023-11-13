"use client"

import { useParams } from "next/navigation";
import {
  Divider,
  Card, CardBody, CardFooter, CardHeader, Button,
} from "@nextui-org/react";
import classNames from "classnames";


type TProps = {
  params: {
    slug: string;
  };
};

export default async function SinglePasswordPage({ params }: TProps) {
  const { slug } = useParams();  

  return (
    <section className={classNames({
      "flex items-center justify-center h-[80vh]": true,
    })}>
      <Card className={classNames({
        "max-w-[400px] text-white bg-black dark:text-black dark:bg-white": true,
      })}>
        <CardHeader>
          <h1 className="text-3xl text-center">Demo 1</h1>
        </CardHeader>
        <Divider className="bg-white dark:bg-zinc-800" />
        <CardBody className="space-y-2">
          <h2 className="text-xl font-bold">Encrypted password-</h2>
          <p>123456789</p>
        </CardBody>
        <Divider className="bg-white dark:bg-zinc-800" />
        <CardFooter>
          <Button
            color="primary"
            variant="solid"
          >
            Show original password
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}