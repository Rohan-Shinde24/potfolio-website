import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-1 w-full z-50 transition-standard py-6 ${
        scrolled ? "glass-panel !py-4 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-container flex justify-between items-center   px-6">
        {/* Logo - Column 1 */}
        <div className="flex-1 ">
          <Link
            to="/"
            className=""
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-2xl font-extrabold tracking-tighter text-[var(--color-text)]">
              ROHAN<span className="text-[var(--color-primary)]">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links - Column 2 (Middle) */}
        <ul className="list-none hidden md:flex flex-row gap-10 items-center justify-center flex-1">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)]"
              } hover:text-[var(--color-text)] text-sm font-medium uppercase tracking-widest cursor-pointer transition-standard`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons - Column 3 (Right) */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <a
            href="https://github.com/Rohan-Shinde24"
            target="_blank"
            rel="noreferrer"
            className="text-[#181717] dark:text-white hover:scale-110 transition-standard"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/rohan-shinde-a6b107252"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A66C2] hover:scale-110 transition-standard"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-[var(--color-text)] p-2 z-50 relative"
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-[var(--color-bg)] flex flex-col p-10 pt-32"
              >
                <ul className="list-none flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className="text-4xl font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-standard"
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
