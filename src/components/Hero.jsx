import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { MY_EMAIL } from "../constants";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
      id="hero"
    >
      <div className="max-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-[var(--color-text-muted)] font-mono text-sm tracking-widest uppercase mb-8">
              Fullstack Developer & UI Designer
            </span>
            
            <h1 className="title-xl text-[var(--color-text)] mb-8">
              Crafting <br />
              <span className="text-[var(--color-text-muted)]">Digital</span> <br />
              Experiences.
            </h1>
            
            <p className="text-xl text-[var(--color-text-muted)] max-w-lg mb-12 leading-relaxed">
              I'm Rohan Shinde, a developer dedicated to building high-performance, 
              scalable, and intuitive web applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-6">
              <motion.a
                href="#projects"
                whileHover={{ y: -4 }}
                className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-semibold transition-standard hover:shadow-xl"
              >
                View Selected Works
              </motion.a>
              
              <motion.a
                href={`mailto:${MY_EMAIL}`}
                whileHover={{ y: -4 }}
                className="px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] rounded-full font-semibold transition-standard hover:bg-[var(--color-border)]"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-full">
          <motion.div
            style={{ y: y1 }}
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[var(--color-border)] shadow-2xl"
          >
            <img
              src={profile}
              alt="Rohan Shinde"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-standard duration-1000"
            />
          </motion.div>

          {/* Floating Accents */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-12 -right-6 w-32 h-32 rounded-full border border-[var(--color-border)] z-10 hidden lg:block"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute top-12 -left-12 w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-10 z-10 hidden lg:block"
          />
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent opacity-30" />
      </motion.div>
    </section>
  );
};


export default Hero;

