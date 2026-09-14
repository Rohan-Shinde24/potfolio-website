import { motion } from "motion/react";
import profileImage from "../assets/myimage.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Atmospheric Fog Effect */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[120px]" />
      </motion.div>

      {/* Profile Image (Absolute Right Side) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute right-0 md:right-12 lg:right-32 top-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 z-0 pointer-events-none"
      >
        <img 
          src={profileImage} 
          alt="Rohan Shinde" 
          className="w-full h-auto object-contain rounded-sm"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-start"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-serif-elegant italic font-light text-5xl md:text-7xl lg:text-[7rem] leading-none mb-6 text-white"
        >
          Hi, I'm <br className="md:hidden" />Rohan Shinde.
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-12">
          <h2 className="font-space font-semibold tracking-tighter text-3xl md:text-5xl text-white/90">
            Software Developer
          </h2>
          <h3 className="font-space text-lg md:text-2xl text-white/60 font-light">
            4th Year B.Tech AI & ML Student
          </h3>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl font-sans text-lg md:text-xl text-white/50 leading-relaxed font-light"
        >
          I build thoughtful digital products where clean interfaces, scalable architecture and intelligent technology meet.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-start gap-4 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40"
      >
        <span className="mb-2">01 — INTRO</span>
        <div className="flex items-center gap-4">
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.div>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
