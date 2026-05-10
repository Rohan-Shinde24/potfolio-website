import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

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
    <div ref={ref} className="flex flex-col items-start">
      <div className="flex items-baseline">
        <span className="text-5xl font-bold text-[var(--color-text)] tracking-tighter">{count}</span>
        <span className="text-2xl font-bold text-[var(--color-primary)] ml-1">+</span>
      </div>
      <p className="text-[var(--color-text-muted)] text-[10px] font-bold uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3" },
    { label: "Completed Projects", value: "20" },
    { label: "Tech Stack Tools", value: "15" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          01 / About
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Designing & Developing <br /> 
          with <span className="text-[var(--color-text-muted)]">Purpose.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Bio */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-[var(--color-text-muted)] leading-relaxed"
          >
            I'm a developer dedicated to crafting exceptional digital products. 
            I believe that great software is built at the intersection of 
            clean code, intuitive design, and solving real-world problems.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--color-text-muted)] leading-relaxed"
          >
            With expertise across the full stack, I specialize in building 
            responsive, high-performance web applications that provide seamless 
            user experiences. I'm constantly exploring new technologies to 
            stay at the forefront of the digital landscape.
          </motion.p>

          <div className="grid grid-cols-3 gap-8 mt-8">
            {stats.map((stat, index) => (
              <Counter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Right: Services */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="pro-card flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-border)] flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 object-contain grayscale"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text)]">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SectionWrapper(About, "about");

