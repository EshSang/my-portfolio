"use client";
import { motion } from "framer-motion";

interface Skill {
  name: string;
}

const categories: { title: string; color: string; icon: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    color: "#3B82F6",
    icon: "💻",
    skills: [
      { name: "HTML / CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Power Platform",
    color: "#8B5CF6",
    icon: "⚡",
    skills: [
      { name: "Power Apps" },
      { name: "Power Automate" },
      { name: "SharePoint" },
      { name: "Dataverse" },
    ],
  },
  {
    title: "Backend",
    color: "#F59E0B",
    icon: "🛠️",
    skills: [
      { name: "Node.js" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "C#" },
    ],
  },
  {
    title: "Databases",
    color: "#FB7185",
    icon: "🛢",
    skills: [
      { name: "MySQL" },
      { name: "SQL Server" },
    ],
  },
  {
    title: "Tools & Cloud",
    color: "#22C55E",
    icon: "☁️",
    skills: [
      { name: "Git" },
      { name: "Azure" },
    ],
  },
];

function SkillTag({ name, color }: Skill & { color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-200 transition-all cursor-default"
      style={{ background: `${color}10`, border: `1px solid ${color}25` }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
      {name}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#111111]">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6]/6 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#8B5CF6]/6 rounded-full blur-3xl" />
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
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white section-heading inline-block">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass border border-white/8 rounded-2xl p-6 flex flex-col gap-5 hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20"
                style={{ background: cat.color }}
              />

              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-base">{cat.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-col gap-2">
                {cat.skills.map((s) => (
                  <SkillTag key={s.name} {...s} color={cat.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech icon cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 glass border border-white/8 rounded-2xl p-6 flex flex-wrap justify-center gap-3"
        >
          {[
            "HTML","CSS","JavaScript","TypeScript","React.js","Next.js","Tailwind","Bootstrap",
            "Power Apps","Power Automate","SharePoint","Dataverse","PHP","Laravel","Node.js",
            "MySQL","SQL Server","C#","Git","Azure","REST API",
          ].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 cursor-default"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
