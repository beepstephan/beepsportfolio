'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  const tHome = useTranslations('Home');

  return (
    <footer className="shadow-sm bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 <Link href="/" className="hover:underline">beeps Inc.</Link> {tHome('rightsReserved')}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/beepstephan" target='_blank' className="hover:underline me-4 md:me-6">{t('github')}</a>
          </li>
          <li>
            <a href="https://t.me/adoremyvibe" target='_blank' className="hover:underline me-4 md:me-6">{t('telegram')}</a>
          </li>
          <li>
            <a href="https://discord.gg/FvAruaU2" target='_blank' className="hover:underline me-4 md:me-6">{t('discord')}</a>
          </li>
          <li>
            <Link href="/contacts" className="hover:underline">{t('contact')}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};