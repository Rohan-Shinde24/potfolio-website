import React from "react";
import { styles } from "../styles/styles";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} py-10 border-t border-gray-100 bg-white`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-gray-600 text-[16px]">
          © {new Date().getFullYear()} <span className="text-purple-600 font-bold">Rohan Shinde</span>. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="https://github.com/Rohan-Shinde24" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-600 font-medium transition-all">GitHub</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-all">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-all">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
