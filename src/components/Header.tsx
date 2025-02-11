'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuItems = [
    { href: '#services', label: t('services') },
    { href: '#features', label: t('features') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-sm bg-gray-900/95' : 'bg-transparent'}`}>
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-[200px] h-[100px]">
            <Image
              src="/images/logo.svg"
              alt="Leo Express"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex rtl:space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-300 transition md:hidden hover:text-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-gray-900/60 md:hidden"
          onClick={closeMenu}
          style={{ zIndex: 40 }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 bottom-0 w-[80%] bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen 
            ? 'translate-x-0' 
            : isRTL 
              ? 'translate-x-full'
              : '-translate-x-full'
        } ${isRTL ? 'left-auto right-0' : 'left-0 right-auto'}`}
        style={{ zIndex: 50 }}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-gray-300 hover:text-white transition p-2 hover:bg-gray-800 rounded-full`}
          aria-label="Close menu"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>

        <div className="flex flex-col p-8 h-full">
          {/* Logo */}
          <Link href="/" className="relative mb-12 w-[200px] h-[100px]" onClick={closeMenu}>
            <Image
              src="/images/logo.svg"
              alt="Leo Express"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Menu Items */}
          <div className="flex flex-col space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl text-gray-300 transition hover:text-white"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-8 mt-auto">
              <LanguageSwitcher className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
