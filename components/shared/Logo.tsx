import Link from "next/link";

import { monsterrat } from "../font/fonts";


export function Logo() {
  return <h1 className={`${monsterrat.className} text-4xl font-bold underline`}>DeCrypt</h1>
}