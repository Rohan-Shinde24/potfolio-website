import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import profile from "../assets/edited-photo.png";
import { MY_EMAIL } from "../constants";
import { ShapeGrid } from "./index";

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Effect: Lines with Edge Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Grid */}
        <div className="absolute inset-0 opacity-40">
          <ShapeGrid 
            speed={0.1} 
            squareSize={50}
            direction='diagonal'
            borderColor='var(--color-border)'
            hoverFillColor='var(--color-primary-semi)'
            shape='square'
            hoverTrailAmount={10}
          />
        </div>
        
        {/* Gradient Masks for "Blur from end" effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-transparent to-[var(--color-bg)] opacity-100" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center pt-24 pb-12 z-10">
        
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-8 bg-[var(--color-primary)]" />
            <span className="text-[var(--color-primary)] font-mono text-sm tracking-[0.2em] uppercase font-bold">
              Software Engineer & AI Enthusiast
            </span>
          </motion.div>
          
          {/* Balanced Title */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] mb-6 leading-[1.2] tracking-tight">
            Architecting <br />
            <span className="text-[var(--color-primary)]">
              Next-Gen
            </span> <br />
            <span className="font-mono font-medium tracking-tighter text-[var(--color-text-muted)] text-3xl md:text-4xl lg:text-5xl">
              Digital Solutions
            </span>
            <span className="inline-block w-[3px] h-8 md:h-12 bg-[var(--color-primary)] ml-3 align-baseline animate-pulse" />
          </motion.h1>
          
          {/* Refined Description */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mb-12 leading-relaxed font-normal">
            I am <strong className="text-[var(--color-text)] font-semibold">Rohan Shinde</strong>, a Fullstack Developer specializing in building robust, scalable web applications. I bridge the gap between complex backend architectures and clean, intuitive user interfaces.
          </motion.p>

          {/* Action Buttons & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full sm:w-auto">
            {/* Larger, Prominent CTA Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 bg-[var(--color-text)] text-[var(--color-bg,#fff)] px-10 py-5 rounded-md font-bold uppercase tracking-wider text-base md:text-lg transition-all hover:bg-[var(--color-primary)] hover:text-white w-full sm:w-auto shadow-lg"
            >
              View Selected Works
              <ChevronRight size={22} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            <div className="hidden sm:block h-14 w-[1px] bg-[var(--color-border)]" />

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/Rohan-Shinde24"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "var(--color-primary)" }}
                className="text-[var(--color-text)] transition-colors p-2"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/rohan-shinde-a6b107252"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "#0A66C2" }}
                className="text-[var(--color-text)] transition-colors p-2"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href={`mailto:${MY_EMAIL}`}
                whileHover={{ y: -4, color: "var(--color-primary)" }}
                className="text-[var(--color-text)] transition-colors p-2"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Clean Profile Image */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-full mt-10 lg:mt-0">
          <motion.div
           
            className="relative w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] z-20"
          >
            {/* Subtle floating animation */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Clean, shadow-based styling instead of neon blur */}
              <img
                src={profile}
                alt="Rohan Shinde - Fullstack Developer"
                className="w-full h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[var(--color-border)] relative z-10 bg-[var(--color-bg)]"
              />
            </motion.div>
          </motion.div>

          {/* Clean Geometric Floating Accents */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-10 -right-4 w-32 h-32 rounded-full border-[2px] border-[var(--color-border)] z-10 hidden lg:block"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute top-10 -left-8 w-16 h-16 rounded-full border border-[var(--color-primary)] opacity-50 z-0 hidden lg:block"
          />
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Scroll</span>
        <motion.div 
          animate={{ height: ["0rem", "3rem", "0rem"], y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] bg-[var(--color-text-muted)] opacity-50 origin-top" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;