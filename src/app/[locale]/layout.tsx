'use client'
import { NextUIProvider } from '@nextui-org/react'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Fira_Code } from 'next/font/google'
import './globals.scss'

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
  weight: ['300', '400', '500', '600', '700'],
})

interface RootLayoutProps {
  children : React.ReactNode;
  params : {
    locale : "pt" | "en"
  },
}


export default function RootLayout({
  children,
  params : { locale }
}: Readonly<RootLayoutProps>) {
  // const messages = useMessages();


  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fira.className}>
      <NextIntlClientProvider locale={locale} >
        <NextUIProvider className="">
          <NextThemesProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemesProvider>
        </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

