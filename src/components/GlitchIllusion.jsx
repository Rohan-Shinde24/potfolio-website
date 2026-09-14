import { motion } from "motion/react";

const GlitchIllusion = () => {
  // Glitch animation variants
  const glitch1 = {
    animate: {
      x: [0, -10, 10, -5, 5, 0],
      y: [0, 5, -5, 10, -10, 0],
      scale: [1, 1.05, 0.95, 1.02, 0.98, 1],
      skewX: [0, 5, -5, 2, -2, 0],
      clipPath: [
        "inset(0 0 0 0)",
        "inset(20% 0 80% 0)",
        "inset(80% 0 20% 0)",
        "inset(40% 0 60% 0)",
        "inset(10% 0 90% 0)",
        "inset(0 0 0 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "anticipate",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    }
  };

  const glitch2 = {
    animate: {
      x: [0, 15, -15, 8, -8, 0],
      y: [0, -10, 10, -5, 5, 0],
      scale: [1, 0.95, 1.05, 0.98, 1.02, 1],
      skewY: [0, -5, 5, -2, 2, 0],
      clipPath: [
        "inset(0 0 0 0)",
        "inset(60% 0 40% 0)",
        "inset(10% 0 90% 0)",
        "inset(80% 0 20% 0)",
        "inset(30% 0 70% 0)",
        "inset(0 0 0 0)"
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "circInOut",
        times: [0, 0.1, 0.3, 0.5, 0.7, 1]
      }
    }
  };

  const glitch3 = {
    animate: {
      x: [0, -8, 8, -15, 15, 0],
      y: [0, 8, -8, 15, -15, 0],
      filter: [
        "hue-rotate(0deg)",
        "hue-rotate(90deg)",
        "hue-rotate(180deg)",
        "hue-rotate(270deg)",
        "hue-rotate(360deg)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative w-75 h-75 md:w-100 md:h-100 z-10 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[150%] h-[150%] bg-linear-to-r from-cyan-500/20 via-fuchsia-500/20 to-yellow-500/20 blur-3xl rounded-full" />
      
      {/* Core Shape Container */}
      <div className="relative w-full h-full mix-blend-screen group cursor-crosshair">
        
        {/* Layer 1 - Cyan */}
        <motion.div
          variants={glitch1}
          animate="animate"
          className="absolute inset-0 bg-cyan-400 mix-blend-difference rounded-[40px] md:rounded-[60px] opacity-80"
          style={{ transformOrigin: "center" }}
        >
          <div className="w-full h-full border-4 border-black/50 rounded-[inherit] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
        </motion.div>

        {/* Layer 2 - Magenta */}
        <motion.div
          variants={glitch2}
          animate="animate"
          className="absolute inset-0 bg-fuchsia-500 mix-blend-exclusion rounded-[40px] md:rounded-[60px] opacity-80"
          style={{ transformOrigin: "center" }}
        >
          <div className="w-full h-full border-8 border-cyan-500 mix-blend-difference rounded-full absolute inset-0" />
        </motion.div>

        {/* Layer 3 - Yellow (Base Shape) */}
        <motion.div
          variants={glitch3}
          animate="animate"
          className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-50 mix-blend-screen flex items-center justify-center overflow-hidden"
        >
           {/* Inner geometric pattern */}
           <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.2)_10px,rgba(0,0,0,0.2)_20px)]" />
           <div className="w-1/2 h-1/2 bg-black rounded-full blur-md" />
        </motion.div>

        {/* Floating abstract rings */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-magenta-500/30 rounded-full mix-blend-overlay"
        />
        
        {/* Central eye/void */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full mix-blend-exclusion shadow-[0_0_30px_white] z-10" />
      </div>

      {/* Overlay noise/scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,1)_2px,rgba(0,0,0,1)_4px)] mix-blend-overlay" />
    </div>
  );
};

export default GlitchIllusion;
