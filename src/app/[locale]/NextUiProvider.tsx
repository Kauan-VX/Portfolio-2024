'use client'
import { NextUIProvider } from '@nextui-org/react'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const NextUiProvider = ({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode
  locale: string
  messages: any
}) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextUIProvider className="">
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  )
}
