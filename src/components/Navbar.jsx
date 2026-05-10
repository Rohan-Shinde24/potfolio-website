import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full fixed top-0 z-[60] transition-all duration-500 py-5 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-container flex justify-between items-center">
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
            RS
          </div>
          <p className='text-gray-900 text-xl font-bold font-space tracking-tight'>
            Rohan <span className='text-indigo-600'>Shinde</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-12 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative cursor-pointer text-sm font-bold uppercase tracking-widest transition-all ${
                active === nav.id ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"
              }`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {active === nav.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-600 rounded-full"
                />
              )}
            </li>
          ))}
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-colors"
          >
            Hire Me
          </motion.a>
        </ul>

        {/* Mobile Nav Toggle */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setToggle(!toggle)} className="text-gray-900">
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-white z-[70] flex flex-col p-10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-16">
                   <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white">RS</div>
                   <button onClick={() => setToggle(false)} className="text-gray-900"><X size={32} /></button>
                </div>

                <ul className='list-none flex flex-col gap-10'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`text-4xl font-extrabold font-space transition-all ${
                        active === nav.id ? "text-indigo-600" : "text-gray-300"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.id);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <a
                    href="#contact"
                    onClick={() => setToggle(false)}
                    className="w-full py-5 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-xl shadow-indigo-100"
                   >
                     Let's Talk
                   </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
