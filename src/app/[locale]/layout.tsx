
import { Fira_Code } from 'next/font/google';
import { NextUiProvider } from './NextUiProvider';
import './globals.scss';
import { notFound } from 'next/navigation';

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

