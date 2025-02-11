'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GridBackground from './GridBackground';
import CircleBackground from './CircleBackground';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <CircleBackground />
      <motion.div 
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="mb-6 text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span style={{
            background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(45, 212, 191))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t('title')}
          </span>
        </motion.h1>
        
        <motion.p 
          className="mb-8 max-w-2xl text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {t('description')}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="#contact"
            style={{
              background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(45, 212, 191))',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              color: 'white',
              fontWeight: 600,
              transition: 'opacity 0.3s ease'
            }}
            className="hover:opacity-90"
          >
            {t('callToAction.primary')}
          </Link>
          <Link
            href="#services"
            className="rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:border-gray-600 hover:text-white"
          >
            {t('callToAction.secondary')}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
