import { getServerSession } from "next-auth";
import { authOptions } from "./next-auth";

export const getAuthSession = () => {
  return getServerSession(authOptions);
};