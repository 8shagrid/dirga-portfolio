"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { education } from "@/lib/data";
import { GraduationCap, BookOpen } from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function Education() {
  const { t } = useLanguage();
  return (
    <Section>
      <SectionHeader
        label={t("Education")}
        title={t("Data Science Foundation")}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        className="bg-tetsu border border-susu/30 rounded-sm p-6"
      >
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-beni/10 border border-beni/20 rounded-sm shrink-0">
            <GraduationCap size={20} className="text-beni" />
          </div>
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="text-lg font-bold text-shiro">
                {t(education.degree)}
              </h3>
              <span className="text-xs px-2 py-0.5 bg-kin/10 text-kin border border-kin/20 rounded-sm font-medium">
                GPA {education.gpa}
              </span>
            </div>
            <p className="text-sm text-hai mb-3">
              {education.school} · {t(education.period)}
            </p>

            {/* Thesis */}
            <div className="flex items-start gap-2 mb-4 p-3 bg-sumi border border-susu/20 rounded-sm">
              <BookOpen size={14} className="text-kin shrink-0 mt-0.5" />
              <p className="text-sm text-hai/80 leading-relaxed">
                <span className="text-kin/80 font-medium">
                  {t("Thesis")}:{" "}
                </span>
                {t(education.thesis)}
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              {education.achievements.map((ach) => (
                <div key={ach} className="flex gap-2">
                  <span className="text-beni/40 mt-0.5 shrink-0 text-xs">
                    —
                  </span>
                  <p className="text-xs text-hai leading-relaxed">{t(ach)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
