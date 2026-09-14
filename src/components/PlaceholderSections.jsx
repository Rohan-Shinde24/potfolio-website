import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

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
    <section id="contact" className="w-full py-16 md:py-32 bg-[#000000] text-white flex items-center justify-center relative z-10 border-t border-gray-800">
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
