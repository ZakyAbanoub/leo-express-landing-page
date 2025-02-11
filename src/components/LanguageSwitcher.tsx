'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const { Link, usePathname } = createSharedPathnamesNavigation({ locales: ['en', 'ar'] });

export default function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Salva la lingua nel local storage
    localStorage.setItem('NEXT_LOCALE', newLocale);
    // Naviga alla nuova lingua
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse">
      <button
        onClick={() => handleLocaleChange('en')}
        className={`text-sm ${locale === 'en' ? 'text-blue-500' : 'text-gray-400 hover:text-white'} transition`}
      >
        {t('english')}
      </button>
      <button
        onClick={() => handleLocaleChange('ar')}
        className={`text-sm ${locale === 'ar' ? 'text-blue-500' : 'text-gray-400 hover:text-white'} transition`}
      >
        {t('arabic')}
      </button>
    </div>
  );
}
