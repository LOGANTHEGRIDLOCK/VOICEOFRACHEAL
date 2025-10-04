import React, { useState } from 'react';
import { navLinks } from '../constants'; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-brown-900  top-0 z-50 ">
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Mobile: logo + hamburger */}
        <div className="flex items-center justify-between md:hidden">
          <a
            href="/"
            className={`text-2xl font-bold text-brown-900 transition ${
              isOpen ? 'hidden' : 'block'
            }`}
          >
            VoiceofRacheal
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-brown-800 hover:bg-brown-300 focus:outline-none"
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

        {/* Desktop: logo + links */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <a href="/" className="text-2xl font-bold text-brown-900">
            VoiceofRacheal
          </a>
          <ul className="flex flex-row gap-12 font-medium justify-center md:items-center md:justify-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-brown-800 hover:text-brown-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu links */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4">
            {/* Logo centered above links */}
            <a href="/" className="text-2xl font-bold text-brown-900">
              VoiceofRacheal
            </a>

            <ul className="flex flex-col items-center gap-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-brown-800 hover:text-brown-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
