"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "id" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="inline-flex h-9 items-center gap-1.5 rounded-sm border border-susu/35 bg-sumi/50 px-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-hai transition-colors hover:border-beni/50 hover:text-shiro"
      aria-label={
        language === "en"
          ? "Switch language to Indonesian"
          : "Ganti bahasa ke Inggris"
      }
      title={
        language === "en"
          ? "Switch to Indonesian"
          : "Ganti ke Bahasa Inggris"
      }
    >
      <Languages size={14} />
      {language === "en" ? "ID" : "EN"}
    </button>
  );
}
