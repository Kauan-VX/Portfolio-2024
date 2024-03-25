// eslint-disable-next-line camelcase
import { Fira_Code } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { NextUiProvider } from './NextUiProvider'
import './globals.scss'
import { Metadata, Viewport } from 'next'

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Create Next App',
  description: 'Gene',
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

interface RootLayoutProps {
  children: ReactNode
  params: {
    locale: 'pt' | 'en'
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fira.className}>
        <NextUiProvider messages={messages} locale={locale}>
          {children}
        </NextUiProvider>
      </body>
    </html>
  )
}
