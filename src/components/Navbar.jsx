import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className={`${styles.paddingX} w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 object-contain bg-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg border border-purple-400">RS</div>
          <p className='text-gray-900 text-[18px] font-bold cursor-pointer flex '>
            Rohan &nbsp;
            <span className='sm:block hidden'> | Shinde</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-purple-600 font-bold" : "text-gray-600"
              } hover:text-purple-600 text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {toggle ? (
            <X
              className='w-[28px] h-[28px] object-contain text-gray-900 cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <Menu
              className='w-[28px] h-[28px] object-contain text-gray-900 cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white shadow-2xl border border-gray-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-purple-600" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
