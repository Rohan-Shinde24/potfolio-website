import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const cards = [
  {
    id: 1,
    title: "Frontend Mastery",
    description: "I build pixel-perfect, highly interactive user interfaces using React, Next.js, and Framer Motion. Every detail is optimized for performance and premium aesthetics.",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Microservices & Architecture",
    description: "I design highly scalable backend systems utilizing robust microservices architectures with Node.js, Express, and modern databases. Reliability and speed are my top priorities.",
    color: "bg-gray-800",
    textColor: "text-gray-100"
  },
  {
    id: 3,
    title: "AI & ML Integration",
    description: "I possess strong knowledge of AI and Machine Learning, allowing me to seamlessly integrate powerful AI capabilities and intelligent features directly into modern web applications.",
    color: "bg-gray-100",
    textColor: "text-black"
  },
  {
    id: 4,
    title: "Full-Stack Synergy",
    description: "I bridge the gap between frontend and backend, orchestrating seamless APIs and smooth state management for a unified, high-performing application.",
    color: "bg-white",
    textColor: "text-black",
    border: "border border-gray-200"
  }
];

const HireMeSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="why-hire-me" ref={containerRef} className="relative w-full h-[400vh] bg-[#FAFAFA]">
      <div className="sticky top-0 h-screen max-w-7xl mx-auto w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center w-full z-0 px-4 mb-6 md:mb-12 mt-4 md:mt-0">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 md:mb-4">Why Choose Me</h2>
          <h3 className="text-4xl md:text-6xl font-black font-serif-elegant text-[#0A0A0A]">
            Why You Should <span className="font-cursive-accent block md:inline-block">Hire Me</span>
          </h3>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-[95vw] lg:max-w-[1400px] h-[65vh] flex justify-center items-start">
          {cards.map((card, index) => {
            const numCards = cards.length;
            const startScroll = (index - 1) * (1 / (numCards - 1));
            const endScroll = index * (1 / (numCards - 1));
            
            // Slide up from bottom
            const y = useTransform(
              scrollYProgress,
              [startScroll, endScroll],
              index === 0 ? ["0vh", "0vh"] : ["100vh", "0vh"]
            );

            // Scale down effect when the NEXT card slides over it
            const nextStartScroll = index * (1 / (numCards - 1));
            const nextEndScroll = (index + 1) * (1 / (numCards - 1));
            
            const scale = useTransform(
              scrollYProgress,
              [nextStartScroll, nextEndScroll],
              [1, 0.95 - (index * 0.01)] 
            );

            return (
              <motion.div
                key={card.id}
                style={{ 
                  y, 
                  scale,
                  top: `calc(${index * 15}px)`,
                  zIndex: index + 1
                }}
                className={`absolute w-full h-auto min-h-[55vh] md:min-h-[500px] py-10 px-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col justify-center ${card.color} ${card.textColor} ${card.border || ""}`}
              >
                <div className="max-w-4xl mx-auto w-full">
                  <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-70 mb-4 block">0{index + 1}</span>
                  <h4 className="text-3xl md:text-5xl font-black font-serif-elegant mb-4 md:mb-6 leading-tight">{card.title}</h4>
                  <p className="text-base sm:text-lg md:text-2xl font-light opacity-90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
