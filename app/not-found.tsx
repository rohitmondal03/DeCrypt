import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { monsterrat } from "@/lib/fonts";
import { getServerSideUserDetails } from "@/lib/getServerSideUserDetails";
import { Button } from "@/components/ui/button";


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

        <div className="flex flex-row items-center justify-center gap-x-3">
          <Link href={"/"}>
            <Button variant="default">
              Go to Home Page
            </Button>
          </Link>

          {userDetails ? (
            <Link href={"/dashboard"}>
              <Button variant="secondary">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <Button variant="secondary">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section >
  )
}