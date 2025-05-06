import React, { useState } from 'react';

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

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
                  className={`w-3 h-3 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

const accordionData = [
  {
    title: 'Що таке beeps Inc.?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to{' '}
          <a
            href="/docs/getting-started/introduction/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            get started
          </a>{' '}
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    title: 'Завдання якої складності може виконати beeps Inc.?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the{' '}
          <a
            href="https://flowbite.com/figma/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Figma design system
          </a>{' '}
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </>
    ),
  },
  {
    title: 'Який склад персоналу в beeps Inc.?',
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI.
        </p>
        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a
              href="https://flowbite.com/pro/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Flowbite Pro
            </a>
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
];
