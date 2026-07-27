"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import InsightCard from "./InsightCard";
import type { Insight } from "@/lib/insights";
import { useLanguage } from "@/lib/i18n";

interface LocalizedInsightArticleProps {
  insight: Insight;
  articleEn: ReactNode;
  articleId: ReactNode;
  relatedInsights: Insight[];
}

export default function LocalizedInsightArticle({
  insight,
  articleEn,
  articleId,
  relatedInsights,
}: LocalizedInsightArticleProps) {
  const { language, t } = useLanguage();
  const formattedDate = new Intl.DateTimeFormat(
    language === "id" ? "id-ID" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    },
  ).format(new Date(`${insight.publishedAt}T00:00:00Z`));
  const readingTime =
    language === "id"
      ? insight.readingTime.replace("min read", "menit baca")
      : insight.readingTime;

  return (
    <main id="main-content">
      <article>
        <header className="border-b border-susu/20 px-6 pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-medium text-hai transition-colors hover:text-beni"
            >
              <ArrowLeft size={14} />
              {t("All insights")}
            </Link>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-beni">
              {t(insight.category)}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-shiro md:text-6xl">
              {t(insight.title)}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-hai">
              {t(insight.excerpt)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-susu/25 pt-5 text-xs text-hai/75">
              <span>{t("By")} Dirga Halim Susilo</span>
              <time
                dateTime={insight.publishedAt}
                className="inline-flex items-center gap-1.5"
              >
                <CalendarDays size={13} />
                {formattedDate}
              </time>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={13} />
                {readingTime}
              </span>
            </div>
            </div>

            <figure className="mt-10">
              <div className="relative aspect-video overflow-hidden rounded-sm border border-susu/35 bg-tetsu shadow-2xl">
                <Image
                  src={insight.image}
                  alt={t(insight.imageAlt)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain p-3 md:p-5"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] leading-relaxed text-hai/70">
                {t("Project dashboard used as the visual context for this analysis.")}
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            {language === "id" ? articleId : articleEn}
          </div>
        </div>
      </article>

      <section className="border-t border-susu/20 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-beni">
                {t("Continue reading")}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-shiro">
                {t("Related insights")}
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-xs font-semibold text-beni hover:text-beni-light"
            >
              {t("View all")}
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {relatedInsights.map((item) => (
              <InsightCard key={item.slug} insight={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
