import { getAuthSession } from "@/utils/getServerAuthSession";
import type { Session } from "next-auth";

type TUserDetails= Session["user"]

export async function getServerSideUserDetails() {
  const session = await getAuthSession();
  const userDetails: TUserDetails | undefined = session?.user;

  return userDetails;
}