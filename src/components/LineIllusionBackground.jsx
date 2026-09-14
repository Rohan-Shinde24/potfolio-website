import { motion } from "motion/react";

const LineIllusionBackground = () => {
  // A helper to generate a conical/radial repeating gradient
  // Tailwind doesn't have built-in utilities for repeating-conic-gradient, so we use arbitrary values
  const radialLinesStyle = {
    background: "repeating-conic-gradient(from 0deg, transparent 0deg 2deg, rgba(255, 255, 255, 0.1) 2deg 4deg)",
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen flex justify-center items-center">
      {/* Base Layer - Static */}
      <div 
        className="absolute w-[200vw] h-[200vw] rounded-full"
        style={radialLinesStyle}
      />
      
      {/* Rotating Layer 1 - Creates the primary Moiré effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200vw] h-[200vw] rounded-full mix-blend-difference"
        style={radialLinesStyle}
      />
      
      {/* Rotating Layer 2 (Reverse) - Adds complexity and a central 'breathing' effect */}
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200vw] h-[200vw] rounded-full mix-blend-color-dodge opacity-50"
        style={radialLinesStyle}
      />
      
      {/* Vignette to fade out the edges so it doesn't overwhelm the whole screen */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_80%)]" />
    </div>
  );
};

export default LineIllusionBackground;
