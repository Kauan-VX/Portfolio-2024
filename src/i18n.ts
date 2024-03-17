import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['en', 'pt'];
 
export default getRequestConfig(async ({locale}) => {
  const baseLocale = new Intl.Locale(locale).baseName
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});