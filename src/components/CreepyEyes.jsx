import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

const Eye = ({ id, x, y, size, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      className="absolute bg-[#e0e0e0] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] border border-white/20"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        width: `${size}px`, 
        height: `${size * 0.55}px`,
        transform: 'translate(-50%, -50%)',
        borderRadius: '70% 0', // Leaf shape for an eye
      }}
    >
      <div 
        id={`eye-${id}`}
        className="absolute w-full h-full creepy-eye-inner"
        style={{ transform: `rotate(-45deg)` }}
      >
        {/* Black and White Pupil */}
        <div 
          className="absolute rounded-full shadow-[0_0_10px_black]"
          style={{ 
            width: `${size * 0.45}px`, 
            height: `${size * 0.45}px`,
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            background: `radial-gradient(circle at center, #000 30%, #444 50%, #000 90%)`
          }}
        >
          {/* Pupil highlight */}
          <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/60 rounded-full blur-[1px]" />
        </div>
      </div>
    </motion.div>
  );
};

const CreepyEyes = () => {
  const [eyes, setEyes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Generate grouped eyes (clusters on the left and right)
    const generatedEyes = [];
    let idCounter = 0;

    // Helper to create a cluster
    const createCluster = (centerX, centerY, count, spread) => {
      for (let i = 0; i < count; i++) {
        generatedEyes.push({
          id: idCounter++,
          x: centerX + (Math.random() * spread - spread / 2),
          y: centerY + (Math.random() * spread - spread / 2),
          size: Math.random() * 50 + 40, // 40px to 90px
          delay: Math.random() * 1.5
        });
      }
    };

    // Create a cluster on top left, bottom left, top right, bottom right
    createCluster(15, 20, 10, 20); // Top Left
    createCluster(15, 80, 10, 20); // Bottom Left
    createCluster(85, 20, 10, 20); // Top Right
    createCluster(85, 80, 10, 20); // Bottom Right
    createCluster(50, 15, 6, 30);  // Top Center (sparse)
    createCluster(50, 85, 6, 30);  // Bottom Center (sparse)

    setEyes(generatedEyes);
  }, []);

  useEffect(() => {
    // High-performance single event listener using requestAnimationFrame
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const eyeElements = document.querySelectorAll('.creepy-eye-inner');
          
          eyeElements.forEach((eye) => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;
            
            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            const angleDeg = angle * (180 / Math.PI);
            
            // Direct DOM manipulation bypasses React state for zero lag
            eye.style.transform = `rotate(${angleDeg - 45}deg)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#050505]/60 z-10 mix-blend-overlay backdrop-blur-[1px]" />
      <div className="w-full h-full opacity-70">
        {eyes.map((eye) => (
          <Eye key={eye.id} {...eye} />
        ))}
      </div>
    </div>
  );
};

export default CreepyEyes;
