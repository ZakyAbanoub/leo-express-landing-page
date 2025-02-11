'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollTo } from '@/hooks/useScrollTo';

export default function Header() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const scrollTo = useScrollTo();

  const handleLocaleChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${currentPath}`);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id.replace('#', ''));
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Leo Express
            </span>
          </Link>
          
          <div className={`hidden md:flex items-center ${locale === 'ar' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
            <Link href="#services" onClick={(e) => handleClick(e, 'services')} className="text-gray-300 hover:text-white transition duration-300">
              {t('services')}
            </Link>
            <Link href="#features" onClick={(e) => handleClick(e, 'features')} className="text-gray-300 hover:text-white transition duration-300">
              {t('features')}
            </Link>
            <Link href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-gray-300 hover:text-white transition duration-300">
              {t('contact')}
            </Link>
            <div className="flex items-center">
              {locale === 'en' ? (
                <button onClick={() => handleLocaleChange('ar')} className="flex items-center text-gray-300 hover:text-white transition duration-300">
                  <Image src="/flags/eg.svg" alt="العربية" width={24} height={24} className="rounded-sm hover:scale-110 transition duration-300" />
                </button>
              ) : (
                <button onClick={() => handleLocaleChange('en')} className="flex items-center text-gray-300 hover:text-white transition duration-300">
                  <Image src="/flags/gb.svg" alt="English" width={24} height={24} className="rounded-sm hover:scale-110 transition duration-300" />
                </button>
              )}
            </div>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
