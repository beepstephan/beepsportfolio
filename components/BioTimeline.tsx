'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

type Color = 'pink' | 'blue' | 'green' | 'red';

const tailwindColorMap: Record<string, string> = {
  'bg-pink-500': '#ec4899',
  'bg-sky-500': '#38bdf8',
  'bg-green-600': '#01943a',
  'bg-red-600': '#dc2626',
};

function getTailwindColor(className: string): string {
  return tailwindColorMap[className] || '#ffffff';
}

const colorMap: Record<Color, {
  border: string;
  text: string;
  bg: string;
  flicker: string;
}> = {
  pink: {
    border: 'border-pink-500',
    text: 'text-pink-400',
    bg: 'bg-pink-500',
    flicker: 'flicker-pink',
  },
  blue: {
    border: 'border-sky-500',
    text: 'text-sky-400',
    bg: 'bg-sky-500',
    flicker: 'flicker-blue',
  },
  green: {
    border: 'border-green-600',
    text: 'text-green-400',
    bg: 'bg-green-600',
    flicker: 'flicker-green',
  },
  red: {
    border: 'border-red-600',
    text: 'text-red-400',
    bg: 'bg-red-600',
    flicker: 'flicker-red',
  }
};

export const BioTimeline = () => {
  const t = useTranslations('BioTimeline');

  const events = [
    { year: t('event1Year'), color: 'pink' as Color, text: t('event1Text') },
    { year: t('event2Year'), color: 'blue' as Color, text: t('event2Text') },
    { year: t('event3Year'), color: 'green' as Color, text: t('event3Text') },
    { year: t('event4Year'), color: 'red' as Color, text: t('event4Text') },
    { year: t('event5Year'), color: 'pink' as Color, text: t('event5Text') },
    { year: t('event6Year'), color: 'blue' as Color, text: t('event6Text') },
    { year: t('event7Year'), color: 'green' as Color, text: t('event7Text') },
    { year: t('event8Year'), color: 'red' as Color, text: t('event8Text') },
    { year: t('event9Year'), color: 'pink' as Color, text: t('event9Text') },
    { year: t('event10Year'), color: 'green' as Color, text: t('event10Text') },
    { year: t('event11Year'), color: 'blue' as Color, text: t('event11Text') },
    { year: t('event12Year'), color: 'red' as Color, text: t('event12Text') },
  ];

  return (
    <div className="relative flex flex-col items-center my-6">
      {events.map((event, index) => {
        const color = colorMap[event.color];
        return (
          <React.Fragment key={index}>
            <div className={`relative bg-black/70 ${color.flicker} ${color.border} rounded-xl px-6 py-4 w-80 sm:w-96 text-white text-center z-20`}>
              <h3 className={`${color.text} font-bold text-lg mb-2`}>{event.year}</h3>
              <p className="text-sm">{event.text}</p>
            </div>

            {index < events.length - 1 && (() => {
              const prevColor = colorMap[event.color];
              const nextColor = colorMap[events[index + 1].color];

              return (
                <div className="flex flex-col items-center z-10">
                  <div className={`w-4 h-4 rounded-full ${prevColor.bg} border-2 border-[#290335] z-10`} />
                  
                  <div
                    className="w-1 h-6"
                    style={{
                      background: `linear-gradient(to bottom, ${getTailwindColor(prevColor.bg)} 0%, ${getTailwindColor(nextColor.bg)} 100%)`,
                    }}
                  />

                  <div className={`w-4 h-4 rounded-full ${nextColor.bg} border-2 border-[#290335] z-10`} />
                </div>
              );
            })()}
          </React.Fragment>
        );
      })}
    </div>
  );
};