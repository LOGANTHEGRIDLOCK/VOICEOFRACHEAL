import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titles = ['A VoiceOver Artist', 'Social Media Manager'];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delayBetweenTitles = 1500;

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = titles[currentTitleIndex];

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenTitles);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  // Floating shapes
  const shapes = [
    { id: 1, content: '⭐', size: 'text-xl sm:text-2xl', top: '10%', left: '5%', duration: 6 },
    { id: 2, content: '✨', size: 'text-lg sm:text-xl', top: '30%', left: '80%', duration: 8 },
    { id: 3, content: '⭐', size: 'text-2xl sm:text-3xl', top: '60%', left: '20%', duration: 7 },
    { id: 4, content: '🌟', size: 'text-xl sm:text-2xl', top: '75%', left: '70%', duration: 9 },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#032628]">

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size}`}
          style={{ top: shape.top, left: shape.left }}
          animate={{ y: ['0%', '20%', '0%'] }}
          transition={{ repeat: Infinity, duration: shape.duration, ease: 'easeInOut' }}
        >
          <span className="text-yellow-400">{shape.content}</span>
        </motion.div>
      ))}

      {/* Top Mobile Emoji */}
      <motion.span
        className="text-7xl sm:text-[6rem] mb-12 z-20"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        📱
      </motion.span>

      {/* Typing Text */}
      <div className="flex flex-col items-center gap-4 text-center z-20">
        <p className="text-3xl sm:text-5xl font-medium text-white font-Roboto">
          Hi, I am <span className="text-amber-400">Racheal</span> <span className="thumbs-up">👍🏾</span>
        </p>
        <p className="text-amber-400 sm:text-7xl text-6xl font-Roboto">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Hire Me Button at bottom */}
      <motion.button
        className="mt-16 px-8 py-4 border-2 border-amber-400 rounded-full text-[#032628] bg-amber-400 font-semibold text-lg sm:text-xl 
                   shadow-[2px_2px_0px_0px_#fff] font-handdrawn z-20"
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        Hire Me
      </motion.button>
    </section>
  );
};

export default Hero;
