"use client";
import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Globe } from "lucide-react";

const stats = [
  { icon: Calendar,     label: "Years of Experience", value: "4+",           color: "#F59E0B" },
  { icon: Briefcase,    label: "Current Company",      value: "SRIQ",    color: "#8B5CF6" },
  { icon: GraduationCap,label: "Education",            value: "Bachelor of Information Technology",     color: "#3B82F6" },
  { icon: Globe,        label: "Freelance",            value: "Available",    color: "#22C55E" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#8B5CF6]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 section-heading inline-block">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 to-[#8B5CF6]/20 rounded-3xl blur-2xl scale-110" />
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-14 h-14 border-l-2 border-t-2 border-[#F59E0B]/50 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 border-r-2 border-b-2 border-[#8B5CF6]/50 rounded-br-2xl" />

              <div className="relative w-full h-full glass-strong rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Eshana Sangeeth"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right – content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass border border-white/8 rounded-2xl p-4 flex flex-col gap-2"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}20` }}
                  >
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">{s.label}</p>
                  <p className="text-white font-bold text-base text-[14px]">{s.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <div className="glass border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-semibold text-lg">
                Power Platform Developer &amp; Web Developer
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                I specialise in creating scalable business applications and workflow automation
                solutions using Microsoft Power Platform while also building modern web applications
                with React and Next.js. With over 4 years of experience across enterprise and product
                companies, I bridge the gap between low-code and full-code development.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                My journey spans from image processing(data entry) to application development, culminating in
                my current role as a Low Code Engineer at SRIQ Corporation where I design and deliver end-to-end business solutions.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Power Platform", "React", "Next.js", "SharePoint", "Azure", "Laravel"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      color: "#F59E0B",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
