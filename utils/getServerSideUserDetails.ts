import { type Session, getServerSession } from "next-auth";

import { authOptions } from "./next-auth";


type TUserDetails = Session["user"]


export async function getServerSideUserDetails() {
  const session= await getServerSession(authOptions);
  const userDetails: TUserDetails | undefined = session?.user;

  return userDetails;
}