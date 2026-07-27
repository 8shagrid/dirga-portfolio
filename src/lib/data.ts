// ============================================
// Portfolio Data — Dirga Halim Susilo
// Data Analyst & Business Intelligence focus
// ============================================

export const heroData = {
  name: "Dirga Halim Susilo",
  role: "Data Analyst & Business Intelligence",
  headline: "Turning complex data into clear business decisions.",
  tagline:
    "I analyze business data, build interactive dashboards, and translate findings into practical recommendations using SQL, Python, Excel, Power BI, and Tableau.",
  availability: "Open to Data Analyst and Business Intelligence roles",
  location: "Medan, Indonesia",
};

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface AnalyticsCaseStudy {
  title: string;
  type: string;
  description: string;
  businessQuestion: string;
  deliverables: string[];
  metrics: CaseStudyMetric[];
  tech: string[];
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

export const analyticsCaseStudies: AnalyticsCaseStudy[] = [
  {
    title: "HR Analytics Dashboard",
    type: "Workforce Analytics",
    description:
      "An interactive workforce dashboard that turns employee records into a clear view of attrition, demographics, job satisfaction, and department-level patterns.",
    businessQuestion:
      "Which employee segments show higher attrition, and where should HR focus retention efforts?",
    deliverables: [
      "KPI summary for workforce size and attrition",
      "Segment analysis by age, education, job, and department",
      "Interactive slicers for stakeholder exploration",
    ],
    metrics: [
      { value: "588", label: "Employees analyzed" },
      { value: "15%", label: "Attrition rate" },
      { value: "501", label: "Active employees" },
    ],
    tech: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
      "Data Visualization",
    ],
    link: "https://github.com/8shagrid/hr-analytics-dashboard-excel",
    linkLabel: "View case study",
    image: "/screenshots/hr-analytics.webp",
    imageAlt:
      "HR analytics dashboard showing employee, attrition, demographic, and satisfaction metrics",
  },
  {
    title: "Car Sales Dashboard",
    type: "Sales Performance Analytics",
    description:
      "A sales dashboard designed to help management monitor revenue, unit volume, commissions, monthly trends, top models, and salesperson performance.",
    businessQuestion:
      "What drives sales performance, and which months, products, and salespeople contribute the most?",
    deliverables: [
      "Executive KPI cards for sales, units, and commission",
      "Monthly trend and product-mix analysis",
      "Salesperson ranking for performance review",
    ],
    metrics: [
      { value: "$31.48B", label: "Sales represented" },
      { value: "1.05M", label: "Units represented" },
      { value: "May", label: "Peak sales month" },
    ],
    tech: [
      "Microsoft Excel",
      "Pivot Tables",
      "Charts",
      "Conditional Formatting",
      "KPI Reporting",
    ],
    link: "https://github.com/8shagrid/car-sales-dashboard-excel",
    linkLabel: "View case study",
    image: "/screenshots/car-sales.webp",
    imageAlt:
      "Car sales dashboard showing revenue, units, commission, salespeople, models, and monthly trend",
  },
  {
    title: "Road Accident Dashboard",
    type: "Public Safety Analytics",
    description:
      "An interactive dashboard that summarizes road-casualty severity, monthly patterns, road types, lighting, surface conditions, and urban versus rural distribution.",
    businessQuestion:
      "Where and under what conditions are casualties concentrated, and which patterns deserve attention?",
    deliverables: [
      "Severity-based casualty KPI reporting",
      "Monthly, road-type, and environmental analysis",
      "Year and month filters for comparative exploration",
    ],
    metrics: [
      { value: "417,883", label: "Casualties represented" },
      { value: "7,135", label: "Fatal casualties" },
      { value: "61%", label: "Urban share" },
    ],
    tech: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
      "Data Storytelling",
    ],
    link: "https://github.com/8shagrid/road-accident-dashboard-excel",
    linkLabel: "View case study",
    image: "/screenshots/road-accident.webp",
    imageAlt:
      "Road accident dashboard showing casualty severity, trends, road types, lighting, surface, and location",
  },
];

