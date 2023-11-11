"use client"

import { Input, } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import classNames from "classnames"

import { SubmitButton } from './_components/login-btn'


export default function page() {
  return (
    <section className='flex flex-row items-center justify-around py-12'>
      <Image
        src={"/assets/login.svg"}
        alt=''
        height={400}
        width={400}
      />

      <div>
        <form action="" className={classNames({
          "space-y-5": true,
        })}>
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <SubmitButton />
        </form>
      </div>
    </section>
  )
}
