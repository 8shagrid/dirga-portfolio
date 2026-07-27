"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { experiences } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience">
      <SectionHeader
        label={t("Experience")}
        title={t("Data Experience Across Business & Research")}
        description={t("Hands-on work translating business questions into cleaned data, analysis, dashboards, and stakeholder-ready findings.")}
      />

      <div className="relative max-w-5xl">
        <div className="absolute left-4 top-3 bottom-3 hidden w-px bg-linear-to-b from-beni/50 via-susu/30 to-transparent md:block" />

        <div className="space-y-5 md:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid gap-3 md:grid-cols-[180px_1fr] md:gap-8 md:pl-12"
            >
              <div className="absolute left-0 top-1.5 hidden h-8 w-8 items-center justify-center rounded-sm border border-beni/30 bg-sumi md:flex">
                <span className="h-2 w-2 rounded-full bg-beni shadow-(--shadow-glow-beni)" />
              </div>

              <div className="md:pt-1">
                <span className="inline-flex rounded-sm border border-beni/20 bg-beni/10 px-2.5 py-1 font-mono text-[11px] font-medium text-beni">
                  {t(exp.period)}
                </span>
              </div>

              <article className="group relative overflow-hidden rounded-sm border border-susu/40 bg-tetsu p-5 transition-all duration-300 hover:border-beni/40 hover:bg-tetsu md:p-6">
                <div className="absolute inset-y-0 left-0 w-[2px] bg-beni/0 transition-colors duration-300 group-hover:bg-beni/60" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug text-shiro md:text-lg">
                      {t(exp.role)}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-hai">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 size={13} className="text-kin/70" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} className="text-beni/70" />
                        {t(exp.location)}
                      </span>
                    </div>
                  </div>

                  <span className="w-fit shrink-0 rounded-sm border border-susu/30 bg-sumi px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-hai">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-5 grid gap-2.5">
                  {exp.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-2.5 text-sm leading-relaxed text-hai"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-take"
                      />
                      <span>{t(detail)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
