import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";


const About = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="pro-card flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-border)] flex items-center justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-6 h-6 object-contain grayscale"
              />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text)]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(About, "about");

