import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from '@/config';
 
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../../messages/${locale}.json`)).default,
  timeZone: 'Africa/Cairo',
  now: new Date(),
}));
