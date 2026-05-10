import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles/styles";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import profile from "../assets/profile.jpeg";

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-white font-space">{count}</span>
        <span className="text-2xl font-bold text-[#06B6D4]">+</span>
      </div>
      <p className="text-white/40 text-xs uppercase tracking-widest mt-1 text-center">{label}</p>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: "Years Coding", value: "3" },
    { label: "Projects Built", value: "20" },
    { label: "Technologies Used", value: "15" },
  ];

  return (
    <div className="relative pt-10">
      <div className="section-watermark">About Me</div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-[#06B6D4] font-mono mb-2">01. Discovery</p>
        <h2 className="text-5xl font-bold text-white font-space">Overview.</h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-16 items-center'>
        {/* Left Side: Hexagonal Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className='flex-1 relative'
        >
          <div className="relative w-full max-w-[400px] aspect-square mx-auto">
            {/* Hexagon Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] blur-[100px] opacity-20 animate-pulse"></div>
            
            {/* Hexagon Container */}
            <div className="relative w-full h-full glass-morphism shape-hexagon p-1.5 overflow-hidden group">
               <div className="w-full h-full bg-[#040812] shape-hexagon overflow-hidden relative">
                  <img
                    src={profile}
                    alt='profile'
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
                     <p className="text-white font-space font-bold tracking-widest uppercase">Software Engineer</p>
                  </div>
               </div>
               
               {/* Border Animation Effect */}
               <div className="absolute inset-0 shape-hexagon border-2 border-[#7C3AED] opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 glass-morphism border border-white/10 p-6 rounded-2xl shadow-2xl z-20 backdrop-blur-2xl">
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <Counter key={index} value={stat.value} label={stat.label} />
                  ))}
                </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio & Cards */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='glass-morphism p-8 rounded-3xl border border-white/5 relative overflow-hidden group'
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/5 blur-3xl group-hover:bg-[#7C3AED]/10 transition-all"></div>
            <p className='text-white/70 text-lg leading-relaxed font-light'>
              I'm a passionate developer dedicated to creating <span className="text-white font-medium italic underline decoration-[#06B6D4] decoration-2 underline-offset-4">immersive digital experiences</span>. With a strong foundation in modern web technologies, I specialize in building high-performance applications that bridge the gap between design and functionality.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light mt-4">
              My approach focuses on <span className="text-[#06B6D4] font-semibold">scalability</span>, <span className="text-[#7C3AED] font-semibold">aesthetics</span>, and <span className="text-[#06B6D4] font-semibold">user-centric design</span>. Whether it's crafting complex backend architectures or fluid frontend animations, I thrive on solving challenging problems through code.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='glass-morphism p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-3 group relative overflow-hidden'
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-all">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className='w-8 h-8 object-contain filter brightness-110'
                  />
                </div>
                <h3 className='text-white text-sm font-bold font-space uppercase tracking-wider'>
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
