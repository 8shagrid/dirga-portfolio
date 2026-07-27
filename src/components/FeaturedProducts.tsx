"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { products } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function FeaturedProducts() {
  const { t } = useLanguage();
  return (
    <Section id="products" bordered={false}>
      <SectionHeader
        label={t("Product & Systems Experience")}
        title={t("Data-Enabled Products in Production")}
        description={t("Beyond standalone dashboards, I have designed the data models, reporting flows, and operational views behind live digital products.")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-tetsu border border-susu/30 rounded-sm overflow-hidden hover:border-beni/30 transition-all duration-300"
          >
            {/* Red accent top line on hover */}
            <div className="absolute top-0 left-0 right-0 z-10 h-[2px] bg-beni scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Product Screenshot */}
            <a
              href={product.link}
              target={product.link.startsWith("http") ? "_blank" : undefined}
              rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative block aspect-16/10 overflow-hidden bg-sumi"
              aria-label={`${product.linkLabel} — ${product.title}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-tetsu via-tetsu/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="flex h-full flex-col p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-shiro group-hover:text-beni transition-colors duration-200">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-xs text-hai/85 mt-1">{t(product.role)}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-hai/90 leading-relaxed mb-4">
                {t(product.description)}
              </p>

              <div className="mb-4 rounded-sm border border-kin/20 bg-kin/5 p-3">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-kin">
                  {t("Analytics contribution")}
                </p>
                <p className="text-xs leading-relaxed text-hai">
                  {t(product.analyticsAngle)}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {product.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 bg-sumi border border-susu/40 text-hai/90 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={product.link}
                target={product.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-sm border border-beni/45 px-3 py-2 text-xs font-medium text-beni transition-colors hover:bg-beni hover:text-shiro group/link"
              >
                {t(product.linkLabel)}
                {product.link.startsWith("http") ? (
                  <ExternalLink
                    size={12}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                ) : (
                  <ArrowRight
                    size={12}
                    className="group-hover/link:translate-x-0.5 transition-transform"
                  />
                )}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
