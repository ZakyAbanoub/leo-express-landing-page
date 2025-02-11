import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localePrefix: 'as-needed'
  });

  const response = await handleI18nRouting(request);

  // Se è la prima visita e non c'è una lingua salvata nel local storage,
  // reindirizza alla versione araba
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', 'ar');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
