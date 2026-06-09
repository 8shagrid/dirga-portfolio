// ============================================
// Portfolio Data — Dirga Halim Susilo
// All content in one place for easy editing
// ============================================

// --- Hero ---
export const heroData = {
  name: "Dirga Halim Susilo",
  title: "Full-Stack Developer, AI Engineer\n& Data Specialist",
  tagline:
    "I build production-ready web applications, ERP systems, data dashboards, and AI solutions that help businesses move faster and make better decisions.",
  stats: [
    { label: "Live Products", value: "4" },
    { label: "GPA", value: "3.77" },
    { label: "Certifications", value: "6" },
    { label: "ERP Modules Built", value: "20" },
  ],
  location: "Medan, Indonesia",
};

// --- Featured Products ---
export interface Product {
  title: string;
  role: string;
  badge?: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  image: string;
}

export const products: Product[] = [
  {
    title: "SiapTempur.id",
    role: "Owner & Full-Stack Developer",
    description:
      "Platform tryout SKD CPNS berbasis web dengan penilaian standar CAT BKN, timer real-time, pembayaran Midtrans, dan pengalaman latihan yang ringan tanpa sistem langganan. Dibangun untuk membantu peserta berlatih lebih terarah sebelum ujian.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Midtrans",
      "Framer Motion",
      "Recharts",
    ],
    link: "https://siaptempur.id",
    linkLabel: "View Live Platform",
    image: "/screenshots/siaptempur.png",
  },
  {
    title: "PejuangKampus.co.id",
    role: "Freelance Full-Stack Developer",
    description:
      "Platform bimbingan belajar online untuk persiapan PTN dan sekolah kedinasan. Mencakup ujian online, manajemen soal, leaderboard, dan sistem pembelajaran digital yang siap digunakan siswa dan tim operasional.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Zustand",
      "Zod",
      "React Hook Form",
      "KaTeX",
    ],
    link: "https://pejuangkampus.co.id",
    linkLabel: "View Live Platform",
    image: "/screenshots/pejuangkampus.png",
  },
  {
    title: "Seraya ERP",
    role: "Owner & Full-Stack Developer",
    description:
      "Sistem ERP custom untuk operasional bisnis Seraya, dibangun solo dari nol hingga production. Mengelola dashboard, produksi, penjualan, cashflow, budgeting, bagi hasil, komisi reseller, audit logs, role-based access, analytics, dan reporting otomatis.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Shadcn UI",
      "TanStack Table",
      "Playwright",
    ],
    link: "#contact",
    linkLabel: "Request ERP Demo",
    image: "/screenshots/seraya-erp.png",
  },
  {
    title: "Seraya.my.id",
    role: "Owner & Full-Stack Developer",
    description:
      "Website studio undangan digital dan fisik untuk pernikahan, ulang tahun, aqiqah, dan khitanan. Menawarkan 150+ tema siap pakai, proses pemesanan yang jelas, dan pengalaman klien dengan rating 4.9.",
    tech: ["HTML5", "CSS3", "JavaScript", "Lucide Icons", "Vercel"],
    link: "https://seraya.my.id",
    linkLabel: "View Live Website",
    image: "/screenshots/seraya.png",
  },
];

// --- Tech Projects ---
export interface Project {
  title: string;
  type: string;
  description: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "CNN Sign Language Translator",
    type: "AI / Machine Learning",
    description:
      "Aplikasi machine learning berbasis CNN untuk mengenali alfabet bahasa isyarat dari dataset MNIST. Proyek riset ini membuktikan akurasi tinggi pada mayoritas huruf dan menjadi fondasi pengembangan deteksi gerakan real-time.",
    tech: ["Python", "TensorFlow", "CNN", "FastAPI", "React"],
    link: "https://github.com/8shagrid/sibi-sign-language-detection",
    linkLabel: "View Repository",
  },
  {
    title: "HR Analytics Dashboard",
    type: "Data Visualization",
    description:
      "Dashboard analitik HR untuk memantau attrition rate, demografi, pendidikan, gender, dan kepuasan kerja. Dirancang agar tim HR lebih cepat membaca tren workforce dan mengurangi waktu pembuatan laporan hingga 40%.",
    tech: ["Excel", "Pivot Tables", "Data Analysis", "Interactive Dashboard"],
    link: "https://github.com/8shagrid/hr-analytics-dashboard-excel",
    linkLabel: "View Repository",
  },
  {
    title: "Road Accident Dashboard",
    type: "Data Visualization",
    description:
      "Dashboard visualisasi data kecelakaan jalan berbasis Excel yang merangkum tren bulanan, jenis jalan, kondisi cahaya, permukaan jalan, dan lokasi kejadian untuk membantu analisis risiko secara cepat.",
    tech: [
      "Excel",
      "Data Visualization",
      "Interactive Dashboard",
      "Statistics",
    ],
    link: "https://github.com/8shagrid/road-accident-dashboard-excel",
    linkLabel: "View Repository",
  },
  {
    title: "Web Phishing Detection",
    type: "AI / Cybersecurity",
    description:
      "Sistem deteksi website phishing berbasis machine learning dengan ekstraksi fitur URL dan integrasi model ke aplikasi Django. Dibangun untuk membantu identifikasi ancaman lebih cepat pada level aplikasi web.",
    tech: ["Python", "Django", "Scikit-learn", "Feature Extraction", "SQLite"],
    link: "https://github.com/8shagrid",
    linkLabel: "GitHub Profile",
  },
  {
    title: "AI Chat / RAG App",
    type: "AI + Full-Stack",
    description:
      "Konsep aplikasi RAG untuk upload dokumen dan tanya jawab berbasis AI. Menggabungkan LLM, vector database, dan backend API agar jawaban lebih relevan terhadap konteks dokumen pengguna.",
    tech: ["LangChain", "OpenAI", "Pinecone", "Next.js", "FastAPI"],
    badge: "In Progress",
  },
  {
    title: "MLOps Pipeline Demo",
    type: "MLOps / DevOps",
    description:
      "Demo pipeline MLOps end-to-end untuk preprocessing data, training model, evaluasi, deployment, monitoring, dan CI/CD. Dirancang sebagai fondasi workflow machine learning yang lebih repeatable.",
    tech: ["Docker", "GitHub Actions", "FastAPI", "Scikit-learn"],
    badge: "Prototype",
  },
];

