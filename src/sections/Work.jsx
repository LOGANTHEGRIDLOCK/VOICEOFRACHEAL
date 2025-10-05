import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { videos } from '../constants'; // adjust path if needed

const Work = () => {
  // Repeat videos to fill 3x3 grid
  const fullGrid = [...Array(3)].map((_, i) => videos[i % videos.length]);

  // Refs for each video
  const videoRefs = useRef(fullGrid.map(() => React.createRef()));

  // State to track which video is playing
  const [playingIndex, setPlayingIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const togglePlay = (index) => {
    const currentVideo = videoRefs.current[index].current;
    if (!currentVideo) return;

    // Pause all other videos
    videoRefs.current.forEach((ref, i) => {
      if (ref.current && i !== index) ref.current.pause();
    });

    if (currentVideo.paused) {
      currentVideo.play();
      setPlayingIndex(index);
    } else {
      currentVideo.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="c-space" id="work">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-12">
        <motion.h1
          className="head-text text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WORK
        </motion.h1>
        <motion.p
          className="font-normal text-xl sm:pt-5 pt-5 text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "Here are my recent works"
        </motion.p>
      </div>

      {/* Video Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullGrid.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255, 194, 0, 0.6)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Video */}
            <video
              ref={videoRefs.current[index]}
              src={video.reel}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Overlay Button */}
            <motion.div
              onClick={() => togglePlay(index)}
              className="absolute inset-0 flex items-center justify-center rounded-2xl cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400/80 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.2, rotate: 10, boxShadow: '0 0 20px rgba(255, 194, 0, 0.8)' }}
                transition={{ duration: 0.3 }}
                animate={{
                  opacity:
                    (playingIndex === index && hoveredIndex === index) || playingIndex !== index ? 1 : 0,
                }}
              >
                {playingIndex === index ? (
                  // Pause icon (visible only on hover while playing)
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#032628]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4h3v12H6V4zm5 0h3v12h-3V4z" />
                  </svg>
                ) : (
                  // Play icon (visible when paused)
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#032628]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5l7 4.5-7 4.5v-9z" />
                  </svg>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
