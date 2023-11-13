"use client"

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/react'
import classNames from 'classnames'

import { getAuthSession } from '@/utils/getServerAuthSession'
import { useSession } from 'next-auth/react'


export default function LoginPage() {
  const { theme } = useTheme();
  const { status } = useSession()

  status === "authenticated" ? redirect("/dashboard") : null;


  return (
    <section className='flex flex-row items-center justify-around h-[80vh]'>
      <Image
        src={"/assets/login.svg"}
        alt=''
        height={400}
        width={400}
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

        <Button
          as={Link}
          variant='bordered'
          color={theme === "dark" ? "success" : "danger"}
          href='/api/auth/signin'
          className='font-bold dark:font-normal hover:scale-110 transition ease-out'
        >
          Signin to DeCrypt
        </Button>
      </div>
    </section>
  )
}
