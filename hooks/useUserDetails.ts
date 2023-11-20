import type { Session } from "next-auth";
import { useSession } from "next-auth/react";

type TAuthStatus = "authenticated" | "unauthenticated" | "loading";
type TUserDetails = Session["user"];


export function getClientSideUserDetails() {
  const session = useSession();

  const userDetails: TUserDetails | undefined = session.data?.user;
  const authStatus: TAuthStatus = session.status;

  return { userDetails, authStatus };
}