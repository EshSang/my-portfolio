"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      {/* Subtle gradient line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#8B5CF6] flex items-center justify-center font-bold text-white text-xs">
            ES
          </div> */}
          <p className="text-slate-500 text-sm">
            <span className="text-white font-semibold">Eshana Sangeeth</span>
            {" "}© {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/eshana-sangeeth/",              label: "LinkedIn", color: "#0A66C2" },
            { Icon: GithubIcon,   href: "https://github.com/EshSang",                label: "GitHub",   color: "#f1f5f9" },
            { Icon: Mail,         href: "mailto:eshanasangeeth11@email.com",  label: "Email",    color: "#F59E0B" },
          ].map(({ Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
              className="w-9 h-9 glass border border-white/8 rounded-lg flex items-center justify-center hover:border-white/15 transition-all"
            >
              <Icon size={16} style={{ color }} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 glass border border-white/8 rounded-xl text-xs text-slate-400 hover:text-white hover:border-white/15 transition-all"
        >
          <ArrowUp size={14} />
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
