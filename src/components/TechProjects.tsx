"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { projects } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

function getLinkIcon(url: string) {
  if (url.includes("github.com")) return SiGithub;
  return ExternalLink;
}

export default function TechProjects() {
  const { t } = useLanguage();
  return (
    <Section id="projects">
      <SectionHeader
        label={t("Supporting Data Projects")}
        title={t("Collection, Pipelines & Machine Learning")}
        description={t("Additional projects that demonstrate how I collect, prepare, store, and model data before it reaches an analysis or dashboard.")}
      />

      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 bg-tetsu border border-susu/30 rounded-sm hover:border-beni/30 hover:bg-tetsu transition-all duration-300">
              {/* Left accent line */}
              <div className="hidden md:block w-[2px] self-stretch bg-beni/0 group-hover:bg-beni/30 transition-colors duration-300 rounded-full" />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-sm font-semibold text-shiro">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-hai/85 mb-2">{t(project.type)}</p>
                <p className="text-sm text-hai/90 leading-relaxed mb-3">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 bg-sumi border border-susu/40 text-hai/90 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.link &&
                (() => {
                  const LinkIcon = getLinkIcon(project.link);
                  return (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-beni hover:text-beni-light underline-offset-4 hover:underline transition-colors"
                    >
                      {t(project.linkLabel ?? "")}
                      <LinkIcon size={11} />
                    </a>
                  );
                })()}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
