export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  tools: string[];
  image: string;
  imageAlt: string;
}

export const insights: Insight[] = [
  {
    slug: "finding-attrition-patterns-in-workforce-data",
    title: "Finding Attrition Patterns in Workforce Data",
    excerpt:
      "A practical walkthrough of turning employee records into focused retention questions, useful segments, and stakeholder-ready findings.",
    category: "Workforce Analytics",
    publishedAt: "2026-07-27",
    displayDate: "July 27, 2026",
    readingTime: "7 min read",
    tools: ["Excel", "Pivot Tables", "Data Storytelling"],
    image: "/screenshots/hr-analytics.webp",
    imageAlt:
      "HR analytics dashboard with workforce, attrition, demographic, and job-satisfaction analysis",
  },
  {
    slug: "designing-sales-kpis-that-support-decisions",
    title: "Designing Sales KPIs That Support Decisions",
    excerpt:
      "Why a useful sales dashboard needs more than revenue totals—and how trends, product mix, and contributor performance create context.",
    category: "Sales Analytics",
    publishedAt: "2026-07-20",
    displayDate: "July 20, 2026",
    readingTime: "8 min read",
    tools: ["Excel", "KPI Design", "Visualization"],
    image: "/screenshots/car-sales.webp",
    imageAlt:
      "Car sales dashboard with revenue, unit, commission, product, and salesperson performance",
  },
  {
    slug: "reading-road-safety-data-beyond-the-headline",
    title: "Reading Road Safety Data Beyond the Headline",
    excerpt:
      "An analytical framework for moving from a casualty total to patterns across severity, location, road type, and environmental conditions.",
    category: "Public Safety Analytics",
    publishedAt: "2026-07-13",
    displayDate: "July 13, 2026",
    readingTime: "8 min read",
    tools: ["Excel", "Exploratory Analysis", "Data Storytelling"],
    image: "/screenshots/road-accident.webp",
    imageAlt:
      "Road accident dashboard with casualty severity, monthly trends, road conditions, and location analysis",
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
