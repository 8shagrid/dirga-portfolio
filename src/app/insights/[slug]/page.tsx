import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LocalizedInsightArticle from "@/components/LocalizedInsightArticle";
import { getInsight, insights } from "@/lib/insights";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  return {
    title: `${insight.title} | Dirga Halim Susilo`,
    description: insight.excerpt,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.publishedAt,
      images: [{ url: insight.image, alt: insight.imageAlt }],
    },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const { default: PostEn } = await import(`@/content/insights/${slug}.mdx`);
  const { default: PostId } = await import(
    `@/content/insights/${slug}.id.mdx`
  );
  const relatedInsights = insights
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.publishedAt,
    author: {
      "@type": "Person",
      name: "Dirga Halim Susilo",
      url: "https://dirgahalimsusilo.site",
    },
    mainEntityOfPage: `https://dirgahalimsusilo.site/insights/${insight.slug}`,
  };

  return (
    <>
      <Navbar />
      <script
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <LocalizedInsightArticle
        insight={insight}
        articleEn={<PostEn />}
        articleId={<PostId />}
        relatedInsights={relatedInsights}
      />
      <Footer />
      <BackToTop />
    </>
  );
}
