import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import BounceCards from "./BounceCards";
import Button from "./Button";

const Projects = () => {
  const isMobile = window.innerWidth < 768;
  
  const transformStyles = isMobile
    ? [
        "rotate(-3deg) translateX(-220px)",
        "rotate(0deg) translateX(0px)",
        "rotate(3deg) translateX(220px)",
      ]
    : [
        "rotate(-4deg) translateX(-420px)",
        "rotate(0deg) translateX(0px)",
        "rotate(4deg) translateX(420px)",
      ];

  return (
    <section id="projects" className="relative py-32  bg-[#0A0A0B]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[160px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-container relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[var(--color-primary)] font-black text-[10px] tracking-[0.5em] uppercase mb-6">
            03 / Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            Digital <span className="text-white/20">Showcase.</span>
          </h2>
          <p className="max-w-2xl text-white/40 text-sm md:text-base leading-relaxed font-medium">
            A collection of high-performance applications built with precision, 
            scalability, and a focus on premium user experiences.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        <BounceCards
          projects={projects}
          containerHeight={isMobile ? 550 : 850}
          animationDelay={0.3}
          transformStyles={transformStyles}
        />
      </div>

      {/* Explore All Button */}
      <div className="relative z-20 flex justify-center mt-12 pb-20">
        <Button
          size="lg"
          variant="primary"
          icon={Github}
          onClick={() => window.open("https://github.com/Rohan-Shinde24", "_blank")}
        >
          Explore All Repositories
        </Button>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");