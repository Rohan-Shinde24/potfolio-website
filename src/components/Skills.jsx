import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TagCloud from "TagCloud";
import { styles } from "../styles/styles";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const SkillCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group h-full"
    >
      <div className="shape-parallelogram glass-morphism p-6 border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#06B6D4]/50 h-full">
        <div className="w-16 h-16 rounded-xl bg-white/5 p-3 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-white font-bold font-space uppercase tracking-tighter text-sm group-hover:text-[#06B6D4] transition-colors">
            {tech.name}
          </h3>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1">
            {tech.level || "Intermediate"}
          </p>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 via-transparent to-[#06B6D4]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#06B6D4]/10 transition-all pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const cloudRef = useRef(null);
  const categories = ["Frontend", "Backend", "Tools"];

  useEffect(() => {
    const container = ".tagcloud-container";
    const texts = technologies.map(tech => tech.name);
    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    };

    const tc = TagCloud(container, texts, options);

    return () => {
      // TagCloud doesn't have a built-in destroy, but we can clear the container
      const el = document.querySelector(container);
      if (el) el.innerHTML = "";
    };
  }, []);

  const filteredTech = technologies.filter(tech => tech.category === activeTab);

  return (
    <div className="relative">
      <div className="section-watermark">Skills</div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-[#06B6D4] font-mono mb-2">02. Capabilities</p>
        <h2 className="text-5xl font-bold text-white font-space">Technical Arsenal.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* 3D Orbit Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-1 flex items-center justify-center relative min-h-[500px]"
        >
          <div className="absolute inset-0 bg-[#7C3AED]/5 blur-[120px] rounded-full"></div>
          <div className="tagcloud-container font-space font-bold text-[#06B6D4] text-xl opacity-60 hover:opacity-100 transition-opacity cursor-default"></div>
        </motion.div>

        {/* Skills Grid with Tabs */}
        <div className="flex-1 w-full">
          <div className="flex justify-center md:justify-start gap-4 mb-10 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-8 py-3 rounded-xl font-bold font-space uppercase tracking-widest transition-all ${
                  activeTab === cat 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#7C3AED]/20 border border-[#7C3AED]/50 rounded-xl"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredTech.map((tech, index) => (
                <SkillCard key={tech.name} tech={tech} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
