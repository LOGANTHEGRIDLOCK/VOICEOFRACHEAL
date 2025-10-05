import React, { useState } from 'react';
import { navLinks } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Motion variants for mobile dropdown
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Desktop animation variants
  const desktopLogoVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const desktopLinkVariant = {
    hidden: { opacity: 0, y: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1 }, // stagger effect
    }),
  };

  return (
    <nav className="text-amber-400 top-0 z-50">
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Mobile: logo + hamburger */}
        <div className="flex items-center justify-between md:hidden">
          <motion.a
            href="/"
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 0 : 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            VoiceofRacheal
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop: logo + links with motion */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* Animated logo */}
          <motion.a
            href="/"
            className="text-2xl font-bold text-white"
            variants={desktopLogoVariant}
            initial="hidden"
            animate="visible"
          >
            VoiceofRacheal
          </motion.a>

          {/* Animated links */}
          <ul className="flex flex-row gap-12 font-medium justify-center md:items-center md:justify-center">
  {navLinks.map((link, i) => (
    <motion.li
      key={link.id}
      variants={desktopLinkVariant}
      initial="hidden"
      animate="visible"
      custom={i}
      className="relative"
    >
      <a
        href={link.href}
        className="text-white transition-colors duration-300
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                   after:bg-amber-400 after:transition-all after:duration-300
                   hover:after:w-full"
      >
        {link.name}
      </a>
    </motion.li>
  ))}
</ul>
        </div>

        {/* Mobile menu links with motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 flex flex-col items-center gap-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.a
                href="/"
                className="text-2xl font-bold text-white hover:text-amber-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              >
                VoiceofRacheal
              </motion.a>

              <ul className="flex flex-col items-center gap-4 font-medium">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <a
                      href={link.href}
                      className="text-white hover:text-amber-400 transition"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
