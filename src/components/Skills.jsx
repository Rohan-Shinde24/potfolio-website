import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const SkillCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="pro-card flex items-center gap-4 !p-4"
    >
      <div 
        className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center p-2 shrink-0"
        style={{ 
          backgroundColor: "var(--color-bg)" 
        }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain"
          style={{ 
            transform: tech.name === "Streamlit" ? "scale(1.8)" : "none",
            filter: (tech.name === "GitHub" || tech.name === "Express JS") ? "brightness(0) invert(1)" : "none"
          }}
        />
      </div>
      <div>
        <h3 className="text-sm font-bold text-[var(--color-text)] tracking-tight">{tech.name}</h3>
        <p className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">{tech.level || "Intermediate"}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const categories = ["Frontend", "Backend", "Tools"];

  const filteredTech = technologies.filter(tech => tech.category === activeTab);

  return (
    <div className="w-full">
      <div className="flex flex-col mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          05 / Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Technical <br />
          <span className="text-[var(--color-text-muted)]">Expertise.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-12">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-[var(--color-border)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative pb-4 text-sm font-bold uppercase tracking-widest transition-standard ${
                activeTab === cat 
                  ? "text-[var(--color-primary)]" 
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div 
                  layoutId="activeSkillTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-[300px]">
          <AnimatePresence mode="wait">
            {filteredTech.map((tech, index) => (
              <SkillCard key={tech.name} tech={tech} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");

