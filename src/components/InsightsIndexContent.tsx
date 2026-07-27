"use client";

import InsightCard from "./InsightCard";
import { insights } from "@/lib/insights";
import { useLanguage } from "@/lib/i18n";

export default function InsightsIndexContent() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="min-h-screen">
      <header className="border-b border-susu/20 px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-beni">
            {t("Analytics Journal")}
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-shiro md:text-6xl">
            {t("Insights behind the analysis.")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-hai md:text-lg">
            {t("Practical notes on analytical thinking, KPI design, data storytelling, and the business questions that shape useful dashboards.")}
          </p>
        </div>
      </header>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between border-b border-susu/25 pb-4">
            <h2 className="font-heading text-2xl font-bold text-shiro">
              {t("All insights")}
            </h2>
            <p className="text-xs text-hai/75">
              {insights.length} {t("articles")}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
