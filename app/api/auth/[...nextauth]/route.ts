import NextAuth, { NextAuthOptions } from "next-auth"

import { authOptions } from "@/server/next-auth"


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }