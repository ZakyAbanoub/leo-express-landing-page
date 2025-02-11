'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`transition duration-300 ${
          locale === 'en' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
        }`}
        aria-label="Switch to English"
      >
        <Image
          src="/flags/gb.svg"
          alt="English"
          width={32}
          height={32}
          className="rounded-lg shadow-lg"
        />
      </button>

      <button
        onClick={() => handleLocaleChange('ar')}
        className={`transition duration-300 ${
          locale === 'ar' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
        }`}
        aria-label="التبديل إلى العربية"
      >
        <Image
          src="/flags/eg.svg"
          alt="العربية"
          width={32}
          height={32}
          className="rounded-lg shadow-lg"
        />
      </button>
    </div>
  );
}
