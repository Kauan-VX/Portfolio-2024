import Home from "@/app/[locale]/page";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Provider } from "../provider";

const fira_code = localFont({
  src: "../../../public/font/FiraCode-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Portfólio KVX",
  description: "Gene",
};

export const viewport: Viewport = {
  themeColor: "#000",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: "pt" | "en";
  };
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
      <body className={`${fira_code.className}`}>
        <Provider messages={messages} locale={locale}>
          <Home />
        </Provider>
      </body>
    </html>
  );
}
