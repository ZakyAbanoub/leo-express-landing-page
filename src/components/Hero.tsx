'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import GridBackground from './GridBackground';
import CircleBackground from './CircleBackground';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          {t('description')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 font-semibold text-white transition duration-300 hover:from-blue-600 hover:to-teal-600"
          >
            {t('callToAction.primary')}
          </Link>
          <Link
            href="#services"
            className="rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:border-gray-600 hover:text-white"
          >
            {t('callToAction.secondary')}
          </Link>
        </div>
      </div>
    </div>
  );
}
