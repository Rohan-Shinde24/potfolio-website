import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const AboutSection = () => {
  const [glitch, setGlitch] = useState("");
  const lastScrollRef = useRef(0);
  const glitchTimerRef = useRef(null);
  const { scrollY } = useScroll();

  const triggerGlitch = useCallback(() => {
    const v = Math.random() > 0.5 ? "is-glitching" : "is-glitching-alt";
    setGlitch(v);
    clearTimeout(glitchTimerRef.current);
    glitchTimerRef.current = setTimeout(() => setGlitch(""), 500);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const delta = Math.abs(current - lastScrollRef.current);
    lastScrollRef.current = current;
    if (delta > 2 && Math.random() < 0.15) triggerGlitch();
  });

  return (
    <section id="about" className="relative w-full min-h-screen bg-[#050505] py-32 px-6 md:px-12 flex flex-col justify-center border-t border-white/5">
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-24 border-b border-white/10 pb-8"
        >
          <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tighter text-white">
            ABOUT ME
          </h2>
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 hidden md:block">
            WHO I AM
          </span>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column - Intro & Meta */}
          <div className="lg:col-span-4 flex flex-col justify-between order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed font-light mb-12">
                I am a passionate software developer and AI/ML engineer currently completing my 4th year of B.Tech. I specialize in building robust backend architectures and intelligent, scalable web applications that solve real-world problems elegantly.
              </p>

              {/* Metadata Blocks */}
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">BASED IN</h4>
                  <p className="font-space text-sm tracking-widest text-white">INDIA</p>
                </div>
                <div>
                  <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">FOCUS</h4>
                  <p className="font-space text-sm tracking-widest text-white">SOFTWARE DEVELOPMENT / AI / WEB</p>
                </div>
                <div>
                  <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">EDUCATION</h4>
                  <p className="font-space text-sm tracking-widest text-white">B.TECH — AI & ML</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Large Statement */}
          <div className="lg:col-span-8 lg:pl-12 order-1 lg:order-2">
            <motion.h3 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`glitch-scroll ${glitch} font-serif-elegant italic font-light text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] text-white`}
            >
              "I enjoy turning complex ideas into simple, useful digital experiences."
            </motion.h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
