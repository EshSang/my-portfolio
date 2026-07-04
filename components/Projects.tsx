"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "Wage Worker Management System",
    desc: "The Wage Worker Management System is a digital platform that connects customers with skilled workers through efficient job matching, secure payments, and a reliable feedback system.",
    tech: ["React.js" , "Node.js" ,"Tailwind CSS", "MySQL", "REST API"],
    gradient: "from-[#14B8A6]/20 to-[#14B8A6]/20",
    accent: "#14B8A6",
    icon: "👷🏼",
  },
  {
    title: "Supplier Portal System",
    desc: "Supplier Portal System enables suppliers to log in, submit quotations, receive POs from Business Central, and manage approval workflows efficiently.",
    tech: ["Power Apps", "SharePoint", "Power Automate", "SQL Server" , "REST API", "React.js", "Next.js" , "Node.js" ,"Tailwind CSS"],
    gradient: "from-[#8B5CF6]/20 to-[#3B82F6]/20",
    accent: "#8B5CF6",
    icon: "🏭",
  },
  {
    title: "CV Management & Onboarding System",
    desc: "End-to-end recruitment and onboarding solution CV collection, and employee on-boarding using Power Apps and Power Automate.",
    tech: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
    gradient: "from-[#F59E0B]/20 via-[#EF4444]/10 to-[#8B5CF6]/20",
    accent: "#F59E0B",
    icon: "🗎",
    // featured: true,
  },
  {
    title: "Vehicle Parking Management",
    desc: "Real-time parking slot management system with QR-code entry/exit, reporting dashboards, and automated alerts.",
    tech: ["Power Apps", "Dataverse", "Power BI", "Azure"],
    gradient: "from-[#3B82F6]/20 to-[#06B6D4]/20",
    accent: "#3B82F6",
    icon: "🚗",
  },
  {
    title: "Vendor Management System",
    desc: "Comprehensive vendor lifecycle management covering registration, contract management, and performance tracking.",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    gradient: "from-[#22C55E]/20 to-[#3B82F6]/20",
    accent: "#22C55E",
    icon: "📦",
  },
  {
    title: "Restaurant Management System",
    desc: "Full-featured restaurant POS and management system with table booking, order management, and inventory control.",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    gradient: "from-[#EF4444]/20 to-[#F59E0B]/20",
    accent: "#EF4444",
    icon: "🍽️",
  },
  {
    title: "Event Registration System",
    desc: "Event management platform supporting multi-event registrations, QR ticket generation, and attendee management.",
    tech: ["Power Apps", "Power Automate", "SQL Server", "SharePoint"],
    gradient: "from-[#F59E0B]/15 to-[#8B5CF6]/15",
    accent: "#F59E0B",
    icon: "🎫",
  },
  {
    title: "Staff Loan System",
    desc: "Automated staff loan request, approval workflow, and repayment tracking system built on Power Platform.",
    tech: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"],
    gradient: "from-[#8B5CF6]/20 to-[#22C55E]/15",
    accent: "#8B5CF6",
    icon: "💳",
  },
  {
    title: "Food Cart System",
    desc: "Mobile-first food ordering and cart management system with real-time order status and payment integration.",
    tech: ["Power Apps", "Power Automate", "Dataverse"],
    gradient: "from-[#06B6D4]/15 to-[#3B82F6]/15",
    accent: "#06B6D4",
    icon: "🛒",
  },
];

function ProjectCard({
  project,
  delay,
  featured = false,
}: {
  project: (typeof projects)[0];
  delay: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`glass-strong border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300 relative overflow-hidden group 
        
        ${ featured ? "sm:col-span-1" : ""}
        `}
    
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />
      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/3 to-transparent" />

      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Icon + featured badge */}
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}
          >
            {project.icon}
          </div>
          {/* {featured && (
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}
            >
              Featured
            </span>
          )} */}
        </div>

        {/* Title & desc */}
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mt-2">{project.desc}</p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
              style={{
                background: `${project.accent}12`,
                color: project.accent,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        {/* <div className="flex gap-3 mt-auto pt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)` }}
          >
            <ExternalLink size={12} /> Live Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 transition-all"
          >
            <GithubIcon size={12} color="currentColor" /> GitHub
          </motion.button>
        </div> */}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
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
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white section-heading inline-block">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            A collection of enterprise and personal projects spanning Power Platform, web development, and full-stack applications.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={i * 0.07}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
