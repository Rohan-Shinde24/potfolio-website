import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="pro-card h-full flex flex-col p-0 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-standard duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-standard" />
          
          <div className="absolute top-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-standard">
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-[var(--color-primary)] hover:text-white transition-standard"
            >
              <Github size={18} />
            </a>
            <a
              href={project.live_link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-[var(--color-primary)] hover:text-white transition-standard"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[var(--color-text)]">
              {project.name}
            </h3>
            <ArrowUpRight className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-standard" size={20} />
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          02 / Projects
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Selected Works & <br />
          <span className="text-[var(--color-text-muted)]">Digital Creations.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 flex justify-center"
      >
        <a
          href="https://github.com/Rohan-Shinde24"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] rounded-full font-semibold transition-standard hover:bg-[var(--color-border)]"
        >
          <Github size={20} />
          <span>View All on GitHub</span>
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");

