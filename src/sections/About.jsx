import React from 'react';
import { about as AboutData } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="c-space" id="about">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-12">
        <motion.h1
          className="head-text text-5xl font-bold text-brown-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          className="font-normal text-brown-800 text-xl sm:pt-5 pt-5 text-center sm:text-left text-balance max-w-3xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "Hi, I’m Racheal - versatile Voiceover Artist and Social Media Manager passionate about creating compelling audio and digital experiences."
        </motion.p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8 sm:gap-12">
        {AboutData.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col items-center sm:flex-row ${
              index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
            } bg-brown-50 p-5 sm:p-8 rounded-lg shadow-md`}
          >
            {/* Icon container */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mb-4 sm:mb-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text container */}
            <div className="sm:ml-6 sm:mr-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-brown-800 mb-2">
                {item.title}
              </h2>
              <p className="text-brown-700 text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
