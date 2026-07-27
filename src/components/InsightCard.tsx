"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Insight } from "@/lib/insights";
import { useLanguage } from "@/lib/i18n";

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const { t, language } = useLanguage();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-susu/35 bg-tetsu transition-colors duration-300 hover:border-beni/45">
      <Link
        href={`/insights/${insight.slug}`}
        className="relative block aspect-video overflow-hidden border-b border-susu/25 bg-sumi"
        aria-label={`${t("Read insight")}: ${t(insight.title)}`}
      >
        <Image
          src={insight.image}
          alt={t(insight.imageAlt)}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-sumi/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-beni">
            {t(insight.category)}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] text-hai/75">
            <Clock3 size={12} />
            {language === "id"
              ? insight.readingTime.replace("min read", "menit baca")
              : insight.readingTime}
          </span>
        </div>

        <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-shiro transition-colors group-hover:text-kin md:text-2xl">
          <Link href={`/insights/${insight.slug}`}>{t(insight.title)}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-hai">
          {t(insight.excerpt)}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {insight.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-sm border border-susu/35 bg-sumi px-2 py-1 text-[10px] text-hai"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-susu/25 pt-4">
          <time
            dateTime={insight.publishedAt}
            className="text-[11px] text-hai/75"
          >
            {new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            }).format(new Date(`${insight.publishedAt}T00:00:00Z`))}
          </time>
          <Link
            href={`/insights/${insight.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-beni transition-colors hover:text-beni-light"
            aria-label={`${t("Read insight")}: ${t(insight.title)}`}
          >
            {t("Read insight")}
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
