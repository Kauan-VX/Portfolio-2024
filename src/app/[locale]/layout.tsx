
import { Metadata, Viewport } from 'next';
import { Fira_Code } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextUiProvider } from './NextUiProvider';
import './globals.scss';

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata : Metadata = {
  manifest : "/manifest.json",
  title: "Create Next App",
  description: "Gene"
} 

export const viewport : Viewport = {
  themeColor : "#FFFFFF"
}

interface RootLayoutProps {
  children : React.ReactNode;
  params : {
    locale : "pt" | "en"
  },
}


export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
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

