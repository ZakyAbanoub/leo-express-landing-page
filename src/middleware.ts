import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from './config';

export default async function middleware(request: NextRequest) {
  // Prima controlla se c'è una lingua salvata nel localStorage
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // Verifica che la locale salvata sia valida
  const validLocale = savedLocale && locales.includes(savedLocale as Locale) 
    ? savedLocale as Locale 
    : defaultLocale;
  
  const handleI18nRouting = createMiddleware({
    // A list of all locales that are supported
    locales: locales,
    
    // Used when no locale matches
    defaultLocale: validLocale,
    
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    localePrefix: 'always'
  });

  const response = await handleI18nRouting(request);

  // Se è la prima visita, imposta l'arabo come lingua predefinita
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', defaultLocale);
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