export interface Product {
  title: string;
  role: string;
  description: string;
  analyticsAngle: string;
  tech: string[];
  link: string;
  linkLabel: string;
  image: string;
}

export const products: Product[] = [
  {
    title: "Seraya ERP",
    role: "Owner & Full-Stack Developer",
    description:
      "A production ERP for sales, cash flow, budgeting, production, reseller commissions, audit logs, and automated reporting.",
    analyticsAngle:
      "Designed the operational data structure and reporting flow used to monitor business performance across more than 20 modules.",
    tech: [
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Recharts",
      "Next.js",
      "TypeScript",
    ],
    link: "#contact",
    linkLabel: "Request a walkthrough",
    image: "/screenshots/seraya-erp.png",
  },
  {
    title: "SiapTempur.id",
    role: "Owner & Full-Stack Developer",
    description:
      "An online SKD practice platform with CAT-style scoring, timed exams, payment integration, and performance reporting.",
    analyticsAngle:
      "Built score summaries and visual reporting that help learners review section-level results and track readiness.",
    tech: [
      "Supabase",
      "Recharts",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Midtrans",
    ],
    link: "https://siaptempur.id",
    linkLabel: "View live product",
    image: "/screenshots/siaptempur.png",
  },
  {
    title: "PejuangKampus.co.id",
    role: "Freelance Full-Stack Developer",
    description:
      "An education platform covering online exams, question management, leaderboards, and digital learning workflows.",
    analyticsAngle:
      "Translated assessment and user activity into operational views for learners and the internal team.",
    tech: [
      "Supabase",
      "PostgreSQL",
      "Data Modeling",
      "Next.js",
      "TypeScript",
      "Recharts",
    ],
    link: "https://pejuangkampus.co.id",
    linkLabel: "View live product",
    image: "/screenshots/pejuangkampus.png",
  },
];

export interface Project {
  title: string;
  type: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Crypto Market ETL Pipeline",
    type: "Data Engineering / Analytics",
    description:
      "Extracts market data from the CoinGecko API, cleans and normalizes the response with Python, and prepares structured output for CSV or PostgreSQL-based analytics.",
    tech: ["Python", "Pandas", "SQLAlchemy", "PostgreSQL", "REST API", "ETL"],
    link: "https://github.com/8shagrid/etl-coingecko-pipeline",
    linkLabel: "View repository",
  },
  {
    title: "Tokopedia Review Scraper",
    type: "Market Research / Data Collection",
    description:
      "Collects product reviews, standardizes relative dates, and produces a clean dataset ready for sentiment analysis or e-commerce market research.",
    tech: ["Python", "Web Scraping", "Data Cleaning", "Text Data"],
    link: "https://github.com/8shagrid/tokopedia-review-scraper",
    linkLabel: "View repository",
  },
  {
    title: "SIBI Sign Language Detection",
    type: "Machine Learning",
    description:
      "A computer-vision workflow covering data collection, preprocessing, TensorFlow model training, and real-time inference for SIBI sign-language recognition.",
    tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Jupyter Notebook"],
    link: "https://github.com/8shagrid/sibi-sign-language-detection",
    linkLabel: "View repository",
  },
];

