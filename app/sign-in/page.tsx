import dynamic from 'next/dynamic';
import Image from 'next/image'
import { redirect } from "next/navigation";
import classNames from 'classnames'

import { getServerSideUserDetails } from '@/hooks/getServerSideUserDetails';

const SignInButtonsGroup = dynamic(() => import("@/components/utility-buttons/signin-buttons-group")
  .then((module) => module.SignInButtonsGroup)
)



export default async function SignInPage() {
  const userDetails = await getServerSideUserDetails();

  // don't allow "logged" users to access this route
  userDetails ? redirect("/dashboard") : null;

  return (
    <section className='flex flex-row items-center justify-around h-[80vh]'>
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