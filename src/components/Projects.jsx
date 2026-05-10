import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { Code } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 mt-20`}>
      {/* Device Mockup */}
      <motion.div 
        variants={fadeIn(isEven ? "right" : "left", "spring", index * 0.5, 0.75)}
        className='relative flex-1 group'
      >
        {/* Laptop Frame Mockup (Professional Gray/Silver) */}
        <div className='relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] shadow-2xl'>
          <div className='rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white'>
            <img src={image} className='h-[156px] md:h-[278px] w-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500' alt={name} />
          </div>
        </div>
        <div className='relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px] shadow-lg'>
          <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-700'></div>
        </div>

        {/* Floating Phone Mockup */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: -2 }}
          className="absolute -bottom-10 -right-5 md:-right-10 w-[80px] h-[160px] md:w-[120px] md:h-[240px] border-gray-900 bg-gray-900 border-[4px] rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 hidden sm:block overflow-hidden"
        >
          <img src={image} className="w-full h-full object-cover" alt="" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-gray-900 rounded-b-lg"></div>
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <motion.div 
        variants={fadeIn(isEven ? "left" : "right", "spring", index * 0.5, 0.75)}
        className='flex-1'
      >
        <h3 className='text-gray-900 font-bold text-[32px] mb-4'>{name}</h3>
        <p className='text-gray-600 text-[18px] leading-[30px] mb-8'>{description}</p>

        <div className='flex flex-wrap gap-3 mb-8'>
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`px-4 py-1 rounded-full text-[14px] border border-gray-200 ${tag.color.replace('text-gradient', '')} bg-gray-50 font-medium`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <button 
          onClick={() => window.open(source_code_link, "_blank")}
          className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#804dee] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-1"
        >
          <Code size={20} />
          View Source Code
        </button>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className='flex flex-col gap-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
