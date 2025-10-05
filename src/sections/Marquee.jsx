import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const texts = ['VoiceOver Artist', 'Social Media Manager'];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32   pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32  pointer-events-none"></div>

      {/* Scrolling content */}
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      >
        {texts.concat(texts).map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-8 sm:mx-12 text-white font-semibold text-lg sm:text-2xl lg:text-3xl">
              {text}
            </span>

            {/* Gold Star between items */}
            {idx !== texts.concat(texts).length - 1 && (
              <span className="text-yellow-400 text-xl sm:text-3xl lg:text-4xl">★</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
