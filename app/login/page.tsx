import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@nextui-org/react'
import classNames from "classnames"


export default function LoginPage() {
  return (
    <section className='flex flex-row items-center justify-around py-12'>
      <Image
        src={"/assets/login.svg"}
        alt=''
        height={400}
        width={400}
      />

      <div className='space-y-4'>
        <Button as={Link} variant='bordered' color='primary' href='/api/auth/signin'>
          Signin with Github
        </Button>
      </div>
    </section>
  )
}