export const skillGroups = [
  {
    title: "Analysis & Business Intelligence",
    skills: [
      "SQL",
      "Microsoft Excel",
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Data Visualization",
      "Dashboard Design",
      "KPI Reporting",
    ],
  },
  {
    title: "Programming & Statistics",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Statistics",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Wrangling",
      "Scikit-learn",
    ],
  },
  {
    title: "Data & Product Systems",
    skills: [
      "PostgreSQL",
      "Supabase",
      "ETL Workflows",
      "REST APIs",
      "Recharts",
      "Streamlit",
      "Git",
      "Data Storytelling",
    ],
  },
];

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    period: "Jul 2024 — Present",
    role: "Freelance Data Analyst",
    company: "Remote / Various Clients",
    location: "Indonesia",
    details: [
      "Translate business needs into clear analytical questions and practical reporting requirements.",
      "Execute end-to-end analysis covering data collection, cleaning, transformation, exploration, and visualization.",
      "Build interactive dashboards with Excel, Power BI, Tableau, or Looker Studio to monitor KPIs and communicate findings.",
      "Present insights and recommendations that support marketing, operational, and sales decisions.",
    ],
  },
  {
    period: "Feb — Jul 2023",
    role: "Data Scientist Intern",
    company: "PT eBdesk Teknologi",
    location: "Tangerang Selatan",
    details: [
      "Supported election-data research through data cleaning, exploratory analysis, and feature preparation.",
      "Prepared preliminary charts and dashboard visuals to communicate patterns to the data science team.",
      "Assisted with preprocessing and parameter-tuning experiments under senior mentorship.",
    ],
  },
  {
    period: "Dec 2020 — Feb 2021",
    role: "HR Data Analyst Intern",
    company: "Santara",
    location: "Yogyakarta",
    details: [
      "Validated attendance, leave, and employee records in the HRIS to maintain data accuracy and completeness.",
      "Compiled employee-performance data into Excel reports and PivotTables for HR analysis.",
      "Categorized internal application feedback to help identify workflow and usability pain points.",
    ],
  },
  {
    period: "Aug 2022 — Jan 2023",
    role: "Head of Research, Yogyakarta Chapter",
    company: "Data Science Indonesia",
    location: "Yogyakarta",
    details: [
      "Led data science training, research discussions, and seminar programs with practitioners and community members.",
      "Coordinated data-literacy and visualization learning using practical tools including Looker Studio.",
    ],
  },
  {
    period: "Sep 2022 — Jan 2023",
    role: "Lecturer Assistant",
    company: "Universitas Teknologi Yogyakarta",
    location: "Yogyakarta",
    details: [
      "Facilitated practical classes, seminars, and training sessions for university students.",
      "Reviewed projects, practical assignments, and laboratory research activities.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Data Science",
  school: "Universitas Teknologi Yogyakarta",
  period: "Sep 2020 — Aug 2024",
  gpa: "3.77 / 4.00",
  thesis:
    "Developed and evaluated a CNN-based web sign-language translator, achieving high recognition accuracy on most static alphabet classes and identifying motion detection as a key direction for real-time improvement.",
  achievements: [
    "Lecturer Assistant (Sep 2022 — Jan 2023): facilitated practical learning, assessed projects, and supported laboratory activities.",
    "Head of Research, Data Science Indonesia Yogyakarta (Aug 2022 — Jan 2023): led seminars, training, and research-oriented community programs.",
  ],
};

export const certifications = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Dec 2023",
    credentialId: "47468dc16b59",
  },
  {
    title: "TensorFlow for Deep Learning Bootcamp",
    issuer: "Zero To Mastery Academy (Udemy)",
    date: "Aug 2023",
    credentialId: "UC-2e8d3c48-bd8f-40e7-a93c-965a6034627b",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Grow with Google (Coursera)",
    date: "Jan 2023",
    credentialId: "QAJBXXLX4PA7",
  },
  {
    title: "Complete A.I. & Machine Learning Bootcamp",
    issuer: "Zero To Mastery Academy (Udemy)",
    date: "Aug 2022",
    credentialId: "UC-c410785e-52f9-4f50-92ef-93566a29cea5",
  },
  {
    title: "Data Analyst Bootcamp",
    issuer: "365 Careers (Udemy)",
    date: "May 2022",
    credentialId: "UC-c5bfeb2e-13f6-428a-b5cb-82518e4b48f6",
  },
  {
    title: "ASEAN Data Science Explorers",
    issuer: "ASEAN Foundation",
    date: "Jan 2022",
  },
];

export const contactData = {
  email: "dirgahalimsusilo@gmail.com",
  phone: "+628****3590",
  phoneDisplay: "+62 823-6745-3590",
  whatsappPhone: "6282367453590",
  linkedin: "linkedin.com/in/dirgahalimsusilo",
  github: "github.com/8shagrid",
  website: "dirgahalimsusilo.site",
};

export const cvData = {
  label: "View Resume",
  url: "/cv-dirga-halim-susilo.pdf",
};

export const navLinks = [
  { label: "Analytics", href: "/#analytics" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/#contact" },
];
