import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section highlighting
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`w-full flex items-center py-4 fixed top-0 z-[60] transition-all duration-300 ${
        scrolled 
          ? "bg-white/5 backdrop-blur-[12px] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center font-bold text-white border border-white/10">
              RS
            </div>
          </div>
          <p className='text-white text-[20px] font-bold cursor-pointer flex font-space'>
            Rohan <span className='sm:block hidden ml-1 text-[#06B6D4]'>Shinde</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative group cursor-pointer text-[16px] font-medium transition-all duration-300 ${
                active === nav.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`} className="flex items-center gap-1">
                {nav.title}
              </a>
              <motion.span 
                className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]`}
                initial={{ width: 0 }}
                animate={{ width: active === nav.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full opacity-30" />
            </li>
          ))}
          
          <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full glass-morphism border border-white/10 text-white hover:scale-110 transition-all active:scale-95 group overflow-hidden"
            aria-label="Toggle Theme"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 to-[#06B6D4]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            {theme === 'light' ? <Moon size={20} className="relative z-10" /> : <Sun size={20} className="relative z-10" />}
          </button>
        </ul>

        {/* Mobile Navigation */}
        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-morphism border border-white/10 text-white"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button onClick={() => setToggle(!toggle)} className="text-white">
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[280px] bg-black/90 backdrop-blur-2xl z-[70] flex flex-col p-8 border-l border-white/10"
              >
                <div className="flex justify-end mb-12">
                  <button onClick={() => setToggle(false)} className="text-white hover:rotate-90 transition-transform">
                    <X size={32} />
                  </button>
                </div>
                <ul className='list-none flex flex-col gap-8'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`text-[24px] font-space font-bold cursor-pointer transition-all ${
                        active === nav.id ? "text-[#06B6D4] translate-x-2" : "text-white/70"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.id);
                      }}
                    >
                      <a href={`#${nav.id}`} className="flex items-center gap-4">
                        <span className="text-[14px] text-white/30 font-mono">0{navLinks.indexOf(nav) + 1}</span>
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                   <div className="p-4 rounded-xl glass-morphism border border-white/10">
                      <p className="text-white/40 text-sm mb-2">Socials</p>
                      <div className="flex gap-4">
                        {/* Placeholder for social links */}
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">G</div>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">L</div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {toggle && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[65]"
            />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
