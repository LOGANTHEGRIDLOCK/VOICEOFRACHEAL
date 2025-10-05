import React from 'react';
import { motion } from 'framer-motion';
import { about as AboutData } from '../constants'; // adjust path if needed

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // alternate slide direction
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="c-space bg-[#032628] text-white py-16" id="about">
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="head-text text-5xl font-bold">
          ABOUT<span className="text-amber-400"> ME</span>
        </h1>
        <p className="font-normal text-lg sm:text-xl pt-5 max-w-2xl">
          "Hi, I’m Racheal — a versatile <span className="text-amber-400">Voiceover Artist</span> and 
          <span className="text-amber-400"> Social Media Manager</span> passionate about creating compelling audio and digital experiences."
        </p>
      </motion.div>

      {/* About Items */}
      <motion.div
        className="flex flex-col gap-8 sm:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {AboutData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex flex-col items-center sm:flex-row ${
              index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
            } bg-[#043738] p-6 sm:p-8 rounded-2xl shadow-lg`}
            variants={cardVariants}
            custom={index}
          >
            {/* Icon */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mb-4 sm:mb-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="sm:ml-6 sm:mr-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                {item.title.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className={i === 1 ? 'text-amber-400' : 'text-white'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
