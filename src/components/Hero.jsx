import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpeg";
import { MY_EMAIL } from "../constants";

const Hero = () => {
  const containerRef = useRef(null);

  // 3D tilt on profile image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
      id="hero"
    >
      {/* Subtle Light Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-50 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-50 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 w-full pt-20">
        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block text-indigo-600 font-mono tracking-[0.3em] uppercase text-xs mb-6 border border-indigo-100 px-4 py-2 rounded-full bg-indigo-50/50">
            Fullstack Developer
          </span>

          <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-6 font-space leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Rohan Shinde
            </span>
          </h1>

          <div className="h-10 mb-8">
            <p className="text-xl sm:text-2xl text-gray-600 font-medium">
              I build{" "}
              <span className="text-indigo-600 font-bold underline decoration-indigo-200 decoration-4 underline-offset-4">
                <Typewriter
                  words={["Full-Stack Apps", "React Experiences", "Modern APIs", "AI Solutions"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </p>
          </div>

          <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed font-light">
            Crafting high-performance digital experiences with a focus on clean architecture, intuitive design, and modern technology.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 transition-all"
            >
              Explore My Work
            </motion.a>

            <motion.a
              href={`mailto:${MY_EMAIL}?subject=Let's Start a Project`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-all"
            >
              🚀 Let's Connect
            </motion.a>
          </div>

          {/* Key metrics */}
          <div className="flex gap-10 mt-16 justify-center md:justify-start">
            {[["3+", "Years"], ["20+", "Projects"], ["15+", "Tools"]].map(([num, label]) => (
              <div key={label} className="text-center md:text-left">
                <p className="text-3xl font-black font-space text-gray-900">{num}</p>
                <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Profile Image with soft effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center"
        >
          <motion.div
            style={{ rotateX, rotateY, perspective: 1200 }}
            className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px]"
          >
            {/* Soft Shadow Rings */}
            <div className="absolute inset-10 rounded-full bg-indigo-100 blur-[80px] opacity-40 animate-pulse" />
            
            {/* Subtle floating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-indigo-100 opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] rounded-full border border-indigo-50 opacity-30"
            />

            {/* Main Profile Image */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-[8px] border-white shadow-2xl shadow-indigo-100 rotate-3 group">
              <img
                src={profile}
                alt="Rohan Shinde"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating feature tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                ⚛️
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Expertise</p>
                <p className="text-gray-900 font-bold text-sm">React Specialist</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 font-bold">
                🚀
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Status</p>
                <p className="text-gray-900 font-bold text-sm">Open for Work</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator for light theme */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.4em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-100 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-1.5 bg-indigo-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
