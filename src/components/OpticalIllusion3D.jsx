import { motion } from "motion/react";

const OpticalIllusion3D = () => {
  // Common styles for cube faces
  const faceBase = "absolute w-full h-full border-[2px] md:border-[4px] border-solid flex items-center justify-center opacity-80 backdrop-blur-[2px]";
  
  // Outer Cube animation (rotates continuously)
  const outerCubeAnim = {
    rotateX: [0, 360],
    rotateY: [0, 360],
    rotateZ: [0, 180],
    transition: { duration: 20, repeat: Infinity, ease: "linear" }
  };

  // Inner Cube animation (rotates opposite direction)
  const innerCubeAnim = {
    rotateX: [360, 0],
    rotateY: [0, -360],
    rotateZ: [180, 0],
    scale: [0.4, 0.6, 0.4],
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="relative w-62.5 h-62.5 md:w-87.5 md:h-87.5 perspective-distant flex items-center justify-center cursor-crosshair">
      
      {/* Container holding the 3D space */}
      <motion.div 
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
        animate={outerCubeAnim}
      >
        {/* Outer Cube Faces - Cyan & Magenta focus */}
        <div className={`${faceBase} border-cyan-400 mix-blend-screen shadow-[0_0_20px_rgba(34,211,238,0.5)]`} style={{ transform: "translateZ(125px)" }} />
        <div className={`${faceBase} border-fuchsia-500 mix-blend-screen shadow-[0_0_20px_rgba(217,70,239,0.5)]`} style={{ transform: "rotateY(180deg) translateZ(125px)" }} />
        <div className={`${faceBase} border-yellow-400 mix-blend-screen shadow-[0_0_20px_rgba(250,204,21,0.5)]`} style={{ transform: "rotateY(90deg) translateZ(125px)" }} />
        <div className={`${faceBase} border-cyan-400 mix-blend-screen shadow-[0_0_20px_rgba(34,211,238,0.5)]`} style={{ transform: "rotateY(-90deg) translateZ(125px)" }} />
        <div className={`${faceBase} border-fuchsia-500 mix-blend-screen shadow-[0_0_20px_rgba(217,70,239,0.5)]`} style={{ transform: "rotateX(90deg) translateZ(125px)" }} />
        <div className={`${faceBase} border-yellow-400 mix-blend-screen shadow-[0_0_20px_rgba(250,204,21,0.5)]`} style={{ transform: "rotateX(-90deg) translateZ(125px)" }} />
        
        {/* Connecting Lines (Hypercube illusion) */}
        {/* These lines stretch from the outer cube corners to the inner cube space */}
        <motion.div className="absolute inset-0 preserve-3d" animate={innerCubeAnim} style={{ transformStyle: "preserve-3d" }}>
            {/* Inner Cube Faces - Yellow & Green focus */}
            <div className={`${faceBase} border-lime-400 bg-lime-400/5 mix-blend-difference`} style={{ transform: "translateZ(62.5px)" }} />
            <div className={`${faceBase} border-blue-500 bg-blue-500/5 mix-blend-difference`} style={{ transform: "rotateY(180deg) translateZ(62.5px)" }} />
            <div className={`${faceBase} border-red-500 bg-red-500/5 mix-blend-difference`} style={{ transform: "rotateY(90deg) translateZ(62.5px)" }} />
            <div className={`${faceBase} border-lime-400 bg-lime-400/5 mix-blend-difference`} style={{ transform: "rotateY(-90deg) translateZ(62.5px)" }} />
            <div className={`${faceBase} border-blue-500 bg-blue-500/5 mix-blend-difference`} style={{ transform: "rotateX(90deg) translateZ(62.5px)" }} />
            <div className={`${faceBase} border-red-500 bg-red-500/5 mix-blend-difference`} style={{ transform: "rotateX(-90deg) translateZ(62.5px)" }} />
            
            {/* Central pulsing core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full mix-blend-exclusion shadow-[0_0_50px_#fff]" />
        </motion.div>
      </motion.div>

      {/* Floating particles/noise for depth */}
      <div className="absolute inset-[-50%] pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,1)_100%)] mix-blend-multiply" />
    </div>
  );
};

export default OpticalIllusion3D;
