import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
        <span className="text-4xl font-black text-gray-900">{count}</span>
        <span className="text-2xl font-bold text-indigo-600 ml-0.5">+</span>
      </div>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1 text-center">{label}</p>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: "Years Coding", value: "3" },
    { label: "Projects Built", value: "20" },
    { label: "Technologies", value: "15" },
  ];

  return (
    <div className="relative pt-10">
      <div className="section-watermark">About Me</div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-indigo-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-3">01. Identity</p>
        <h2 className="text-5xl font-black text-gray-900 tracking-tight">Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Overview.</span></h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-20 items-center'>
        {/* Left Side: Photo with professional frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className='flex-1 relative w-full'
        >
          <div className="relative w-full max-w-[450px] mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-10 bg-indigo-50 blur-[100px] opacity-60"></div>
            
            {/* Image Container */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl shadow-indigo-100/50 group">
               <img
                  src={profile}
                  alt='profile'
                  className='w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <p className="text-white font-space font-bold tracking-widest uppercase text-sm">Design Driven Development</p>
                </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white border border-gray-100 p-8 rounded-3xl shadow-2xl z-20">
                <div className="flex gap-10">
                  {stats.map((stat, index) => (
                    <Counter key={index} value={stat.value} label={stat.label} />
                  ))}
                </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio & Cards */}
        <div className="flex-1 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/20 relative overflow-hidden group'
          >
            <p className='text-gray-600 text-xl leading-relaxed font-light'>
              I'm a passionate developer dedicated to creating <span className="text-gray-900 font-bold underline decoration-indigo-200 decoration-4 underline-offset-4">immersive digital experiences</span>. With a strong foundation in modern web technologies, I specialize in building high-performance applications that bridge the gap between design and functionality.
            </p>
            <p className="text-gray-600 text-xl leading-relaxed font-light mt-6">
              My approach focuses on <span className="text-indigo-600 font-bold">scalability</span>, <span className="text-cyan-600 font-bold">aesthetics</span>, and <span className="text-indigo-600 font-bold">user-centric design</span>. I thrive on solving complex problems with elegant code.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className='bg-white p-8 rounded-3xl border border-gray-50 flex flex-col items-center text-center gap-4 group shadow-lg shadow-gray-100 hover:shadow-indigo-100 transition-all duration-500'
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className='w-10 h-10 object-contain group-hover:invert group-hover:brightness-0 transition-all duration-500'
                  />
                </div>
                <h3 className='text-gray-900 text-xs font-black uppercase tracking-[0.2em]'>
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
