import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-wrap justify-center gap-10 mt-14'>
        {technologies.map((technology) => (
          <div 
            className='flex flex-col items-center justify-center cursor-pointer group' 
            key={technology.name}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 bento-card flex items-center justify-center p-5 group-hover:border-purple-500 group-hover:shadow-lg transition-all bg-white"
            >
              <img 
                src={technology.icon} 
                alt={technology.name} 
                className='w-14 h-14 object-contain filter drop-shadow-sm' 
              />
            </motion.div>
            <p className='text-gray-600 group-hover:text-purple-600 mt-4 text-[16px] font-semibold transition-all'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
