"use client";
import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";

const timeline = [

  {
    company: "SRIQ Corporation",
    role: "Associate Low Code Engineer",
    period: "2025 – Present",
    color: "#F59E0B",
    achievements: [
      "Architecting enterprise-grade low-code solutions using Microsoft Power Platform",
      "Building custom connectors and PCF controls to extend platform capabilities",
      "Collaborating with cross-functional teams on digital transformation initiatives",
      "Developing full-stack features with React and Next.js for internal tooling",
    ],
  },
  {
    company: "OREL IT",
    role: "Associate Application Developer",
    period: "2023 – 2025",
    color:  "#3B82F6",
    achievements: [
      "Developed internal business tools using Power Apps canvas and model-driven applications",
      "Built automated workflows with Power Automate",
      "Integrate solutions with SharePoint, Dataverse, SQL, Dynamics 365, and APIs",
      "Gather business requirements and convert them into technical solutions.",
      "Provide support, enhancements, and maintenance for Power Platform solutions.",
      "Mentored junior developers on Power Platform best practices",
    ],
  },
  {
    company: "OREL IT",
    role: "Trainee Application Developer",
    period: "2022 – 2023",
    color: "#8B5CF6",
    achievements: [
      "Developed internal business tools using Power Apps canvas and model-driven applications",
      "Built automated workflows with Power Automate",
      "Integrate solutions with SharePoint, Dataverse, SQL, Dynamics 365, and APIs",
      "Provide support, enhancements, and maintenance for Power Platform solutions."
    ],
  },
  {
    company: "OREL IT",
    role: "Associate Image Processor",
    period: "2019 – 2021",
    color:  "#22C55E",
    achievements: [
      "Accurately annotate and label image and video data according to predefined guidelines and project requirements.",
      "Review and validate annotated data to ensure consistency, quality, and accuracy.",

    ],
  },
  
  
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#F59E0B]/6 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Career journey</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white section-heading inline-block">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B]/60 via-[#8B5CF6]/60 to-[#22C55E]/60" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#080808] shadow-lg mt-1.5 sm:mt-5 z-10"
                  style={{ background: item.color, boxShadow: `0 0 16px ${item.color}80` }}
                />

                {/* Card – offset to right of line on mobile, alternating on desktop */}
                <div
                  className={`ml-14 sm:ml-0 sm:w-[46%] ${
                    i % 2 === 0 ? "sm:mr-[54%]" : "sm:ml-[54%]"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="glass-strong border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Subtle gradient top line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                    />

                    {/* Date badge */}
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{
                        background: `${item.color}18`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <MapPin size={10} />
                      {item.period}
                    </div>

                    <h3 className="text-white font-bold text-lg leading-tight">{item.role}</h3>
                    <p className="text-sm font-semibold mt-0.5 mb-4" style={{ color: item.color }}>
                      {item.company}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {item.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                          <Zap size={12} className="mt-0.5 shrink-0" style={{ color: item.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
