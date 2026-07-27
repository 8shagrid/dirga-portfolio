"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { skillGroups } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills">
      <SectionHeader
        label={t("Core Capabilities")}
        title={t("Tools for Analysis, Reporting & Delivery")}
        description={t("A focused toolkit for turning raw information into reliable analysis, accessible dashboards, and clear recommendations.")}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: gi * 0.15 }}
          >
            <h3 className="text-sm font-semibold text-kin uppercase tracking-wider mb-4">
              {t(group.title)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-tetsu border border-susu/40 text-hai hover:text-shiro hover:border-beni/50 transition-colors duration-200 rounded-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
