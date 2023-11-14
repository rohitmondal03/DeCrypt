import { getAuthSession } from "@/utils/getServerAuthSession";

import SignInPage from "./_components/signinPage";
import { redirect } from "next/navigation";


export default async function Page() {
  const session= await getAuthSession();

  !session ? redirect("/api/auth/signin") : null;

  return (
    <SignInPage />
  )
}