// --- Skills ---
export const skillGroups = [
  {
    title: "AI & Data Science",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Data Mining",
      "Predictive Modeling",
      "Data Visualization",
      "Power BI",
      "Tableau",
      "Streamlit",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Zustand",
      "Zod",
      "REST APIs",
      "Midtrans",
      "Docker",
      "Git",
      "Vercel",
    ],
  },
];

// --- Experience ---
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
    role: "Freelance Developer & Data Specialist",
    company: "Remote / Various Clients",
    location: "Indonesia",
    details: [
      "Mengelola siklus data end-to-end: collection, cleaning, transformation, analysis, dan insight generation.",
      "Membangun landing page, web application, dan internal tools menggunakan Next.js, React, Supabase, dan TypeScript.",
      "Mendesain dashboard interaktif untuk business intelligence menggunakan Power BI, Tableau, Looker Studio, dan Recharts.",
      "Mengembangkan dan mengoperasikan 4 produk digital sendiri sebagai founder sekaligus engineer.",
    ],
  },
  {
    period: "Feb — Jul 2023",
    role: "Data Scientist Intern",
    company: "PT eBdesk Teknologi",
    location: "Tangerang Selatan",
    details: [
      "Mendukung riset data pemilu melalui data cleaning, feature engineering, dan eksplorasi pola data.",
      "Membantu proses visualisasi dashboard dan workflow machine learning bersama tim data science.",
      "Berpartisipasi dalam eksperimen tuning parameter untuk meningkatkan performa model.",
    ],
  },
  {
    period: "Sep 2022 — Jan 2023",
    role: "Lecturer Assistant",
    company: "Universitas Teknologi Yogyakarta",
    location: "Yogyakarta",
    details: [
      "Mendampingi kelas, seminar, dan pelatihan dengan fokus pada pemahaman praktis mahasiswa.",
      "Menilai proyek mahasiswa, praktikum, serta aktivitas riset laboratorium.",
      "Memberikan bimbingan akademik dan membantu mahasiswa memahami materi secara praktis.",
    ],
  },
  {
    period: "Aug 2022 — Jan 2023",
    role: "Head of Research Chapter Yogyakarta",
    company: "Data Science Indonesia",
    location: "Yogyakarta",
    details: [
      "Mengelola arah riset dan program pembelajaran data science untuk chapter Yogyakarta.",
      "Mengoordinasikan seminar, pelatihan, dan diskusi riset bersama komunitas data.",
      "Mendorong kolaborasi antaranggota untuk membangun pemahaman praktis tentang data science.",
    ],
  },
  {
    period: "Dec 2020 — Feb 2021",
    role: "HR Data Analyst Intern",
    company: "Santara",
    location: "Yogyakarta",
    details: [
      "Melakukan input dan validasi data karyawan harian di sistem HRIS.",
      "Menyusun laporan Excel dan pivot table untuk mendukung analisis strategis HR.",
      "Terlibat dalam analisis UX aplikasi internal untuk meningkatkan alur kerja pengguna.",
    ],
  },
];

// --- Education ---
export const education = {
  degree: "Sarjana Sains Data (S1)",
  school: "Universitas Teknologi Yogyakarta",
  period: "Sep 2020 — Aug 2024",
  gpa: "3.77 / 4.00",
  thesis:
    "Riset translator bahasa isyarat berbasis web menggunakan CNN untuk mengenali alfabet bahasa isyarat dari dataset MNIST, mencapai akurasi tinggi pada mayoritas huruf, dan mengidentifikasi peluang pengembangan aplikasi real-time.",
  achievements: [
    "Asisten Dosen (Sep 2022 — Jan 2023): Memimpin sesi praktikum, membantu seminar, menilai proyek UTS/UAS, dan memberikan bimbingan akademik.",
    "Head of Research Chapter Yogyakarta — Data Science Indonesia (Aug 2022 — Jan 2023): Mengelola program seminar, pelatihan, dan riset data science untuk chapter Yogyakarta.",
  ],
};

// --- Certifications ---
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

// --- Contact ---
export const contactData = {
  email: "dirgahalimsusilo@gmail.com",
  phone: "+628****3590",
  phoneDisplay: "+62 823-6745-3590",
  whatsappPhone: "6282367453590",
  linkedin: "linkedin.com/in/dirgahalimsusilo",
  github: "github.com/8shagrid",
  website: "dirgahalimsusilo.site",
};

// --- CV Download ---
export const cvData = {
  label: "Download CV",
  url: "/cv-dirga-halim-susilo.pdf",
};

// --- Navigation ---
export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
