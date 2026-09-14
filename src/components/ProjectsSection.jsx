import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import project1Image from "../assets/project1aipowerrecruit.png";
import project3Image from "../assets/project3.png";
import doomslangImage from "../assets/doomslang.png";
import coltaskImage from "../assets/coltask.png";

const projects = [
  {
    id: "01",
    title: "AI-PowerRecruit",
    category: "AI Recruitment Platform",
    image: project1Image,
    desc: "AI-powered recruitment and hiring platform. Features resume analysis, ATS scoring, AI matching, aptitude screening, and interview workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI"],
    link: "https://ai-power-recruit.vercel.app/"
  },
  {
    id: "02",
    title: "Fake News Detection",
    category: "Machine Learning System",
    image: project3Image,
    desc: "A machine learning application where users can paste news articles to verify authenticity, developed and trained in Google Colab.",
    stack: ["ML", "Python", "Streamlit", "Google Colab"],
    link: "https://242848.streamlit.app/"
  },
  {
    id: "03",
    title: "Coltask",
    category: "Workspace Collaboration",
    image: coltaskImage,
    desc: "The all-in-one workspace for high-velocity teams. Plan sprints, manage tasks, and chat in total privacy—without jumping between apps.",
    stack: ["React", "Node.js", "Collaboration", "Privacy"],
    link: "https://coltask.vercel.app/"
  },
  {
    id: "04",
    title: "Doomslang",
    category: "Programming Language",
    image: doomslangImage,
    desc: "An object-oriented programming language designed and developed entirely from scratch. Features custom syntax, parsing, and execution engine.",
    stack: ["Python", "Object-Oriented", "Interpreter", "Compilers"],
    link: "https://doomslang.vercel.app/"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-32 lg:mb-48"
    >
      {/* Project Info */}
      <div className={`flex-1 flex flex-col ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-space text-sm text-white/50">{project.id}</span>
          <div className="h-px w-12 bg-white/20" />
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">{project.category}</span>
        </div>
        
        <h3 className="font-serif-elegant font-bold text-4xl md:text-6xl text-white mb-6">
          {project.title}
        </h3>
        
        <p className="font-sans text-lg text-white/60 font-light leading-relaxed mb-8 max-w-xl">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.stack.map(tech => (
            <span key={tech} className="font-space text-xs tracking-widest text-white/80 border border-white/20 rounded-full px-4 py-2">
              {tech}
            </span>
          ))}
        </div>

        {project.link !== "#" && (
          <div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.2em] uppercase text-black bg-white px-6 py-3 rounded-sm hover:bg-white/80 transition-colors"
            >
              VIEW DEPLOY <span className="text-[10px]">↗</span>
            </a>
          </div>
        )}
      </div>

      {/* Project Image */}
      <div className={`flex-1 w-full relative group cursor-none ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
        <div className="relative w-full aspect-4/3 md:aspect-video overflow-hidden bg-[#111111] rounded-sm">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-100"
          />
          {/* Custom "VIEW" cursor text that shows on hover */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-difference z-10">
             <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center backdrop-blur-sm bg-black/20">
               <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white">VIEW</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="work" className="relative w-full min-h-screen bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-32 border-b border-white/10 pb-8"
        >
          <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tighter text-white">
            SELECTED WORK
          </h2>
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 hidden md:block">
            03 — PROJECTS
          </span>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
