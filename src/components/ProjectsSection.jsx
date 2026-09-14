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
    stack: ["ML", "Python", "Streamlit", "Colab"],
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
    stack: ["Python", "Object-Oriented", "Compilers"],
    link: "https://doomslang.vercel.app/"
  }
];

const ProjectCard = ({ project, index, progress, total }) => {
  const angleSpread = 35; 
  const totalRotation = (total - 1) * angleSpread; 
  
  // Carousel rotation happens from [0.25, 0.75].
  // By stopping at 0.75, the final project (Doomslang) stays perfectly 
  // centered and visible for a long time.
  const rotateY = useTransform(
    progress,
    [0.25, 0.75],
    [index * angleSpread, (index * angleSpread) - totalRotation]
  );

  const opacity = useTransform(
    rotateY,
    [-60, -25, 0, 25, 60],
    [0, 0.4, 1, 0.4, 0]
  );

  const scale = useTransform(
    rotateY,
    [-45, 0, 45],
    [0.85, 1, 0.85]
  );

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      style={{
        rotateY,
        opacity,
        scale,
        transformOrigin: "center center -1500px",
        backfaceVisibility: "hidden"
      }}
    >
      <div className="w-full h-48 md:h-72 lg:h-80 mb-6 overflow-hidden rounded-md shrink-0 bg-black">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
           <div className="flex justify-between items-center mb-4">
             <span className="font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/50">{project.category}</span>
             <span className="font-space text-xs text-white/40">{project.id}</span>
           </div>
           <h3 className="font-serif-elegant font-bold text-3xl md:text-4xl text-white mb-4">{project.title}</h3>
           <p className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed mb-6">{project.desc}</p>
        </div>
        
        <div className="flex justify-between items-end gap-4">
           <div className="flex flex-wrap gap-2 max-w-[75%]">
             {project.stack.map(tech => (
               <span key={tech} className="font-space text-[10px] tracking-widest text-white/80 border border-white/20 rounded-full px-3 py-1 bg-white/5">
                 {tech}
               </span>
             ))}
           </div>
           {project.link !== "#" && (
             <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="shrink-0 bg-white text-black font-sans text-[10px] font-bold tracking-widest px-6 py-3 rounded-sm hover:bg-white/80 transition-colors"
             >
               VIEW
             </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Massive Zoom-in for the "SELECTED WORK" Text
  const textScale = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.15, 0.2, 0.23, 0.25], 
    [1, 1, 6, 20, 60, 150]
  );
  
  const textDisplay = useTransform(scrollYProgress, (val) => val > 0.25 ? "none" : "flex");

  // Carousel phase: fades in early, stays visible, then fades out at the very end before the next section
  const carouselOpacity = useTransform(
    scrollYProgress, 
    [0.05, 0.15, 0.95, 1], 
    [0, 1, 1, 0]
  );
  
  const progressBarScale = useTransform(scrollYProgress, [0.25, 1], [0, 1]);

  return (
    <section id="work" ref={containerRef} className="relative w-full h-[500vh] border-t border-white/5" style={{ backgroundColor: '#000000' }}>
      
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[2000px] px-6" style={{ backgroundColor: '#000000' }}>
        
        {/* Fly-Through Text */}
        <motion.div 
          className="absolute inset-0 items-center justify-center z-50 pointer-events-none"
          style={{ 
            scale: textScale, 
            display: textDisplay,
            transformOrigin: "center center"
          }}
        >
          {/* We mathematically center the 'O' so the camera flies perfectly through it */}
          <div className="relative font-space text-7xl md:text-[9rem] lg:text-[12rem] font-bold tracking-tighter text-white leading-none">
            {/* Invisible 'O' establishes the exact center of the screen */}
            <span className="opacity-0">O</span>
            
            {/* Visible 'O' placed perfectly over the invisible one */}
            <span className="absolute left-0 top-0">O</span>
            
            {/* 'W' is anchored to the left of 'O' */}
            <span className="absolute right-full top-0">W</span>
            
            {/* 'RK' is anchored to the right of 'O' */}
            <span className="absolute left-full top-0">RK</span>
            
            {/* 'SELECTED' is anchored to the top of 'O', centered horizontally */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 md:pb-6">SELECTED</span>
          </div>
        </motion.div>

        {/* CSS 3D Carousel Container */}
        <motion.div 
          className="relative w-full max-w-sm md:max-w-xl lg:max-w-2xl h-[65vh] lg:h-[75vh]"
          style={{ 
             transformStyle: "preserve-3d", 
             opacity: carouselOpacity 
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              progress={scrollYProgress}
              total={projects.length}
            />
          ))}
        </motion.div>
        
        {/* Scroll Progress Bar at bottom */}
        <motion.div 
           className="absolute bottom-12 w-48 h-px bg-white/20"
           style={{ opacity: carouselOpacity }}
        >
           <motion.div 
             className="h-full bg-white"
             style={{ scaleX: progressBarScale, transformOrigin: "left center" }}
           />
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
