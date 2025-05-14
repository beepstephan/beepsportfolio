'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('Accordion');

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const accordionData = [
    {
      title: t('whatIsBeeps'),
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {t('whatIsBeepsContent')}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {t('whatIsBeepsGuide')}{' '}
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {t('whatIsBeepsGuideLink')}
            </Link>{' '}
            {t('whatIsBeepsGuideEnd')}
          </p>
        </>
      ),
    },
    {
      title: t('taskComplexity'),
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {t('taskComplexityContent')}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {t('taskComplexityGuide')}{' '}
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {t('taskComplexityGuideLink')}
            </Link>{' '}
            {t('taskComplexityGuideEnd')}
          </p>
        </>
      ),
    },
    {
      title: t('teamComposition'),
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {t('teamCompositionContent1')}
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {t('teamCompositionContent2')}
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {t('teamCompositionContent3')}
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <Link
                href="https://github.com/beepstephan"
                target="_blank"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Contact Page
              </Link>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div id="accordion-flush">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <h2 id={`accordion-flush-heading-${index}`}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={isOpen}
                aria-controls={`accordion-flush-body-${index}`}
              >
                <span>{item.title}</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${isOpen ? '' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-flush-body-${index}`}
              className={`${isOpen ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-flush-heading-${index}`}
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};