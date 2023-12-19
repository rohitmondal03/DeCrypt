import dynamic from "next/dynamic";
import classNames from "classnames";

const GenerateRandomPasswordWidget= dynamic(() => import("./_components/GenerateRandomPasswordWidget"))


export default function GeneratePasswordPage(){
  return(
    <section className={classNames({
      'flex flex-row items-center justify-between gap-32': true,
      "px-1 sm:px-6 md:px-20 py-8 md:py-16": true,
      "lg:h-[80vh]": true,
    })}>
      <GenerateRandomPasswordWidget />
    </section>
  )
} 