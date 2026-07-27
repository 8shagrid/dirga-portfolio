"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <Section>
      <SectionHeader
        label={t("Certifications")}
        title={t("Verified Learning Credentials")}
        description={t("Certifications in SQL, data analytics, machine learning, and deep learning from recognized learning platforms.")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group bg-tetsu border border-susu/30 rounded-sm p-5 hover:border-kin/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-3">
              <Award size={16} className="text-kin shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-shiro group-hover:text-kin transition-colors duration-200 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-hai mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-hai">{t(cert.date)}</span>
                  {cert.credentialId && (
                    <span className="text-[10px] text-hai/60 font-mono">
                      {cert.credentialId.slice(0, 12)}...
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
