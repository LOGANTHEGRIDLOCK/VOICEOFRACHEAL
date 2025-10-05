import React from "react";

const Footer = () => {
  // Clipboard copy handler
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  return (
    <footer className="bg-[#032628]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Logo / Name */}
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/voiceofrachael/"
              className="flex items-center"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-amber-400">
                VoiceofRacheal
              </span>
            </a>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto border-amber-400 lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            <span className="text-amber-400">© 2025 </span>
            <a
              href="https://www.instagram.com/voiceofrachael/"
              className="hover:underline"
            >
              VoiceofRacheal
            </a>
            . All Rights Reserved.
          </span>

          {/* Icons Section */}
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/voiceofrachael/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            {/* WhatsApp Copy */}
            <button
              onClick={() => handleCopy("07041692447")}
              className="text-white hover:text-amber-400 transition duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.67-1.611-.917-2.204-.242-.579-.487-.5-.67-.51-.173-.009-.372-.011-.57-.011a1.096 1.096 0 0 0-.796.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.227 1.358.195 1.87.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.288.173-1.411-.074-.123-.272-.198-.57-.347ZM12.012 2C6.486 2 2 6.486 2 12.012c0 2.123.554 4.191 1.604 6.005L2 22l4.064-1.572A9.925 9.925 0 0 0 12.012 22C17.538 22 22 17.514 22 12.012S17.538 2 12.012 2Z" />
              </svg>
              <span className="sr-only">Copy WhatsApp</span>
            </button>

            {/* Gmail Copy */}
            <button
              onClick={() => handleCopy("rachaeljesuloluwa@gmail.com")}
              className="text-white hover:text-amber-400 transition duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 13.065 1.5 6.75v10.5A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V6.75L12 13.065Zm9-8.565H3l9 5.625 9-5.625Z" />
              </svg>
              <span className="sr-only">Copy Gmail</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
