import classNames from "classnames";

import { monsterrat } from "../../lib/fonts";


export function Logo() {
  return (
    <h1
      className={classNames(`${monsterrat.className}`, {
        "text-2xl sm:text-4xl font-extrabold underline": true,
        "transition ease-out duration-200 hover:scale-110": true,
      })}
    >
      DeCrypt
    </h1>
  )
}