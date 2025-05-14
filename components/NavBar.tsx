'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('NavBar');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    const locales = routing.locales.join('|');
    const cleanPathname = pathname.replace(new RegExp(`^/(${locales})(/|$)`), '/');
    router.push(cleanPathname, { locale: newLocale });
  };

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-3xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 relative">
        <div className="flex-shrink-0 pl-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/beepslogo.png" alt="beeps Logo" width={32} height={32} />
            <span className="text-2xl font-semibold text-white">beeps</span>
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ul className="flex space-x-8 font-medium">
            <li><Link href="/" className={pathname === '/' ? "text-blue-500" : "text-white hover:text-blue-500"}>{t('home')}</Link></li>
            <li><Link href="/about" className={pathname === '/about' ? "text-blue-500" : "text-white hover:text-blue-500"}>{t('about')}</Link></li>
            <li><Link href="/projects" className={pathname === '/projects' ? "text-blue-500" : "text-white hover:text-blue-500"}>{t('projects')}</Link></li>
            <li><Link href="/contacts" className={pathname === '/contact' ? "text-blue-500" : "text-white hover:text-blue-500"}>{t('contact')}</Link></li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-2 pr-2">
          <button 
          onClick={() => handleLanguageChange('en')} 
          className={`p-1 rounded transition ${currentLocale === 'en' ? 'ring-2 ring-blue-500' : 'hover:ring-2 ring-blue-500'}`}>
            <Image src="/flags/usa.png" alt="EN" width={24} height={24} />
          </button>
          <button 
          onClick={() => handleLanguageChange('uk')} 
          className={`p-1 rounded transition ${currentLocale === 'uk' ? 'ring-2 ring-blue-500' : 'hover:ring-2 ring-blue-500'}`}>
            <Image src="/flags/ukraine.png" alt="UA" width={24} height={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col items-stretch text-center font-medium border-t border-gray-700 divide-y divide-gray-700">
            <li className="w-full flex items-center justify-center min-h-[48px]"><Link href="/" className="block text-white hover:text-blue-500">{t('home')}</Link></li>
            <li className="w-full flex items-center justify-center min-h-[48px]"><Link href="/about" className="block text-white hover:text-blue-500">{t('about')}</Link></li>
            <li className="w-full flex items-center justify-center min-h-[48px]"><Link href="/projects" className="block text-white hover:text-blue-500">{t('projects')}</Link></li>
            <li className="w-full flex items-center justify-center min-h-[48px]"><Link href="/contact" className="block text-white hover:text-blue-500">{t('contact')}</Link></li>
            <li className="w-full flex justify-center gap-2 pt-4">
              <button onClick={() => handleLanguageChange('en')} className="p-1 rounded hover:ring-2 ring-blue-500 transition">
                <Image src="/flags/usa.png" alt="EN" width={24} height={24} />
              </button>
              <button onClick={() => handleLanguageChange('uk')} className="p-1 rounded hover:ring-2 ring-blue-500 transition">
                <Image src="/flags/ukraine.png" alt="UA" width={24} height={24} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};