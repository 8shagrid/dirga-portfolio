"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import InsightCard from "./InsightCard";
import { insights } from "@/lib/insights";
import { useLanguage } from "@/lib/i18n";

export default function LatestInsights() {
  const { t } = useLanguage();
  return (
    <Section id="insights">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          label={t("Latest Insights")}
          title={t("Analysis Beyond the Dashboard")}
          description={t("Practical notes on analytical thinking, KPI design, data storytelling, and the business questions behind the work.")}
        />
        <Link
          href="/insights"
          className="mb-12 inline-flex w-fit items-center gap-2 border-b border-beni/40 pb-1 text-xs font-semibold text-beni transition-colors hover:border-beni hover:text-beni-light md:mb-16"
        >
          {t("View all insights")}
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {insights.slice(0, 3).map((insight) => (
          <InsightCard key={insight.slug} insight={insight} />
        ))}
      </div>
    </Section>
  );
}
