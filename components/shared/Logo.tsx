import classNames from "classnames";

import { monsterrat } from "../font/fonts";


export function Logo() {
  return (
    <h1
      className={classNames(`${monsterrat.className}`, {
        "text-4xl font-extrabold underline": true,
        "transition ease-out duration-200 hover:scale-110": true,
      })}
    >
      DeCrypt
    </h1>
  )
}