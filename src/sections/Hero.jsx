import React, { useState, useEffect } from 'react';

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

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Text Section */}
      <div className="w-full mx-auto flex flex-col mt-16 sm:mt-28 c-space gap-3 z-20 relative">
        <p className="text-2xl sm:text-4xl font-medium text-brown-900 text-center font-Roboto">
          Hi, I am Racheal <span className="thumbs-up">👍🏾</span>
        </p>
        <p className="hero_tag text-brown-800 font-Roboto text-center ">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Avatar & Ellipse */}
      <div className="flex flex-grow justify-center items-center relative">
        {/* Ellipse behind (fills hero height) */}
        <img
          src={"ellipse.svg"}
          alt="decorative circle"
          className="absolute 
            w-[22rem] h-[22rem] 
            sm:w-[34rem] sm:h-[34rem] 
            lg:w-[46rem] lg:h-[46rem] 
            xl:w-[55rem] xl:h-[55rem] 
            object-contain z-0"
        />

        {/* Avatar on top */}
        <img
          src={"avatar2.png"}
          alt="avatar"
          className="relative 
            w-72 h-72 
            sm:w-96 sm:h-96 
            lg:w-[28rem] lg:h-[28rem] 
            xl:w-[32rem] xl:h-[32rem] 
            object-contain z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
