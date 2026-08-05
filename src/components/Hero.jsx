import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import rohanImage from "../assets/rohanshinde.png";

const Hero = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <section className="relative w-full h-[85svh] md:h-screen overflow-hidden bg-[#E2E4E9] font-sans">
      
      {/* Background Graphic Rings */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full border border-gray-400 opacity-30" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full border border-gray-400 opacity-30" />
      </div>

      {/* Floating Navbar */}
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        initial="hidden"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl py-4 px-6 flex items-center justify-between z-[100] shadow-sm"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-md flex items-center justify-center font-bold tracking-tighter text-sm sm:text-base">
            RS
          </div>
          <span className="hidden sm:block font-semibold text-xs sm:text-sm uppercase tracking-wide">Design by Rohan</span>
        </div>

        <div className="flex items-center gap-2 lg:gap-8">
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-500 mr-4">
            <a href="#about" className="hover:text-black transition-colors">About Me</a>
            <span className="text-gray-300">/</span>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <span className="text-gray-300">/</span>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          </div>

          <div className="hidden sm:flex items-center gap-1 sm:gap-2">
            <a href="https://github.com/Rohan-Shinde24" target="_blank" rel="noreferrer" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
              <Github strokeWidth={2.5} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://www.linkedin.com/in/rohan-shinde024" target="_blank" rel="noreferrer" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
              <Linkedin strokeWidth={2.5} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohan42455@gmail.com" target="_blank" rel="noreferrer" className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors text-black">
              <Mail strokeWidth={2.5} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#contact" className="ml-1 sm:ml-2 border border-black bg-white text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors whitespace-nowrap">
              Hire Me
            </a>
          </div>

          <button 
            className="sm:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[110%] left-0 w-full bg-white rounded-2xl shadow-xl flex flex-col p-6 gap-6 sm:hidden border border-gray-100"
            >
              <div className="flex flex-col gap-4 font-bold text-gray-800 uppercase tracking-wider text-sm">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Me</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              </div>
              <div className="flex items-center gap-4 border-t pt-6">
                <a href="https://github.com/Rohan-Shinde24" className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/rohan-shinde024" className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"><Linkedin size={20} /></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohan42455@gmail.com" className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"><Mail size={20} /></a>
              </div>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-black text-white py-4 rounded-xl text-center font-bold uppercase tracking-wider text-sm">
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Massive Background Text - Animating horizontally */}
      <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2 left-0 w-[200%] h-auto flex z-10 pointer-events-none overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap items-start"
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          <h1 className="text-[35vw] md:text-[35vw] lg:text-[28vw] leading-none font-black text-[#0A0A0A] tracking-tighter uppercase select-none mr-12" style={{ transform: 'scaleY(1.3)' }}>
            ROHAN SHINDE
          </h1>
          <h1 className="text-[35vw] md:text-[35vw] lg:text-[28vw] leading-none font-black text-[#0A0A0A] tracking-tighter uppercase select-none mr-12" style={{ transform: 'scaleY(1.3)' }}>
            ROHAN SHINDE
          </h1>
        </motion.div>
      </div>

      {/* Left Text (Mobile Only) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-[20%] left-[5%] z-40 md:hidden"
      >
        <p className="text-5xl font-black font-serif-elegant text-white leading-tight mt-70 drop-shadow-xl">
          <span className="block text-xl font-sans font-bold tracking-[0.3em] uppercase mb-1 text-gray-100 drop-shadow-md">I am a</span>
          Software <br /> Engineer
        </p>
      </motion.div>

      {/* Left Text (Desktop Only) */}
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-[25%] md:top-1/3 left-[5%] lg:left-[10%] z-40 hidden md:block"
      >
        <p className="text-4xl lg:text-5xl font-black font-serif-elegant text-white leading-snug drop-shadow-lg">
          Software <br /> Developer
        </p>
      </motion.div>

      {/* Subject Image (Center Bottom - Foreground) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute bottom-[-10vh] md:bottom-0 left-1/2 -translate-x-1/2 w-[160%] md:w-full max-w-[800px] h-[80vh] md:h-[88vh] z-30 flex justify-center items-end"
      >
        <img 
          src={rohanImage} 
          alt="Rohan Shinde" 
          className="w-full h-full object-contain object-bottom select-none drop-shadow-2xl md:scale-100"
        />
      </motion.div>

      {/* Right Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 right-[5%] lg:right-[10%] z-40 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-3xl font-bold font-cursive-accent text-white tracking-wider drop-shadow-lg">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-lg">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
