import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({ project, index, active, total }) => {
  const [flipped, setFlipped] = useState(false);

  const zIndex = active ? 50 : 50 - Math.abs(index - active);
  const scale = active ? 1 : 1 - Math.abs(index - active) * 0.1;
  const rotateY = (index - active) * 20;
  const x = (index - active) * 150;

  return (
    <motion.div
      initial={false}
      animate={{
        x,
        scale,
        rotateY,
        zIndex,
        opacity: Math.abs(index - active) > 2 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`absolute w-[320px] sm:w-[450px] aspect-[4/3] cursor-pointer preserve-3d`}
      onClick={() => active === index && setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden shape-diagonal-cut glass-morphism border border-white/10 overflow-hidden shadow-2xl">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-bold font-space uppercase tracking-tighter">{project.name}</h3>
            <div className="flex gap-2 mt-3">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag.name} className="text-[10px] uppercase font-mono px-2 py-1 bg-white/10 rounded-md text-white/60">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Flip Indicator */}
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass-morphism flex items-center justify-center border border-white/20 animate-pulse">
            <span className="text-white/40 text-[10px] font-mono">FLIP</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] shape-diagonal-cut glass-morphism border border-white/10 bg-black/40 p-10 flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-[#06B6D4] text-3xl font-bold font-space uppercase mb-4">{project.name}</h3>
            <p className="text-white/70 text-base leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map(tag => (
                <span key={tag.name} className="text-xs font-mono px-3 py-1 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-white">
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={project.source_code_link} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-3 glass-morphism border border-white/10 rounded-xl flex items-center justify-center gap-2 text-white hover:bg-white/5 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href={project.source_code_link} // Using the same link if demo is not available in constants
              target="_blank" 
              rel="noreferrer"
              className="flex-1 py-3 bg-[#7C3AED] rounded-xl flex items-center justify-center gap-2 text-white shadow-lg shadow-violet-500/20 hover:bg-[#6D28D9] transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  
  const techFilters = ["All", "React", "Node", "MongoDB", "Tailwind"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.some(t => t.name.toLowerCase().includes(filter.toLowerCase())));

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  return (
    <div className="relative">
      <div className="section-watermark">Works</div>

      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-[#06B6D4] font-mono mb-2">04. Portfolio</p>
          <h2 className="text-5xl font-bold text-white font-space">Featured Projects.</h2>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {techFilters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-space uppercase transition-all ${
                filter === f 
                  ? "bg-[#06B6D4] text-black" 
                  : "bg-white/5 text-white/40 border border-white/10 hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Deck Container */}
      <div className="relative h-[500px] flex items-center justify-center perspective-[2000px] overflow-hidden sm:overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={index} 
              active={activeIndex}
              total={filteredProjects.length}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8 z-[100]">
          <button 
            onClick={prevProject}
            className="w-12 h-12 rounded-full glass-morphism border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {filteredProjects.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#06B6D4]" : "bg-white/20"}`}
              />
            ))}
          </div>

          <button 
            onClick={nextProject}
            className="w-12 h-12 rounded-full glass-morphism border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
