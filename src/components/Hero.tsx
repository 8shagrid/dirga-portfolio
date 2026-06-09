"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Circle } from "lucide-react";
import { heroData } from "@/lib/data";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "4", label: "Products Launched" },
  { value: "20+", label: "ERP Modules" },
];

// Decorative terminal window for the right column
function CodeVisual() {
  const lines = [
    {
      indent: 0,
      keyword: "const",
      text: " developer",
      kwColor: "text-code-purple",
      textColor: "text-shiro/60",
    },
    {
      indent: 1,
      keyword: "",
      text: "name:",
      kwColor: "",
      textColor: "text-shiro/80",
    },
    {
      indent: 2,
      keyword: "",
      text: '"Dirga Halim Susilo",',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 1,
      keyword: "",
      text: "stack:",
      kwColor: "",
      textColor: "text-shiro/80",
    },
    {
      indent: 2,
      keyword: "",
      text: '["Next.js", "TypeScript",',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 2,
      keyword: "",
      text: ' "Python", "Supabase",',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 2,
      keyword: "",
      text: ' "TensorFlow", "Prisma"],',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 1,
      keyword: "",
      text: "role:",
      kwColor: "",
      textColor: "text-shiro/80",
    },
    {
      indent: 2,
      keyword: "",
      text: '"Full-Stack & AI Engineer",',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 1,
      keyword: "",
      text: "status:",
      kwColor: "",
      textColor: "text-shiro/80",
    },
    {
      indent: 2,
      keyword: "",
      text: '"available"',
      kwColor: "",
      textColor: "text-code-green",
    },
    {
      indent: 0,
      keyword: "};",
      text: "",
      kwColor: "text-code-purple",
      textColor: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Glow behind the card */}
      <div className="absolute -inset-px bg-linear-to-br from-beni/20 via-kin/10 to-transparent rounded-lg blur-sm" />

      <div className="relative bg-sumi border border-susu/40 rounded-lg overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-tetsu border-b border-susu/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-beni/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-kin/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-take/50" />
          </div>
          <span className="text-[10px] text-hai/40 ml-2 font-mono tracking-wider">
            developer.ts
          </span>
        </div>

        {/* Code body */}
        <div className="px-5 py-4 font-mono text-xs md:text-[13px] leading-[1.8]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.75 + i * 0.07 }}
              className="flex"
            >
              <span className="text-susu/30 shrink-0 mr-2 select-none">
                {String(i + 1).padStart(2, " ")}
              </span>
              <span className="text-susu/20 shrink-0 mr-1 select-none">│</span>
              <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                {line.keyword && (
                  <span className={line.kwColor}>{line.keyword}</span>
                )}
                <span className={line.textColor}>{line.text}</span>
              </span>
              {i === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    times: [0, 0.5, 0.5, 1],
                  }}
                  className="inline-block h-[18px] w-2 bg-shiro/75 ml-1 translate-y-0.5 align-middle"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-24 md:pt-32 md:pb-32">
      {/* Dot pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-shiro) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-beni/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-kin/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom fade */}
      <div className="hero-bottom-fade absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-sumi to-transparent pointer-events-none z-10" />

      {/* Left accent line */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-px h-40 bg-linear-to-b from-transparent via-beni/20 to-transparent hidden md:block" />

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* === Left Column === */}
          <div className="text-center lg:text-left">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-take/10 border border-take/20 rounded-full mb-8"
            >
              <Circle size={8} className="text-take fill-take" />
              <span className="text-[11px] text-take/80 font-medium tracking-wide">
                Available for product engineering, ERP, dashboard, and AI/data projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-5 font-heading whitespace-normal sm:whitespace-nowrap text-shiro"
            >
              <span className="hero-name bg-linear-to-r from-shiro via-shiro to-kin bg-clip-text in-[.dark]:text-transparent">
                {heroData.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5"
            >
              <div className="text-base sm:text-lg md:text-xl text-hai font-medium leading-relaxed text-center lg:text-left">
                <span className="text-beni">✦</span> Full-Stack Developer & AI
                Engineer
                <span className="text-hai/50 mx-2">|</span>
                Product-Minded Builder
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base text-hai max-w-lg mx-auto lg:mx-0 leading-relaxed mb-2"
            >
              {heroData.tagline}
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-hai mb-10"
            >
              <MapPin size={12} />
              {heroData.location}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-beni text-shiro font-medium text-sm rounded-sm hover:bg-beni-light transition-all duration-200 shadow-lg shadow-beni/10"
              >
                Explore Projects
                <ChevronDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-susu text-shiro font-medium text-sm rounded-sm hover:border-beni hover:bg-beni/5 transition-all duration-200"
              >
                Start a Project
                <span className="group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start flex-wrap sm:flex-nowrap gap-y-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="flex items-center"
                >
                  <div className="text-center px-2 sm:px-3 md:px-4">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-kin font-heading">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-hai uppercase tracking-wider mt-1 whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-6 sm:h-8 bg-susu/20" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* === Right Column: Code Visual === */}
          <div className="hidden lg:flex justify-center">
            <CodeVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-hai"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
