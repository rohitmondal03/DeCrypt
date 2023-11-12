import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { NextUIProviders } from '@/components/themes/NextUIProvider'
import AuthSessionWrapper from '@/components/shared/AuthSessionProvider'
import SmoothScrollProvider from '@/components/shared/CustomSmoothScrollProvider'
import { codeFont } from '@/components/font/fonts'
import Navbar from '@/components/shared/Navbar'

import './_styles/globals.css'


export const metadata: Metadata = {
  title: 'DeCrypt',
  description: 'Generated by create next app',
}


type TProps = {
  children: ReactNode,
}

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body className={codeFont.className}>
        <NextUIProviders>
          <AuthSessionWrapper>
            <SmoothScrollProvider>
              <Navbar />
              <main>{children}</main>
            </SmoothScrollProvider>
          </AuthSessionWrapper>
        </NextUIProviders>
      </body>
    </html>
  )
}
