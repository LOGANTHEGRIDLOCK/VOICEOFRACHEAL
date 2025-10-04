import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const texts = ['VoiceOver Artist', 'Social Media Manager'];

  return (
    <div className="relative w-full overflow-hidden bg-brown-50 py-4">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brown-50 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brown-50 pointer-events-none"></div>

      {/* Scrolling content */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      >
        {texts.concat(texts).map((text, idx) => (
          <span
            key={idx}
            className="mx-8 sm:mx-12 text-brown-800 font-semibold text-lg sm:text-2xl lg:text-3xl"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
