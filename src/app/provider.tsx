"use client";
import { NextUIProvider } from "@nextui-org/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export const Provider = ({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) => {
  const timeZone = "America/Brazil";

  return (
    <NextUIProvider>
      <NextIntlClientProvider
        timeZone={timeZone}
        locale={locale}
        messages={messages}
      >
        <Toaster position="top-right" />
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextIntlClientProvider>
    </NextUIProvider>
  );
};
