import { motion } from "motion/react";

const journeyData = [
  {
    year: "4TH YEAR",
    title: "B.Tech AI & ML",
    desc: "Currently completing my Bachelor of Technology focused on Artificial Intelligence and Machine Learning."
  },
  {
    year: "EXPERIENCE",
    title: "Software Development",
    desc: "Projects & Internship Experience building real-world applications and scalable solutions."
  },
  {
    year: "CORE FOCUS",
    title: "AI / ML",
    desc: "Machine Learning & Generative AI model integration, training, and deployment."
  },
  {
    year: "EXPERTISE",
    title: "Full-Stack Development",
    desc: "Modern web applications and backend systems using the MERN stack and Next.js."
  }
];

const JourneySection = () => {
  return (
    <section id="experience" className="relative w-full bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-24 border-b border-white/10 pb-8"
        >
          <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tighter text-white">
            THE JOURNEY
          </h2>
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 hidden md:block">
            EXPERIENCE
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col relative">
          {/* Vertical Line */}
          <div className="absolute left-2 md:left-30 top-4 bottom-4 w-px bg-white/10" />

          {journeyData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mb-16 last:mb-0 pl-8 md:pl-0"
            >
              {/* Node Point */}
              <div className="absolute left-1 md:left-29 top-2 md:top-auto w-2.25 h-2.25 rounded-full bg-white border-2 border-[#050505] z-10" />
              
              {/* Year / Tag */}
              <div className="md:w-25 shrink-0 text-left md:text-right hidden md:block">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                  {item.year}
                </span>
              </div>

              {/* Mobile Year */}
              <div className="md:hidden">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 md:pl-8">
                <h3 className="font-serif-elegant font-bold text-2xl md:text-3xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-white/50 font-light leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JourneySection;
