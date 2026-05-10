import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls, Float } from "@react-three/drei";

const Scene = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#7C3AED"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <mesh position={[0, 0, -1]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#06B6D4" wireframe opacity={0.2} transparent />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 1 } },
          push: { quantity: 4 },
        },
      },
      particles: {
        color: { value: "#7C3AED" },
        links: {
          color: "#06B6D4",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  // Mouse tilt effect for avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center pt-20"
      id="hero"
    >
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[#06B6D4] font-mono mb-2 tracking-widest uppercase text-sm">
              <span className="opacity-50">&lt;</span> Fullstack Developer <span className="opacity-50">/&gt;</span>
            </h2>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 font-space">
              Hi, I'm <br />
              <span className="relative inline-block mt-2">
                <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] animate-pulse">
                  Rohan Shinde
                </span>
              </span>
            </h1>

            <div className="h-[40px] mb-8">
              <p className="text-xl sm:text-2xl text-white/60 font-medium">
                I am a {" "}
                <span className="text-[#7C3AED] font-bold">
                  <Typewriter
                    words={['Fullstack Developer', 'React Enthusiast', 'UI/UX Designer', 'Problem Solver']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#7C3AED] text-white rounded-full font-bold shadow-lg shadow-violet-500/20 transition-all flex items-center gap-2"
              >
                View Projects
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-morphism border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - 3D Avatar/Blob */}
        <div className="flex-1 w-full h-[400px] md:h-[600px] relative">
          <motion.div 
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="w-full h-full"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <pointLight position={[-10, -10, -5]} color="#7C3AED" intensity={5} />
              <Scene />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 w-12 h-12 glass-morphism rounded-xl flex items-center justify-center border border-white/20 shadow-xl"
          >
            <span className="text-xl">⚛️</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-4 w-12 h-12 glass-morphism rounded-xl flex items-center justify-center border border-white/20 shadow-xl"
          >
            <span className="text-xl">🚀</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-[#06B6D4] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
