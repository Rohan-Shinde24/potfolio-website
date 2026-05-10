import React from 'react';
import { technologies } from '../constants';

const TechMarquee = () => {
  // Duplicate the array to create a seamless infinite scroll
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <div className="py-10 bg-white overflow-hidden relative flex flex-col justify-center border-y border-gray-100">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="animate-marquee flex gap-16 items-center">
        {marqueeItems.map((tech, index) => (
          <div 
            key={`marquee-${tech.name}-${index}`}
            className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
          >
            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-gray-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
