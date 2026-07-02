"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "eshanasangeeth11@email.com",
    href: "mailto:eshanasangeeth11@email.com",
    color: "#F59E0B",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 76 948 9097",
    href: "tel:+94769489097",
    color: "#8B5CF6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "https://maps.google.com/?q=Colombo,Sri+Lanka",
    color: "#3B82F6",
  },
];

const socials = [
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/eshana-sangeeth/", label: "LinkedIn", color: "#0A66C2" },
  { Icon: GithubIcon,   href: "https://github.com/EshSang",   label: "GitHub",   color: "#f1f5f9" },
  { Icon: Mail,         href: "mailto:eshanasangeeth11@email.com", label: "Email", color: "#F59E0B" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-1/2 w-[600px] h-64 bg-gradient-to-b from-[#F59E0B]/5 to-transparent rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5CF6]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white section-heading inline-block">
            Contact <span className="gradient-text">Info</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-lg mx-auto text-sm sm:text-base">
            Interested in working together or have a project in mind? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-strong border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-[#F59E0B] via-[#8B5CF6] to-[#3B82F6]" />
          {/* Background glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#F59E0B]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6">
            {/* Availability notice */}
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
              <p className="text-sm text-[#22C55E] font-medium">
                Currently open to full-time roles and freelance projects
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white font-medium text-sm sm:text-base">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Social links */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Connect on social</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center hover:border-white/20 transition-all"
                  >
                    <Icon size={20} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
