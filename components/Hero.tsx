"use client";
import { motion } from "framer-motion";
import { Mail, Download, Eye, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" suppressHydrationWarning className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0b1e]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#F59E0B]/8 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#8B5CF6]/8 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-7"
        >
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#F59E0B]/20 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-sm text-[#F59E0B] font-medium">Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 font-medium"
          >
            Hi, I&apos;m Eshana&nbsp;👋
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight"
          >
            <span className="text-white">Power Platform</span>
            <br />
            <span className="gradient-text">Developer</span>
            <br />
            <span className="text-white text-3xl sm:text-4xl">&amp; Frontend Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            Building business applications, workflow automation, and modern web experiences
            with Power Platform, React, and Next.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {/* <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black font-semibold rounded-xl shadow-lg hover:shadow-[#F59E0B]/40 transition-all"
            >
              <Download size={16} /> Download Resume
            </motion.a> */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white font-semibold rounded-xl hover:border-[#F59E0B]/30 hover:bg-white/5 transition-all"
            >
              <Eye size={16} /> View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 glass border border-[#8B5CF6]/30 text-[#A78BFA] font-semibold rounded-xl hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/5 transition-all"
            >
              <ArrowRight size={16} /> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3"
          >
            {[
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/eshana-sangeeth/",      label: "LinkedIn", color: "#0A66C2" },
              { Icon: GithubIcon,   href: "https://github.com/EshSang",        label: "GitHub",   color: "#f1f5f9" },
              { Icon: Mail,         href: "mailto:eshanasangeeth11@email.com",   label: "Email",    color: "#F59E0B" },
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-11 h-11 glass border border-white/10 rounded-xl flex items-center justify-center hover:border-white/20 transition-all"
              >
                <Icon size={18} style={{ color }} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right – Profile card with floating badges ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-[340px] mx-auto" style={{ height: 460 }}>
            {/* Glow blob */}
            <div className="absolute inset-10 bg-gradient-to-br from-[#F59E0B]/25 to-[#8B5CF6]/25 rounded-3xl blur-3xl" />

            {/* Slow-rotating dashed ring */}
            <div
              className="absolute rounded-full border border-dashed border-white/10 animate-spin-slow pointer-events-none"
              style={{ inset: 16 }}
            />
            {/* Faster inner ring */}
            <div
              className="absolute rounded-full border border-[#F59E0B]/10 animate-spin-slow pointer-events-none"
              style={{ inset: 30, animationDuration: "12s", animationDirection: "reverse" }}
            />

            {/* Profile card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute glass-strong rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ inset: "40px 30px" }}
            >
              <img
                src="/profile.jpg"
                alt="Eshana Sangeeth"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600">scroll down</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"
          />
        </div>
      </motion.div>
    </section>
  );
}
