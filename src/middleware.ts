import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Prima controlla se c'è una lingua salvata nel localStorage
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  const handleI18nRouting = createMiddleware({
    locales: ['ar', 'en'],
    defaultLocale: savedLocale || 'ar',
    localePrefix: 'always'
  });

  const response = await handleI18nRouting(request);

  // Se è la prima visita, imposta l'arabo come lingua predefinita
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', 'ar');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
