import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(16px)",
        color: "#fff",
        borderRadius: "0px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "none",
        padding: "2rem",
        clipPath: "polygon(0 10%, 10% 0, 100% 0, 100% 100%, 0 100%)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.08)" }}
      date={experience.date}
      iconStyle={{ 
        background: "#040812", 
        boxShadow: "0 0 0 4px #7C3AED, 0 0 15px #7C3AED",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain filter invert opacity-80'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold font-space uppercase tracking-tight'>{experience.title}</h3>
        <p
          className='text-[#06B6D4] text-[16px] font-mono font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-6 list-none space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white/60 text-[14px] pl-1 tracking-wide relative'
          >
            <span className="absolute left-[-15px] top-[6px] w-1.5 h-1.5 bg-[#7C3AED] rounded-full"></span>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <div className="section-watermark">History</div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-[#06B6D4] font-mono mb-2">03. Professional Path</p>
        <h2 className="text-5xl font-bold text-white font-space">Experience.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col relative'>
        {/* Glow effect for the timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C3AED] to-[#06B6D4] opacity-20 blur-sm hidden md:block"></div>
        
        <VerticalTimeline lineColor="rgba(124, 58, 237, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
