import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden bg-white`}>
      <div
        className={`absolute top-[120px] left-1/2 -translate-x-1/2 w-full max-w-7xl ${styles.paddingX} flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10`}
      >
        <div className="flex-[0.75] mt-10 md:mt-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={`${styles.heroHeadText} text-gray-900`}>
              Hi, I'm <span className='purple-gradient'>Rohan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-600 max-w-lg`}>
              I develop professional web applications <br className='sm:block hidden' />
              with modern UI, sleek interactions, and scalable architectures.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#915EFF] hover:bg-[#804dee] text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-purple-500/30 transition-all transform hover:scale-105 hover:-translate-y-1">
                View My Work
              </button>
              <button className="bg-white border border-gray-200 text-gray-800 font-bold py-4 px-8 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-105 hover:-translate-y-1">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>

        {/* Profile Image with Pro Animation */}
        <div className="flex-1 w-full flex justify-center items-center mt-10 md:mt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Animated Background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Image Container */}
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
              <img 
                src={profile} 
                alt="Rohan Shinde" 
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Available for</p>
                <p className="text-gray-900 font-bold">New Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-full border-2 border-gray-400 flex justify-center items-start p-2 hover:border-purple-500 transition-colors'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-purple-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
