import React from 'react';
import { motion } from 'framer-motion';
import { contact as contactData } from '../constants';

const Contact = () => {
  return (
    <section className="c-space bg-[#032628] text-white py-16" id="contact">
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="head-text text-5xl font-bold">
          Contact<span className="text-amber-400"> ME</span>
        </h1>
        <p className="font-normal text-lg sm:text-xl pt-5 max-w-2xl">
          "Am <span className='text-amber-400'>available</span> on these various <span className='text-amber-400'>platforms</span>"
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contactData.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col sm:flex-row bg-[#043738] rounded-2xl shadow-lg p-6 sm:p-8 items-center gap-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon + Info Card */}
            <div className="flex flex-col items-center sm:items-start relative">
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
              <p className="text-white text-lg sm:text-xl font-medium">{item.info}</p>
            </div>

            {/* Title + Description Card */}
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-amber-400 mb-2">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-white/80 text-sm sm:text-balance">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
