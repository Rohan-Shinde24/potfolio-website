import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import project1Image from "../assets/project1aipowerrecruit.png";

const AnimatedTextFill = ({ text, className }) => {
  const [filledIndex, setFilledIndex] = useState(-1);
  const letters = Array.from(text);

  useEffect(() => {
    const interval = setInterval(() => {
      setFilledIndex((prev) => {
        if (prev >= letters.length + 10) { // Stay fully black for 10 ticks before resetting
          return -1;
        }
        return prev + 1;
      });
    }, 150); // Speed of letter fill
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <span className={className} style={{ WebkitTextStroke: "none" }}>
      {letters.map((char, index) => {
        const isFilled = index <= filledIndex;
        return (
          <span 
            key={index} 
            style={{ 
              color: isFilled ? "#0A0A0A" : "transparent",
              WebkitTextStroke: isFilled ? "2px white" : "2px #0A0A0A",
              transition: "all 0.1s" 
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-0 md:min-h-screen py-16 md:py-32 bg-[#FAFAFA] flex items-center justify-center relative z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            <div className="w-full lg:w-full pt-8 lg:pt-0">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 text-center lg:text-left">About Me</h2>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif-elegant leading-tight mb-3 text-center lg:text-left text-[#0A0A0A]">
                Hi, I am Rohan Shinde. 
              </h3>
              
              <h4 className="text-lg md:text-xl font-bold font-sans text-gray-500 tracking-wider uppercase mb-8 text-center lg:text-left">
                4th Year B.Tech <span className="text-black">AI & ML</span> Student
              </h4>
    
              
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed mb-8 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
                I am a passionate <strong className="font-medium text-black">MERN Stack Developer</strong> dedicated to building robust and scalable web applications. I bridge the gap between pixel-perfect frontend designs and powerful, advanced backend architectures.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a href="https://github.com/Rohan-Shinde24" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/rohan-shinde024" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#084e96] transition-colors shadow-lg shadow-[#0A66C2]/20">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export const SkillsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(12);

  const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "DaisyUI", icon: "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Microservices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    { name: "Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "Shadcn UI", icon: "https://ui.shadcn.com/favicon.ico" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    { name: "LangChain", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(9); // 9 items per slide on mobile (3x3 grid)
      } else {
        setItemsPerSlide(12); // 12 items on desktop
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(skills.length / itemsPerSlide);

  // Ensure current slide resets if screen resize reduces totalSlides
  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(totalSlides - 1);
    }
  }, [totalSlides, currentSlide]);

  return (
    <section id="skills" className="w-full py-16 md:py-32 bg-white overflow-hidden flex flex-col justify-center relative z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">My Arsenal</h2>
            <h3 className="text-5xl md:text-7xl font-black font-serif-elegant text-[#0A0A0A] flex items-center justify-center gap-4">
              My <AnimatedTextFill text="Skills" className="font-serif-elegant font-black italic text-outline-dark text-7xl md:text-9xl tracking-normal inline-block" />
            </h3>
          </div>
        </AnimatedSection>
        
        {/* Paginated Slider */}
        <div className="w-full overflow-hidden py-10 relative">
          <motion.div 
            className="flex w-full"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 px-2">
                {skills.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 sm:gap-4 group cursor-default w-[28%] sm:w-24 md:w-32">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-3 sm:p-4 bg-[#FAFAFA] rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110" 
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-black font-bold text-[10px] sm:text-xs md:text-sm tracking-wider uppercase transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots/Numbers */}
        <div className="flex justify-center items-center gap-3 md:gap-4 mt-8 flex-wrap">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-300 ${currentSlide === idx ? 'bg-black text-white scale-110 shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Power Recruit",
      image: project1Image,
      desc: "An advanced AI-driven MERN stack platform where HR professionals can create jobs and students can apply. Features include an AI Resume ATS evaluator, auto-generated aptitude tests, and seamless AI integrations using LangChain for intelligent support.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Vite", "LangChain", "Vercel", "Render"],
      link: "https://ai-power-recruit.vercel.app/"
    },
    {
      id: 2,
      title: "Cargo Orbit AI",
      image: null,
      desc: "An AI-powered shipping platform to track ships, book boats and ships, check weather conditions, and find the shortest and safest routes.",
      stack: ["Next.js", "Tailwind CSS", "DaisyUI", "TypeScript", "MongoDB", "Redis", "Docker", "Node.js", "LangChain", "React.js", "React Hook Form", "Redux Toolkit", "Vercel", "Microservices", "WebSockets"],
      link: null
    },
    {
      id: 3,
      title: "Fake News Detection (My Own Trained Model)",
      image: null,
      desc: "A machine learning application where users can paste news articles to verify authenticity. Powered by a custom-built, proprietary neural network model developed entirely from scratch.",
      stack: ["Streamlit", "Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Neural Network", "Backpropagation"],
      link: null
    }
  ];

  return (
    <section id="projects" className="w-full min-h-0 md:min-h-screen py-16 md:py-32 bg-white flex items-center justify-center relative z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Selected Work</h2>
            <h3 className="text-5xl md:text-7xl font-black font-serif-elegant text-[#0A0A0A] flex items-center justify-center gap-4">
              My <AnimatedTextFill text="Projects" className="font-serif-elegant font-black italic text-outline-dark text-7xl md:text-9xl tracking-normal inline-block" />
            </h3>
          </div>
          
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-24 md:gap-32">
            {projects.map((project) => {
              const CardContent = (
                <>
                  <div className="mb-8">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Project {project.id}</span>
                    <h4 className="text-4xl font-bold font-serif-elegant mt-2 text-black">{project.title}</h4>
                    <p className="text-gray-600 font-normal mt-4 text-lg leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md uppercase tracking-wider border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-[80%] mx-auto aspect-video bg-[#FAFAFA] rounded-xl overflow-hidden relative group shadow-md border border-gray-200 p-2 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg">
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base">Image Coming Soon</span>
                      </div>
                    )}
                    {project.link && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-xl">
                        <span className="text-white font-serif-elegant text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          View Project
                        </span>
                      </div>
                    )}
                  </div>
                </>
              );

              return (
                <AnimatedSection key={project.id} className="flex flex-col gap-4">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex flex-col gap-4 group cursor-pointer">
                      {CardContent}
                    </a>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {CardContent}
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    
    // Construct Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rohan42455@gmail.com&su=Hire Me Request&body=${encodeURIComponent(message)}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full py-16 md:py-32 bg-[#0A0A0A] text-white flex items-center justify-center relative z-10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto w-full">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Let's Work Together</h2>
              <h3 className="text-5xl md:text-7xl font-black font-serif-elegant text-white">
                Hire <span className="font-sans font-black text-outline-premium text-transparent text-6xl md:text-8xl uppercase tracking-tighter">Me</span>
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-400 font-medium">Tell me about your project</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Rohan, I have an amazing project for you..."
                  className="w-full h-40 bg-[#111111] border border-[#333333] rounded-xl p-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
              >
                Send Message via Gmail
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
