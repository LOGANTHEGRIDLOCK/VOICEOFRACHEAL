import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact as contactData } from "../constants";

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="c-space bg-[#032628] text-white py-16" id="contact">
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="head-text text-5xl font-bold">
          Contact<span className="text-amber-400"> ME</span>
        </h1>
        <p className="font-normal text-lg sm:text-xl pt-5 max-w-2xl">
          "Am <span className="text-amber-400">available</span> on these various{" "}
          <span className="text-amber-400">platforms</span>"
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {contactData.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col sm:flex-row bg-[#043738] rounded-2xl shadow-lg p-6 sm:p-8 items-center gap-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon + Info */}
            <div className="flex flex-col items-center sm:items-start relative w-full">
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Click-to-copy Info */}
              <div
                onClick={() => handleCopy(item.info, item.id)}
                className="relative cursor-pointer group"
              >
                <p className="text-white text-lg sm:text-xl font-medium group-hover:text-amber-400 transition-colors duration-300 break-all">
                  {item.info}
                </p>

                {/* Tooltip */}
                <AnimatePresence>
                  {copiedId === item.id && (
                    <motion.span
                      key="tooltip"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -25, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 bg-amber-400 text-[#032628] text-xs font-semibold px-2 py-1 rounded-md shadow-md whitespace-nowrap"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Title + Description */}
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-amber-400 mb-2">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-white/80 text-sm sm:text-balance">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
