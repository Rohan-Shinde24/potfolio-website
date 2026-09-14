import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const skills = [
  { name: "REACT", size: "text-4xl md:text-6xl", xOffset: -40, yOffset: 10, isPill: false },
  { name: "NEXT.JS", size: "text-3xl md:text-5xl", xOffset: 20, yOffset: -20, isPill: true },
  { name: "TYPESCRIPT", size: "text-2xl md:text-4xl", xOffset: -20, yOffset: 30, isPill: false },
  { name: "NODE.JS", size: "text-4xl md:text-5xl", xOffset: 30, yOffset: 5, isPill: false },
  { name: "EXPRESS", size: "text-xl md:text-3xl", xOffset: -50, yOffset: -15, isPill: true },
  { name: "MONGODB", size: "text-3xl md:text-5xl", xOffset: 15, yOffset: 25, isPill: false },
  { name: "POSTGRESQL", size: "text-2xl md:text-4xl", xOffset: -30, yOffset: -10, isPill: false },
  { name: "AI / LLM", size: "text-5xl md:text-6xl", xOffset: 10, yOffset: -5, isPill: true },
  { name: "TAILWIND", size: "text-2xl md:text-3xl", xOffset: 40, yOffset: 15, isPill: false },
  { name: "DOCKER", size: "text-xl md:text-2xl", xOffset: -25, yOffset: -25, isPill: false },
  { name: "GIT", size: "text-3xl md:text-4xl", xOffset: -10, yOffset: 20, isPill: true },
  { name: "GENERATIVE AI", size: "text-4xl md:text-5xl", xOffset: 50, yOffset: -10, isPill: false },
  { name: "LANGCHAIN", size: "text-2xl md:text-4xl", xOffset: -40, yOffset: 15, isPill: false },
  { name: "REACT NATIVE", size: "text-xl md:text-3xl", xOffset: 30, yOffset: 25, isPill: true },
  { name: "APP DEV", size: "text-lg md:text-2xl", xOffset: -15, yOffset: -20, isPill: false },
  { name: "REDUX", size: "text-xl md:text-3xl", xOffset: 20, yOffset: 10, isPill: false },
  { name: "SHADCN/UI", size: "text-2xl md:text-4xl", xOffset: -30, yOffset: 5, isPill: true },
  { name: "JAVASCRIPT", size: "text-3xl md:text-5xl", xOffset: 15, yOffset: -15, isPill: false },
  { name: "PYTHON", size: "text-4xl md:text-5xl", xOffset: -25, yOffset: 20, isPill: false },
  { name: "HTML", size: "text-xl md:text-2xl", xOffset: 40, yOffset: -5, isPill: false },
  { name: "CSS", size: "text-xl md:text-2xl", xOffset: -10, yOffset: -30, isPill: true },
  { name: "MULTI-TENANCY", size: "text-lg md:text-2xl", xOffset: 30, yOffset: 30, isPill: false },
  { name: "MICROSERVICES", size: "text-2xl md:text-4xl", xOffset: -50, yOffset: -10, isPill: false },
  { name: "REDIS", size: "text-xl md:text-3xl", xOffset: 10, yOffset: 20, isPill: true },
  { name: "APACHE KAFKA", size: "text-2xl md:text-4xl", xOffset: -30, yOffset: -25, isPill: false },
];

const SkillsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="skills" ref={containerRef} className="relative w-full min-h-[150vh] bg-[#050505] py-32 overflow-hidden flex flex-col justify-center border-t border-white/5">
      
      {/* Background blur/fog to give depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 text-center"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4 block">
            05 — ARSENAL
          </span>
          <h2 className="font-serif-elegant font-light italic text-4xl md:text-5xl text-white">
            Tools of the Trade
          </h2>
        </motion.div>

        {/* Floating Skills Canvas */}
        <div className="relative w-full max-w-5xl flex flex-wrap justify-center items-center content-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6 pt-10">
          {skills.map((skill, index) => {
            // Reduced parallax movement to prevent flying over the title
            const yMovement = useTransform(
              scrollYProgress, 
              [0, 1], 
              [skill.yOffset * 1.5, skill.yOffset * -1.5]
            );
            
            const xMovement = useTransform(
              scrollYProgress,
              [0, 1],
              [skill.xOffset, skill.xOffset * -1]
            );

            return (
              <motion.div
                key={skill.name}
                style={{ y: yMovement, x: xMovement }}
                className={`${skill.size} font-space font-black tracking-tighter transition-colors duration-500 cursor-default select-none 
                  ${skill.isPill 
                    ? 'bg-white text-black px-4 py-1 rounded-full hover:bg-white/80' 
                    : 'text-white/80 hover:text-white mix-blend-screen'
                  }`}
              >
                {skill.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
