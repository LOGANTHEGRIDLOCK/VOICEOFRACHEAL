
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
      // Typing
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenTitles);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-4xl text-xl font-medium text-brown-900 text-center font-Roboto">
          Hi, I am Racheal<span className="thumbs-up">👍🏾</span>
        </p>
        <p className="hero_tag text-brown-800 font-Roboto">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

<div className="flex flex-grow justify-center items-center sm:mt-10 mt-10">
  {/* Ellipse behind */}
  <img
    src={"ellipse.svg"}
    alt="decorative circle"
    className="absolute sm:w-full sm:h-full w-full h-full object-contain z-0"
  />

  {/* Avatar on top */}
  <img
    src={"avatar2.png"}
    alt="avatar"
    className="absolute bottom-23 sm:-bottom-1/3  sm:w-full sm:h-full w-64 h-64 justify-center object-contain z-10"
  
 />
</div>

    </section>
  );
};

export default Hero;
