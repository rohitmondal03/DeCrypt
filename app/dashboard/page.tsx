import { getAuthSession } from "@/utils/getServerAuthSession"
import { redirect } from "next/navigation";


export default async function DashboardPage() {
  const session = await getAuthSession();

  session ? null : redirect("/api/auth/signin");

  return (
    <section>
      DashboardPage
    </section>
  )
}