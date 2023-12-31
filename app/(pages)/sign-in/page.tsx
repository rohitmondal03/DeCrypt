import Image from 'next/image'
import { redirect } from "next/navigation";
import classNames from 'classnames'

import { getServerSideUserDetails } from '@/lib/getServerSideUserDetails';
import { SignInButtonsGroup } from '@/components/utility-buttons/signin-buttons-group';


export default async function SignInPage() {
  const userDetails = await getServerSideUserDetails();

  // don't allow "logged" users to access this route
  userDetails ? redirect("/dashboard") : null;


  return (
    <section className={classNames({
      'flex flex-row items-center justify-around': true,
      "px-1 sm:px-6 md:px-20 py-16": true,
      "h-fit lg:h-[80vh]": true,
    })}>
      <Image
        src={"/assets/login.svg"}
        alt=''
        height={400}
        width={400}
        blurDataURL='/assets/login.svg'
        placeholder='blur'
      />

      <div className='space-y-10'>
        <div className='space-y-2'>
          <h1 className={classNames({
            'text-5xl font-bold text-blue-600 dark:text-pink-600 mb-6': true,
          })}>
            Sign In to Decrypt
          </h1>
          <p>New to DeCrypt or already have an account ??</p>
          <p>Click on SignIn button and continue to DeCrypt.</p>
        </div>

        <SignInButtonsGroup />
      </div>
    </section>
  )
}