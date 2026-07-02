"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Web Design for Beginners",   issuer: "Coursera",          icon: "🎨", color: "#3B82F6" },
  { title: "Introduction to Java",        issuer: "SoloLearn",         icon: "☕", color: "#F59E0B" },
  { title: "HTML Fundamentals",           issuer: "SoloLearn",         icon: "🌐", color: "#EF4444" },
  { title: "PHP Course",                  issuer: "SoloLearn",         icon: "🐘", color: "#8B5CF6" },
  { title: "React – The Complete Guide",  issuer: "Udemy",             icon: "⚛️", color: "#61DAFB" },
  { title: "AWS Cloud 101",               issuer: "AWS",               icon: "☁️", color: "#FF9900" },
  { title: "Power Platform Fundamentals", issuer: "Microsoft",         icon: "⚡", color: "#742774" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#111111]">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white section-heading inline-block">
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="glass border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/18 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />
              {/* BG glow */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: cert.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-semibold text-sm leading-snug">{cert.title}</h3>
                <p className="text-xs mt-1 font-medium" style={{ color: cert.color }}>{cert.issuer}</p>
              </div>

              {/* Award badge */}
              <div className="flex items-center gap-1.5 mt-auto">
                <Award size={12} style={{ color: cert.color }} />
                <span className="text-[11px] text-slate-500">Certified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
