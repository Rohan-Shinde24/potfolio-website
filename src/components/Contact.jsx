import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Copy, Check, Mail, ExternalLink } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { MY_EMAIL } from "../constants";

const GITHUB_URL  = "https://github.com/Rohan-Shinde24";
const LINKEDIN_URL = "https://www.linkedin.com/in/rohan-shinde-24/";

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

  const handleSendGmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Collaboration Inquiry");
    const body = encodeURIComponent(
      `Hi Rohan,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest regards,\n${form.name}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=${MY_EMAIL}&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          03 / Contact
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Let's Build Something <br />
          <span className="text-[var(--color-text-muted)]">Extraordinary.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSendGmail} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-standard"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Collaboration"
                  className="bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-standard"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="How can I help you?"
                className="bg-transparent border-b border-[var(--color-border)] py-4 text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-standard resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -4 }}
              className="mt-4 px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-bold flex items-center justify-center gap-3 w-fit transition-standard hover:shadow-xl"
            >
              <Mail size={18} />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 flex flex-col gap-10"
        >
          <div className="pro-card">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Direct Mail</h4>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-[var(--color-text)]">{MY_EMAIL}</p>
              <button 
                onClick={copyEmail}
                className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-standard"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          <div className="pro-card">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-6">Socials</h4>
            <div className="flex gap-6">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-standard">
                <Github size={24} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-standard">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl w-fit">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest">Available for work</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default SectionWrapper(Contact, "contact");

