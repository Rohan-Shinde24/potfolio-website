import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Copy, Check, Send } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

const InputField = ({ label, name, value, onChange, type = "text", isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-8">
      <label 
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-sm uppercase tracking-widest ${
          isFocused || value ? "-top-6 text-[#06B6D4] opacity-100" : "top-4 text-white/30 opacity-50"
        }`}
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#7C3AED] transition-all text-white font-light resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#7C3AED] transition-all text-white font-light"
        />
      )}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: isFocused ? "100%" : 0 }}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
      />
    </div>
  );
};

const MagneticButton = ({ children, onClick, className = "", type = "button" }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.4;
    const y = (clientY - (top + height / 2)) * 0.4;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "rohanshinde24@example.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="section-watermark">Contact</div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 w-full"
        >
          <p className="text-[#06B6D4] font-mono mb-2">05. Communication</p>
          <h2 className="text-5xl font-bold text-white font-space mb-12">Get In Touch.</h2>

          <form onSubmit={handleSubmit} className="glass-morphism p-10 rounded-3xl border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#06B6D4]/5 blur-[100px] pointer-events-none"></div>
             
             <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
             <InputField label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
             <InputField label="Message" name="message" value={form.message} onChange={handleChange} isTextArea={true} />

             <MagneticButton 
               type="submit"
               className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-xl font-bold font-space uppercase tracking-widest shadow-xl shadow-violet-500/20 flex items-center justify-center gap-3 group"
             >
               {loading ? "Transmitting..." : "Send Message"}
               <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </MagneticButton>
          </form>
        </motion.div>

        {/* Right Side: Visual & Socials */}
        <div className="flex-1 w-full flex flex-col items-center gap-12">
           {/* Rhombus Container */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
             className="w-64 h-64 glass-morphism border border-[#7C3AED]/30 flex items-center justify-center relative group"
           >
              <div className="-rotate-45 flex flex-col items-center text-center p-4">
                 <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">👋</div>
                 <h3 className="text-white font-space font-bold uppercase tracking-widest text-lg">Let's Build Something</h3>
                 <p className="text-white/40 text-xs mt-2 font-mono uppercase">Available for projects</p>
              </div>
              
              {/* Animated Rings */}
              <div className="absolute inset-0 border border-[#06B6D4]/20 animate-pulse"></div>
              <div className="absolute inset-[-10px] border border-[#7C3AED]/10 animate-pulse delay-500"></div>
           </motion.div>

           {/* Contact Info & Socials */}
           <div className="w-full max-w-sm space-y-6">
              <div className="glass-morphism p-6 rounded-2xl border border-white/5 flex items-center justify-between group">
                 <div>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em]">Email</p>
                    <p className="text-white font-medium">{email}</p>
                 </div>
                 <button 
                  onClick={copyToClipboard}
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#06B6D4]/20 transition-all text-[#06B6D4]"
                 >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                 </button>
              </div>

              <div className="flex justify-center gap-6">
                 {[
                   { icon: <Github size={24} />, link: "#", color: "#fff" },
                   { icon: <Linkedin size={24} />, link: "#", color: "#0077B5" },
                   { icon: <Twitter size={24} />, link: "#", color: "#1DA1F2" },
                 ].map((social, i) => (
                   <MagneticButton
                     key={i}
                     className="w-16 h-16 rounded-2xl glass-morphism border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all group"
                   >
                     <div className="relative z-10">{social.icon}</div>
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                   </MagneticButton>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
