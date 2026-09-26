"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Database,
  GitMerge,
  Table2,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { engineeringFeature, engineeringProjects } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

const stageIcons = [Database, GitMerge, Table2];

function LinkIcon({ url, external }: { url: string; external: boolean }) {
  if (!external) return <ArrowRight size={12} />;
  if (url.includes("github.com")) return <SiGithub size={12} />;
  return <ArrowUpRight size={12} />;
}

export default function AnalyticsEngineering() {
  const { t } = useLanguage();
  return (
    <Section id="engineering">
      <SectionHeader
        label={t("Analytics Engineering")}
        title={t("Pipelines and Data Models Behind the Dashboards")}
        description={t(
          "Before a dashboard or analysis is possible, data has to be collected, cleaned, modeled, and stored. This is the engineering layer that keeps reporting reliable.",
        )}
      />

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        className="group overflow-hidden rounded-sm border border-susu/35 bg-tetsu transition-colors duration-300 hover:border-beni/35"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col p-6 md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-beni/25 bg-beni/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-beni">
                <GitMerge size={12} />
                {t(engineeringFeature.type)}
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold leading-tight text-shiro md:text-3xl">
              {engineeringFeature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-hai">
              {t(engineeringFeature.description)}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {engineeringFeature.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-susu/35 bg-sumi px-2 py-1 text-[10px] text-hai"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={engineeringFeature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 border-b border-beni/40 pb-1 text-xs font-semibold text-beni transition-colors hover:border-beni hover:text-beni-light"
            >
              {t(engineeringFeature.linkLabel)}
              <SiGithub size={13} />
            </a>
          </div>

          <div className="border-t border-susu/30 bg-sumi p-6 md:p-8 lg:border-l lg:border-t-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-hai/70">
              {t("Pipeline stages")}
            </p>

            <ol className="relative mt-5 space-y-5">
              <span
                aria-hidden="true"
                className="absolute bottom-5 left-5 top-5 w-px bg-susu/40"
              />
              {engineeringFeature.stages.map((stage, index) => {
                const StageIcon = stageIcons[index] ?? Database;
                return (
                  <motion.li
                    key={stage.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.35, delay: 0.15 + index * 0.1 }}
                    className="relative flex items-start gap-4"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-beni/25 bg-beni/10 text-beni">
                      <StageIcon size={16} />
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-kin">
                        {String(index + 1).padStart(2, "0")} · {t(stage.label)}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-hai">
                        {t(stage.detail)}
                      </span>
                    </span>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </motion.article>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {engineeringProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group flex flex-col rounded-sm border border-susu/30 bg-tetsu p-5 transition-colors duration-300 hover:border-beni/30"
          >
            <span className="mb-3 inline-flex w-fit items-center rounded-sm border border-susu/40 bg-sumi px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-hai/90">
              {t(project.type)}
            </span>
            <h3 className="text-sm font-semibold text-shiro">
              {project.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-hai/90">
              {t(project.description)}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-susu/35 bg-sumi px-2 py-0.5 text-[10px] text-hai"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="mt-5 inline-flex w-fit items-center gap-1.5 pt-1 text-xs font-medium text-beni underline-offset-4 transition-colors hover:text-beni-light hover:underline md:mt-auto"
            >
              {t(project.linkLabel)}
              <LinkIcon url={project.link} external={project.external} />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-6 inline-flex items-center gap-2 text-xs text-hai"
      >
        <BadgeCheck size={14} className="shrink-0 text-take" />
        {t("Supporting credential: SQL (Advanced) — HackerRank, Dec 2023")}
      </motion.p>
    </Section>
  );
}
