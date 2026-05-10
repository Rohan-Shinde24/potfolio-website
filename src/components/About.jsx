import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]'>
        {/* Profile Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className='md:col-span-1 md:row-span-2 bento-card p-6 flex flex-col items-center justify-center text-center overflow-hidden relative group'
        >
          <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-all duration-500"></div>
          <div className="w-40 h-40 rounded-full border-4 border-[#915EFF] p-1 shadow-[0_0_20px_rgba(145,94,255,0.2)] mb-4 z-10 bg-white">
            <img
              src='/src/assets/profile.jpeg'
              alt='profile'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <h3 className="text-gray-900 text-[24px] font-bold z-10">Rohan Shinde</h3>
          <p className="text-gray-600 text-[14px] z-10">Software Developer & AI Enthusiast</p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className='md:col-span-2 md:row-span-1 bento-card p-8 flex flex-col justify-center'
        >
          <p className='text-gray-600 text-[17px] leading-[30px]'>
            I'm a skilled software developer with experience in JavaScript, and
            expertise in frameworks like React, Node.js, and MongoDB. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions.
          </p>
        </motion.div>

        {/* Service Cards (shown in motion as requested) */}
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            whileHover={{ scale: 1.05, borderColor: "rgba(145, 94, 255, 0.4)" }}
            className={`bento-card p-6 flex flex-col items-center justify-center text-center ${index === 0 ? 'animate-pulse-glow border-[#915EFF]/30' : ''}`}
          >
            <img
              src={service.icon}
              alt={service.title}
              className='w-12 h-12 object-contain mb-4 filter drop-shadow-md'
            />
            <h3 className='text-gray-900 text-[18px] font-bold'>
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
