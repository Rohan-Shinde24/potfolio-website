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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-standard py-6 ${
        scrolled ? "glass-panel !py-4 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-container flex justify-between items-center px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-2xl font-extrabold tracking-tighter text-[var(--color-text)]">
            ROHAN<span className="text-[var(--color-primary)]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
              } hover:text-[var(--color-text)] text-sm font-medium uppercase tracking-widest cursor-pointer transition-standard`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

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

