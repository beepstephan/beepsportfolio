'use client';

import { Typewriter } from 'react-simple-typewriter';

interface TypewriterComponentProps {
  words: string[];
  loop: number | boolean;
  cursorStyle?: string;
  typeSpeed: number;
  deleteSpeed?: number;
  delaySpeed: number;
}

export default function TypewriterComponent({
  words,
  loop,
  cursorStyle = '|',
  typeSpeed,
  deleteSpeed,
  delaySpeed,
}: TypewriterComponentProps) {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor
      cursorStyle={cursorStyle}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
    />
  );
}