"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { analyticsCaseStudies } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function FeaturedAnalytics() {
  const { t } = useLanguage();
  return (
    <Section id="analytics" bordered={false}>
      <SectionHeader
        label={t("Selected Analytics Work")}
        title={t("Dashboards Built Around Business Questions")}
        description={t("Each case study starts with a decision to support—not merely a chart to build. The work covers data preparation, KPI design, analysis, visualization, and stakeholder-ready reporting.")}
      />

      <div className="space-y-6">
        {analyticsCaseStudies.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-sm border border-susu/35 bg-tetsu transition-colors duration-300 hover:border-beni/35"
          >
            <div className="grid lg:grid-cols-[1.03fr_0.97fr]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.linkLabel}: ${project.title}`}
                className={`relative block min-h-64 overflow-hidden border-susu/30 bg-sumi lg:min-h-full ${
                  index % 2 === 1
                    ? "lg:order-2 lg:border-l"
                    : "lg:border-r"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </a>

              <div
                className={`flex flex-col p-6 md:p-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-sm border border-beni/25 bg-beni/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-beni">
                    <BarChart3 size={12} />
                    {t(project.type)}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold leading-tight text-shiro md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-hai">
                  {t(project.description)}
                </p>

                <div className="mt-5 rounded-sm border border-kin/20 bg-kin/5 p-4">
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-kin">
                    <HelpCircle size={13} />
                    {t("Business question")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-shiro/90">
                    {t(project.businessQuestion)}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-sm border border-susu/30 bg-sumi">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metric.label}
                      className={`p-3 ${
                        metricIndex > 0 ? "border-l border-susu/30" : ""
                      }`}
                    >
                      <p className="font-heading text-base font-bold text-kin sm:text-lg">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[9px] uppercase leading-snug tracking-[0.08em] text-hai">
                        {t(metric.label)}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2">
                  {project.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex gap-2 text-xs leading-relaxed text-hai"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-take"
                      />
                      <span>{t(deliverable)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-susu/35 bg-sumi px-2 py-1 text-[10px] text-hai"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-beni/40 pb-1 text-xs font-semibold text-beni transition-colors hover:border-beni hover:text-beni-light"
                >
                  {t(project.linkLabel)}
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
