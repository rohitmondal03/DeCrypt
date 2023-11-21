import Image from "next/image";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import classNames from "classnames";

import { monsterrat } from "@/components/font/fonts";
import { getServerSideUserDetails } from "@/utils/getServerSideUserDetails";


export default async function NotFoundPage() {
  const userDetails = await getServerSideUserDetails();

  return (
    <section className={classNames(`${monsterrat.className}`, {
      "mx-auto py-10 space-y-12": true,
    })}>
      <Image
        src={"/assets/not_found_re.svg"}
        alt="not-found-img"
        height={"450"}
        width={"450"}
        placeholder="blur"
        blurDataURL="/assets/not_found_re.svg"
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

        <ButtonGroup className="space-x-1">
          <Button
            as={Link}
            href={"/"}
            color="warning"
            variant="bordered"
          >
            Go to Home Page
          </Button>

          {userDetails ? (
            <Button
              as={Link}
              href={"/dashboard"}
              color="primary"
              variant="bordered"
            >
              Dashboard
            </Button>
          ) : (
            <Button
              as={Link}
              href={"/sign-in"}
              color="primary"
              variant="bordered"
            >
              Go to Sign In page
            </Button>
          )}
        </ButtonGroup>
      </div>
    </section>
  )
}