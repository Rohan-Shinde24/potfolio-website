import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/8 glass-morphism"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-[#040812]/40 to-transparent" />

        {/* Hover overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-[#040812]/70 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass-morphism border border-white/20 rounded-xl text-white font-bold text-sm hover:bg-white/10 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-violet-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white text-xl font-bold font-space group-hover:text-[#06B6D4] transition-colors">
            {project.name}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            className="text-white/30 group-hover:text-[#7C3AED] transition-colors"
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[11px] font-mono uppercase px-3 py-1 rounded-full border"
              style={{ color: tag.color, borderColor: `${tag.color}30`, backgroundColor: `${tag.color}10` }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#7C3AED]/30 transition-all pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="relative">
      <div className="section-watermark">Works</div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6"
      >
        <div>
          <p className="text-[#06B6D4] font-mono mb-2 tracking-widest text-sm uppercase">04. Portfolio</p>
          <h2 className="text-5xl font-bold text-white font-space">Featured Projects.</h2>
          <p className="text-white/40 mt-3 max-w-lg text-sm leading-relaxed">
            A selection of things I've built — hover any card to see links.
          </p>
        </div>

        <a
          href="https://github.com/Rohan-Shinde24"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 glass-morphism border border-white/10 rounded-xl text-white/70 hover:text-white hover:border-[#7C3AED]/40 transition-all font-mono text-sm shrink-0"
        >
          <Github size={16} />
          View All on GitHub
          <ArrowUpRight size={14} className="opacity-50" />
        </a>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <p className="text-white/30 font-mono text-sm mb-4">More coming soon...</p>
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
