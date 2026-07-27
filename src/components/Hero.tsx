"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Circle,
  Database,
  FileSearch,
  MapPin,
  Presentation,
} from "lucide-react";
import { cvData, heroData } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

const workflow = [
  {
    icon: FileSearch,
    label: "Ask",
    value: "Define the business question",
  },
  {
    icon: Database,
    label: "Prepare",
    value: "Clean and structure the data",
  },
  {
    icon: BarChart3,
    label: "Analyze",
    value: "Find patterns and validate insights",
  },
  {
    icon: Presentation,
    label: "Explain",
    value: "Build a decision-ready story",
  },
];

function AnalysisVisual() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute -inset-px rounded-lg bg-linear-to-br from-beni/20 via-kin/10 to-transparent blur-sm" />

      <div className="relative overflow-hidden rounded-lg border border-susu/40 bg-tetsu shadow-2xl">
        <div className="flex items-center justify-between border-b border-susu/30 bg-sumi px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-beni/55" />
            <div className="h-2.5 w-2.5 rounded-full bg-kin/55" />
            <div className="h-2.5 w-2.5 rounded-full bg-take/55" />
          </div>
          <span className="font-mono text-[10px] tracking-wider text-hai/60">
            analytics_workflow
          </span>
        </div>

        <div className="p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-beni">
            {t("From raw data to action")}
          </p>
          <p className="mt-2 font-heading text-xl font-bold leading-snug text-shiro">
            {t("Analysis is useful when it helps someone decide.")}
          </p>

          <div className="mt-5 grid gap-2.5">
            {workflow.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.65 + index * 0.08 }}
                className="flex items-center gap-3 rounded-sm border border-susu/30 bg-sumi px-3 py-2.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-beni/20 bg-beni/10 text-beni">
                  <step.icon size={15} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-kin">
                    {t(step.label)}
                  </span>
                  <span className="block truncate text-xs text-hai">
                    {t(step.value)}
                  </span>
                </span>
                <CheckCircle2
                  size={14}
                  className="ml-auto shrink-0 text-take"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["SQL", "Python", "Excel", "Power BI", "Tableau"].map((tool) => (
              <span
                key={tool}
                className="rounded-sm border border-susu/35 bg-sumi px-2 py-1 font-mono text-[9px] text-hai"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-24 md:pb-28 md:pt-32">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-shiro) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="absolute left-[-8rem] top-1/4 h-96 w-96 rounded-full bg-beni/4 blur-[120px]" />
      <div className="absolute bottom-1/4 right-[-8rem] h-80 w-80 rounded-full bg-kin/4 blur-[100px]" />
      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-sumi to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-take/25 bg-take/10 px-3 py-1.5"
            >
              <Circle size={8} className="shrink-0 fill-take text-take" />
              <span className="truncate text-[10px] font-medium tracking-wide text-take sm:text-[11px]">
                {t(heroData.availability)}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-beni"
            >
              {heroData.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="hero-name font-heading text-4xl font-bold leading-[1.03] text-shiro sm:text-5xl md:text-6xl"
            >
              {heroData.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl font-heading text-2xl font-semibold leading-tight text-shiro/90 sm:text-3xl"
            >
              {t(heroData.headline)}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-hai md:text-base lg:mx-0"
            >
              {t(heroData.tagline)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-3 flex items-center justify-center gap-1.5 text-xs text-hai lg:justify-start"
            >
              <MapPin size={12} />
              {heroData.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href="#analytics"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-beni px-6 py-3 text-sm font-medium text-shiro shadow-lg shadow-beni/10 transition-colors hover:bg-beni-light"
              >
                {t("View Analytics Work")}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={cvData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-susu px-6 py-3 text-sm font-medium text-shiro transition-all hover:border-beni hover:bg-beni/5"
              >
                {t(cvData.label)}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

          </div>

          <div className="hidden justify-center lg:flex">
            <AnalysisVisual />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-hai"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            {t("Scroll")}
          </span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
