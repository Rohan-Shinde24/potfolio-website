import React, { useState } from "react";
import { Github, Linkedin, Copy, Check, Mail } from "lucide-react";
import { MY_EMAIL } from "../constants";
import Button from "./Button";

const GITHUB_URL = "https://github.com/Rohan-Shinde24";
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
    <section className="relative w-full min-h-screen py-16 sm:py-24 bg-white text-black overflow-hidden flex justify-center">
      
      {/* CSS Dot Grid Background matching the image */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
        
        <div>
          {/* Header Section */}
          <div className="mb-20">
            <h3 className="text-blue-600 font-mono text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
              03 / Contact
            </h3>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Let's Build Something <br />
              <span className="text-gray-400 font-medium">Extraordinary.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSendGmail} className="flex flex-col gap-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-transparent border-b border-gray-200 py-3 text-lg text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors rounded-none"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Collaboration"
                      className="bg-transparent border-b border-gray-200 py-3 text-lg text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={1}
                    placeholder="How can I help you?"
                    className="bg-transparent border-b border-gray-200 py-3 text-lg text-black placeholder:text-gray-400 outline-none focus:border-black transition-colors resize-none rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  icon={Mail}
                  className="mt-4"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column: Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Email Card */}
              <div className="pro-card h-auto">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                  Direct Mail
                </h4>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm sm:text-lg font-medium text-black break-all">
                    {MY_EMAIL}
                  </p>
                  <button 
                    onClick={copyEmail}
                    className="p-2 text-gray-400 hover:text-black transition-colors shrink-0"
                  >
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              {/* Socials Card */}
              <div className="pro-card h-full">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                  Socials
                </h4>
                <div className="flex gap-8">
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-all hover:scale-110">
                    <Github size={32} strokeWidth={1.5} />
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-all hover:scale-110">
                    <Linkedin size={32} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Availability Badge - Bottom Right */}
        <div className="flex justify-end mt-16">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Available for work
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;