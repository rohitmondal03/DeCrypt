import dynamic from "next/dynamic";
import classNames from "classnames";

const GenerateRandomPasswordWidget= dynamic(() => import("./_components/GenerateRandomPasswordWidget"))


export default function GeneratePasswordPage(){
  return(
    <section className={classNames({
      'px-20 flex flex-row items-center justify-between gap-32 h-[80vh]': true,
    })}>
      <GenerateRandomPasswordWidget />
    </section>
  )
} 