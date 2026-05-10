import React from 'react';
import { technologies } from '../constants';

const TechMarquee = () => {
  // Duplicate the array to create a seamless infinite scroll
  const marqueeItems = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="py-20 bg-transparent overflow-hidden relative flex flex-col justify-center border-y border-white/5">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#040812] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#040812] to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee flex gap-24 items-center">
        {marqueeItems.map((tech, index) => (
          <div 
            key={`marquee-${tech.name}-${index}`}
            className="flex items-center gap-4 group cursor-default"
          >
            <div className="w-14 h-14 glass-morphism rounded-xl flex items-center justify-center border border-white/5 group-hover:border-[#06B6D4]/30 transition-all duration-500">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-110"
              />
            </div>
            <p className="text-white/20 font-space font-bold uppercase tracking-[0.3em] text-xl group-hover:text-[#7C3AED] transition-colors duration-500">
              {tech.name}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
