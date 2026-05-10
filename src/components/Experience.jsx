import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="relative pl-12 pb-16 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--color-border)] last:hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-primary)] z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="pro-card"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text)]">{experience.title}</h3>
            <p className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider mt-1">{experience.company_name}</p>
          </div>
          <span className="px-4 py-1.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full text-[var(--color-text-muted)] text-xs font-bold uppercase tracking-widest">
            {experience.date}
          </span>
        </div>

        <ul className="flex flex-col gap-4">
          {experience.points.map((point, idx) => (
            <li key={idx} className="flex gap-4 text-[var(--color-text-muted)] leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--color-border)] shrink-0" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          04 / Experience
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          My Professional <br />
          <span className="text-[var(--color-text-muted)]">Journey.</span>
        </motion.h2>
      </div>

      <div className="max-w-4xl">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");

