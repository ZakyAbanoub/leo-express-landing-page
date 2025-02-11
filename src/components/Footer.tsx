import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Leo Express</h3>
            <p className="text-gray-400">{t('description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('address')}</li>
              <li>
                <a href="tel:01212085508" className="hover:text-white transition text-xl">
                  {t('phone')}
                </a>
              </li>
              <li>
                <a href="mailto:contact@leoexpress.com" className="hover:text-white transition">
                  contact@leoexpress.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('social')}</h4>
            <div className={`flex ${locale === 'ar' ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <a
                href="https://facebook.com/leoexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/leoexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/leoexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {year} Leo Express. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
