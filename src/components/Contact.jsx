import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Copy, Check, Mail, ExternalLink, MessageCircle } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { MY_EMAIL } from "../constants";

const GITHUB_URL  = "https://github.com/Rohan-Shinde24";
const LINKEDIN_URL = "https://www.linkedin.com/in/rohan-shinde-24/";
const TWITTER_URL  = "https://twitter.com/";

const Contact = () => {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Opens Gmail compose with pre-filled data
  const handleSendGmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Hey Rohan, let's connect!");
    const body = encodeURIComponent(
      `Hi Rohan,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest regards,\n${form.name}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=${MY_EMAIL}&su=${subject}&body=${body}`, "_blank");
  };

  const socials = [
    { icon: <Github size={20} />, label: "GitHub",   link: GITHUB_URL,   color: "#fff",     bg: "hover:bg-white/10" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", link: LINKEDIN_URL, color: "#0A66C2",  bg: "hover:bg-blue-500/10" },
    { icon: <Twitter size={20} />, label: "Twitter",  link: TWITTER_URL,  color: "#1DA1F2",  bg: "hover:bg-sky-500/10" },
  ];

  return (
    <div className="relative">
      <div className="section-watermark">Contact</div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <p className="text-[#06B6D4] font-mono mb-2 tracking-widest text-sm uppercase">05. Communication</p>
        <h2 className="text-5xl font-bold text-white font-space">Get In Touch.</h2>
        <p className="text-white/40 mt-4 max-w-xl">
          Have a project in mind or just want to say hello? Fill the form and it'll open directly in Gmail — or reach me via the links below.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* LEFT: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <form onSubmit={handleSendGmail} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-white/3 border border-white/10 focus:border-[#7C3AED] rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none transition-all backdrop-blur-sm"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Project Collaboration / Freelance"
                className="w-full bg-white/3 border border-white/10 focus:border-[#7C3AED] rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none transition-all backdrop-blur-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/3 border border-white/10 focus:border-[#7C3AED] rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none transition-all resize-none backdrop-blur-sm"
              />
            </div>

            {/* Submit — opens Gmail */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white rounded-xl font-bold font-space uppercase tracking-widest shadow-xl shadow-violet-500/20 flex items-center justify-center gap-3 group"
            >
              <Mail size={18} />
              Open in Gmail
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <p className="text-center text-white/30 text-xs font-mono">
              This will open Gmail compose pre-filled with your message
            </p>
          </form>
        </motion.div>

        {/* RIGHT: Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 w-full flex flex-col gap-6"
        >
          {/* Availability badge */}
          <div className="glass-morphism border border-green-500/20 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50 shrink-0" />
            <div>
              <p className="text-green-400 font-bold font-space">Available for Projects</p>
              <p className="text-white/40 text-sm mt-0.5">Open to freelance &amp; full-time opportunities</p>
            </div>
          </div>

          {/* Email card */}
          <div className="glass-morphism border border-white/8 rounded-2xl p-6">
            <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em] mb-3">Direct Email</p>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${MY_EMAIL}`}
                className="text-white font-medium hover:text-[#06B6D4] transition-colors truncate"
              >
                {MY_EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className={`p-2.5 rounded-xl transition-all shrink-0 ${
                  copied ? "bg-green-500/20 text-green-400" : "bg-white/5 hover:bg-[#06B6D4]/20 text-[#06B6D4]"
                }`}
                title="Copy email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Quick Gmail compose button */}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${MY_EMAIL}&su=Let's%20collaborate!`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-2 text-[#06B6D4] text-sm font-mono hover:gap-3 transition-all"
            >
              <MessageCircle size={14} />
              Quick message via Gmail
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Start Project CTA */}
          <motion.a
            href={`mailto:${MY_EMAIL}?subject=Let's%20Start%20a%20Project&body=Hi%20Rohan%2C%20I%20have%20a%20project%20idea%20I%27d%20like%20to%20discuss!`}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(6,182,212,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="glass-morphism border border-[#06B6D4]/30 rounded-2xl p-6 flex items-center justify-between group cursor-pointer hover:border-[#06B6D4]/60 transition-all"
          >
            <div>
              <p className="text-white font-bold font-space text-lg">Start a Project</p>
              <p className="text-white/40 text-sm mt-0.5">Let's build something amazing together</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center group-hover:bg-[#06B6D4]/20 transition-all">
              <ExternalLink size={20} className="text-[#06B6D4]" />
            </div>
          </motion.a>

          {/* Social links */}
          <div className="glass-morphism border border-white/8 rounded-2xl p-6">
            <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em] mb-4">Find Me On</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  className={`flex-1 py-3 glass-morphism border border-white/10 rounded-xl flex flex-col items-center gap-2 transition-all ${s.bg}`}
                  style={{ color: s.color }}
                >
                  {s.icon}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
