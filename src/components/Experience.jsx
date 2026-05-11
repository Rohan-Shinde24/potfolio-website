import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-16 pb-20 group"
    >
      {/* Timeline Connector */}
      <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-border)] to-transparent group-last:bg-none" />
      
      {/* Timeline Node */}
      <div className="absolute left-0 top-0 z-10 flex items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg)] border-2 border-[var(--color-primary)] shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
           <img 
             src={experience.icon} 
             alt={experience.company_name} 
             className="w-6 h-6 object-contain"
           />
        </div>
      </div>

      <div className="pro-card relative !p-10 group-hover:border-[var(--color-primary)] transition-all duration-500 overflow-visible">
        {/* Glow Accent */}
        <div className="absolute -top-[1px] -left-[1px] w-32 h-[1px] bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
        <div className="absolute -top-[1px] -left-[1px] w-[1px] h-32 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-primary)] mb-3 block" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
               {experience.company_name}
             </span>
             <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-text)] tracking-tight mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
               {experience.title}
             </h3>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  {experience.date}
                </span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-6">
          {experience.points.map((point, idx) => (
            <div key={idx} className="flex gap-4 group/item">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-border)] shrink-0 transition-all duration-300 group-hover/item:bg-[var(--color-primary)] group-hover/item:scale-125" />
              <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[2px] w-12 bg-[var(--color-primary)]" />
          <span className="text-[var(--color-primary)] font-bold text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            04 / Career Path
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Professional <span className="text-[var(--color-text-muted)]">Timeline.</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");

