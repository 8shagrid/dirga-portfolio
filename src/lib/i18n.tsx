"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

const idTranslations: Record<string, string> = {
  Analytics: "Analitik",
  Projects: "Proyek",
  Skills: "Keahlian",
  Experience: "Pengalaman",
  Insights: "Wawasan",
  Contact: "Kontak",
  "View Resume": "Lihat CV",
  "Open to Data Analyst and Business Intelligence roles":
    "Terbuka untuk posisi Data Analyst dan Business Intelligence",
  "Turning complex data into clear business decisions.":
    "Mengubah data kompleks menjadi keputusan bisnis yang jelas.",
  "I analyze business data, build interactive dashboards, and translate findings into practical recommendations using SQL, Python, Excel, Power BI, and Tableau.":
    "Saya menganalisis data bisnis, membangun dashboard interaktif, dan menerjemahkan temuan menjadi rekomendasi praktis menggunakan SQL, Python, Excel, Power BI, dan Tableau.",
  "View Analytics Work": "Lihat Karya Analitik",
  Scroll: "Gulir",
  "From raw data to action": "Dari data mentah menuju tindakan",
  "Analysis is useful when it helps someone decide.":
    "Analisis menjadi berguna ketika membantu seseorang mengambil keputusan.",
  Ask: "Tentukan",
  "Define the business question": "Rumuskan pertanyaan bisnis",
  Prepare: "Siapkan",
  "Clean and structure the data": "Bersihkan dan susun data",
  Analyze: "Analisis",
  "Find patterns and validate insights": "Temukan pola dan validasi wawasan",
  Explain: "Jelaskan",
  "Build a decision-ready story": "Bangun narasi yang siap digunakan",
  "Selected Analytics Work": "Karya Analitik Pilihan",
  "Dashboards Built Around Business Questions":
    "Dashboard yang Dibangun dari Pertanyaan Bisnis",
  "Each case study starts with a decision to support—not merely a chart to build. The work covers data preparation, KPI design, analysis, visualization, and stakeholder-ready reporting.":
    "Setiap studi kasus dimulai dari keputusan yang perlu didukung, bukan sekadar grafik yang perlu dibuat. Pekerjaan ini mencakup persiapan data, perancangan KPI, analisis, visualisasi, dan pelaporan untuk pemangku kepentingan.",
  "Business question": "Pertanyaan bisnis",
  "View case study": "Lihat studi kasus",
  "Workforce Analytics": "Analitik Tenaga Kerja",
  "Sales Performance Analytics": "Analitik Kinerja Penjualan",
  "Public Safety Analytics": "Analitik Keselamatan Publik",
  "An interactive workforce dashboard that turns employee records into a clear view of attrition, demographics, job satisfaction, and department-level patterns.":
    "Dashboard tenaga kerja interaktif yang mengubah data karyawan menjadi gambaran jelas tentang attrition, demografi, kepuasan kerja, dan pola tiap departemen.",
  "Which employee segments show higher attrition, and where should HR focus retention efforts?":
    "Segmen karyawan mana yang memiliki attrition lebih tinggi, dan di mana HR perlu memusatkan upaya retensi?",
  "KPI summary for workforce size and attrition":
    "Ringkasan KPI jumlah tenaga kerja dan attrition",
  "Segment analysis by age, education, job, and department":
    "Analisis segmen berdasarkan usia, pendidikan, pekerjaan, dan departemen",
  "Interactive slicers for stakeholder exploration":
    "Slicer interaktif untuk eksplorasi pemangku kepentingan",
  "Employees analyzed": "Karyawan dianalisis",
  "Attrition rate": "Tingkat attrition",
  "Active employees": "Karyawan aktif",
  "A sales dashboard designed to help management monitor revenue, unit volume, commissions, monthly trends, top models, and salesperson performance.":
    "Dashboard penjualan yang membantu manajemen memantau pendapatan, volume unit, komisi, tren bulanan, model teratas, dan kinerja tenaga penjualan.",
  "What drives sales performance, and which months, products, and salespeople contribute the most?":
    "Apa yang mendorong kinerja penjualan, serta bulan, produk, dan tenaga penjualan mana yang berkontribusi paling besar?",
  "Executive KPI cards for sales, units, and commission":
    "Kartu KPI eksekutif untuk penjualan, unit, dan komisi",
  "Monthly trend and product-mix analysis":
    "Analisis tren bulanan dan bauran produk",
  "Salesperson ranking for performance review":
    "Peringkat tenaga penjualan untuk evaluasi kinerja",
  "Sales represented": "Nilai penjualan",
  "Units represented": "Unit terjual",
  "Peak sales month": "Bulan penjualan tertinggi",
  "An interactive dashboard that summarizes road-casualty severity, monthly patterns, road types, lighting, surface conditions, and urban versus rural distribution.":
    "Dashboard interaktif yang merangkum tingkat keparahan korban kecelakaan, pola bulanan, jenis jalan, pencahayaan, kondisi permukaan, serta distribusi perkotaan dan pedesaan.",
  "Where and under what conditions are casualties concentrated, and which patterns deserve attention?":
    "Di mana dan dalam kondisi apa korban terkonsentrasi, serta pola mana yang perlu mendapat perhatian?",
  "Severity-based casualty KPI reporting":
    "Pelaporan KPI korban berdasarkan tingkat keparahan",
  "Monthly, road-type, and environmental analysis":
    "Analisis bulanan, jenis jalan, dan kondisi lingkungan",
  "Year and month filters for comparative exploration":
    "Filter tahun dan bulan untuk eksplorasi perbandingan",
  "Casualties represented": "Korban tercatat",
  "Fatal casualties": "Korban meninggal",
  "Urban share": "Proporsi perkotaan",
  "Latest Insights": "Wawasan Terbaru",
  "Analysis Beyond the Dashboard": "Analisis di Balik Dashboard",
  "Practical notes on analytical thinking, KPI design, data storytelling, and the business questions behind the work.":
    "Catatan praktis tentang pola pikir analitis, desain KPI, data storytelling, dan pertanyaan bisnis di balik setiap pekerjaan.",
  "View all insights": "Lihat semua wawasan",
  "Read insight": "Baca wawasan",
  "Finding Attrition Patterns in Workforce Data":
    "Menemukan Pola Attrition dalam Data Tenaga Kerja",
  "A practical walkthrough of turning employee records into focused retention questions, useful segments, and stakeholder-ready findings.":
    "Panduan praktis untuk mengubah data karyawan menjadi pertanyaan retensi yang terarah, segmentasi yang berguna, dan temuan siap disampaikan.",
  "Designing Sales KPIs That Support Decisions":
    "Merancang KPI Penjualan yang Mendukung Keputusan",
  "Why a useful sales dashboard needs more than revenue totals—and how trends, product mix, and contributor performance create context.":
    "Mengapa dashboard penjualan membutuhkan lebih dari total pendapatan, serta bagaimana tren, bauran produk, dan kinerja kontributor memberikan konteks.",
  "Reading Road Safety Data Beyond the Headline":
    "Membaca Data Keselamatan Jalan Lebih dari Sekadar Angka Utama",
  "An analytical framework for moving from a casualty total to patterns across severity, location, road type, and environmental conditions.":
    "Kerangka analitis untuk bergerak dari jumlah korban menuju pola tingkat keparahan, lokasi, jenis jalan, dan kondisi lingkungan.",
  "Supporting Data Projects": "Proyek Data Pendukung",
  "Collection, Pipelines & Machine Learning":
    "Pengumpulan, Pipeline & Machine Learning",
  "Additional projects that demonstrate how I collect, prepare, store, and model data before it reaches an analysis or dashboard.":
    "Proyek tambahan yang menunjukkan cara saya mengumpulkan, menyiapkan, menyimpan, dan memodelkan data sebelum digunakan dalam analisis atau dashboard.",
  "Data Engineering / Analytics": "Data Engineering / Analitik",
  "Market Research / Data Collection": "Riset Pasar / Pengumpulan Data",
  "View repository": "Lihat repositori",
  "Extracts market data from the CoinGecko API, cleans and normalizes the response with Python, and prepares structured output for CSV or PostgreSQL-based analytics.":
    "Mengambil data pasar dari API CoinGecko, membersihkan dan menormalisasi respons dengan Python, lalu menyiapkan keluaran terstruktur untuk analitik berbasis CSV atau PostgreSQL.",
  "Collects product reviews, standardizes relative dates, and produces a clean dataset ready for sentiment analysis or e-commerce market research.":
    "Mengumpulkan ulasan produk, menstandarkan tanggal relatif, dan menghasilkan dataset bersih untuk analisis sentimen atau riset pasar e-commerce.",
  "A computer-vision workflow covering data collection, preprocessing, TensorFlow model training, and real-time inference for SIBI sign-language recognition.":
    "Alur computer vision yang mencakup pengumpulan data, preprocessing, pelatihan model TensorFlow, dan inferensi real-time untuk pengenalan bahasa isyarat SIBI.",
  "Product & Systems Experience": "Pengalaman Produk & Sistem",
  "Data-Enabled Products in Production": "Produk Berbasis Data di Lingkungan Produksi",
  "Beyond standalone dashboards, I have designed the data models, reporting flows, and operational views behind live digital products.":
    "Selain dashboard mandiri, saya merancang model data, alur pelaporan, dan tampilan operasional di balik produk digital yang aktif digunakan.",
  "Analytics contribution": "Kontribusi analitik",
  "Owner & Full-Stack Developer": "Pemilik & Full-Stack Developer",
  "Freelance Full-Stack Developer": "Freelance Full-Stack Developer",
  "A production ERP for sales, cash flow, budgeting, production, reseller commissions, audit logs, and automated reporting.":
    "ERP produksi untuk penjualan, arus kas, penganggaran, produksi, komisi reseller, audit log, dan pelaporan otomatis.",
  "Designed the operational data structure and reporting flow used to monitor business performance across more than 20 modules.":
    "Merancang struktur data operasional dan alur pelaporan untuk memantau kinerja bisnis pada lebih dari 20 modul.",
  "An online SKD practice platform with CAT-style scoring, timed exams, payment integration, and performance reporting.":
    "Platform latihan SKD online dengan penilaian bergaya CAT, ujian berbatas waktu, integrasi pembayaran, dan laporan kinerja.",
  "Built score summaries and visual reporting that help learners review section-level results and track readiness.":
    "Membangun ringkasan nilai dan laporan visual untuk membantu peserta meninjau hasil per bagian dan memantau kesiapan.",
  "An education platform covering online exams, question management, leaderboards, and digital learning workflows.":
    "Platform pendidikan yang mencakup ujian online, pengelolaan soal, leaderboard, dan alur pembelajaran digital.",
  "Translated assessment and user activity into operational views for learners and the internal team.":
    "Menerjemahkan hasil penilaian dan aktivitas pengguna menjadi tampilan operasional bagi peserta dan tim internal.",
  "Request a walkthrough": "Minta demo",
  "View live product": "Lihat produk",
  "Core Capabilities": "Kompetensi Utama",
  "Tools for Analysis, Reporting & Delivery":
    "Perangkat untuk Analisis, Pelaporan & Penyampaian",
  "A focused toolkit for turning raw information into reliable analysis, accessible dashboards, and clear recommendations.":
    "Perangkat terfokus untuk mengubah informasi mentah menjadi analisis yang andal, dashboard yang mudah dipahami, dan rekomendasi yang jelas.",
  "Analysis & Business Intelligence": "Analisis & Business Intelligence",
  "Programming & Statistics": "Pemrograman & Statistika",
  "Data & Product Systems": "Sistem Data & Produk",
  "Data Experience Across Business & Research":
    "Pengalaman Data dalam Bisnis & Riset",
  "Hands-on work translating business questions into cleaned data, analysis, dashboards, and stakeholder-ready findings.":
    "Pengalaman langsung menerjemahkan pertanyaan bisnis menjadi data bersih, analisis, dashboard, dan temuan yang siap disampaikan kepada pemangku kepentingan.",
  "Freelance Data Analyst": "Freelance Data Analyst",
  "Data Scientist Intern": "Magang Data Scientist",
  "HR Data Analyst Intern": "Magang HR Data Analyst",
  "Head of Research, Yogyakarta Chapter": "Kepala Riset, Chapter Yogyakarta",
  "Lecturer Assistant": "Asisten Dosen",
  "Remote / Various Clients": "Remote / Berbagai Klien",
  "Jul 2024 — Present": "Jul 2024 — Sekarang",
  "Feb — Jul 2023": "Feb — Jul 2023",
  "Dec 2020 — Feb 2021": "Des 2020 — Feb 2021",
  "Aug 2022 — Jan 2023": "Agu 2022 — Jan 2023",
  "Sep 2022 — Jan 2023": "Sep 2022 — Jan 2023",
  "Sep 2020 — Aug 2024": "Sep 2020 — Agu 2024",
  "Dec 2023": "Des 2023",
  "Aug 2023": "Agu 2023",
  "Jan 2023": "Jan 2023",
  "Aug 2022": "Agu 2022",
  "May 2022": "Mei 2022",
  "Jan 2022": "Jan 2022",
  "Translate business needs into clear analytical questions and practical reporting requirements.":
    "Menerjemahkan kebutuhan bisnis menjadi pertanyaan analitis yang jelas dan kebutuhan pelaporan yang praktis.",
  "Execute end-to-end analysis covering data collection, cleaning, transformation, exploration, and visualization.":
    "Melaksanakan analisis end-to-end yang mencakup pengumpulan, pembersihan, transformasi, eksplorasi, dan visualisasi data.",
  "Build interactive dashboards with Excel, Power BI, Tableau, or Looker Studio to monitor KPIs and communicate findings.":
    "Membangun dashboard interaktif dengan Excel, Power BI, Tableau, atau Looker Studio untuk memantau KPI dan menyampaikan temuan.",
  "Present insights and recommendations that support marketing, operational, and sales decisions.":
    "Menyampaikan wawasan dan rekomendasi yang mendukung keputusan pemasaran, operasional, dan penjualan.",
  "Supported election-data research through data cleaning, exploratory analysis, and feature preparation.":
    "Mendukung riset data pemilu melalui pembersihan data, analisis eksploratif, dan persiapan fitur.",
  "Prepared preliminary charts and dashboard visuals to communicate patterns to the data science team.":
    "Menyiapkan grafik awal dan visual dashboard untuk menyampaikan pola kepada tim data science.",
  "Assisted with preprocessing and parameter-tuning experiments under senior mentorship.":
    "Membantu eksperimen preprocessing dan penyetelan parameter di bawah bimbingan senior.",
  "Validated attendance, leave, and employee records in the HRIS to maintain data accuracy and completeness.":
    "Memvalidasi data kehadiran, cuti, dan karyawan dalam HRIS untuk menjaga akurasi serta kelengkapan data.",
  "Compiled employee-performance data into Excel reports and PivotTables for HR analysis.":
    "Menyusun data kinerja karyawan menjadi laporan Excel dan PivotTable untuk analisis HR.",
  "Categorized internal application feedback to help identify workflow and usability pain points.":
    "Mengategorikan masukan aplikasi internal untuk membantu mengidentifikasi kendala alur kerja dan usability.",
  "Led data science training, research discussions, and seminar programs with practitioners and community members.":
    "Memimpin pelatihan data science, diskusi riset, dan program seminar bersama praktisi serta anggota komunitas.",
  "Coordinated data-literacy and visualization learning using practical tools including Looker Studio.":
    "Mengoordinasikan pembelajaran literasi data dan visualisasi menggunakan perangkat praktis termasuk Looker Studio.",
  "Facilitated practical classes, seminars, and training sessions for university students.":
    "Memfasilitasi kelas praktikum, seminar, dan sesi pelatihan untuk mahasiswa.",
  "Reviewed projects, practical assignments, and laboratory research activities.":
    "Meninjau proyek, tugas praktikum, dan kegiatan riset laboratorium.",
  Education: "Pendidikan",
  "Data Science Foundation": "Fondasi Data Science",
  "Bachelor of Data Science": "Sarjana Sains Data",
  Thesis: "Skripsi",
  "Developed and evaluated a CNN-based web sign-language translator, achieving high recognition accuracy on most static alphabet classes and identifying motion detection as a key direction for real-time improvement.":
    "Mengembangkan dan mengevaluasi penerjemah bahasa isyarat berbasis web dengan CNN, mencapai akurasi pengenalan tinggi pada sebagian besar kelas alfabet statis, serta mengidentifikasi deteksi gerakan sebagai arah utama peningkatan real-time.",
  "Lecturer Assistant (Sep 2022 — Jan 2023): facilitated practical learning, assessed projects, and supported laboratory activities.":
    "Asisten Dosen (Sep 2022 — Jan 2023): memfasilitasi pembelajaran praktis, menilai proyek, dan mendukung kegiatan laboratorium.",
  "Head of Research, Data Science Indonesia Yogyakarta (Aug 2022 — Jan 2023): led seminars, training, and research-oriented community programs.":
    "Kepala Riset, Data Science Indonesia Yogyakarta (Agu 2022 — Jan 2023): memimpin seminar, pelatihan, dan program komunitas berorientasi riset.",
  Certifications: "Sertifikasi",
  "Verified Learning Credentials": "Kredensial Pembelajaran Terverifikasi",
  "Certifications in SQL, data analytics, machine learning, and deep learning from recognized learning platforms.":
    "Sertifikasi SQL, analitik data, machine learning, dan deep learning dari platform pembelajaran tepercaya.",
  Availability: "Ketersediaan",
  "Let’s Discuss a Data Role": "Mari Diskusikan Peran di Bidang Data",
  "Open to Data Analyst and Business Intelligence opportunities where clear analysis, practical dashboards, and business communication matter.":
    "Terbuka untuk peluang Data Analyst dan Business Intelligence yang membutuhkan analisis jelas, dashboard praktis, dan komunikasi bisnis.",
  Phone: "Telepon",
  Website: "Situs Web",
  "Introduce the opportunity": "Perkenalkan peluangnya",
  "Share the role or analytics challenge. This opens a prepared email draft.":
    "Ceritakan posisi atau tantangan analitiknya. Form ini akan membuka draf email yang telah disiapkan.",
  Name: "Nama",
  required: "wajib",
  "Your name": "Nama Anda",
  Message: "Pesan",
  "Share the role, team, or analytics challenge...":
    "Ceritakan posisi, tim, atau tantangan analitik...",
  "Email App Opened": "Aplikasi Email Dibuka",
  "Prepare Email": "Siapkan Email",
  "Your browser may ask which email app to use.":
    "Browser mungkin meminta Anda memilih aplikasi email.",
  "Back to top": "Kembali ke atas",
  "Toggle menu": "Buka atau tutup menu",
  "All insights": "Semua wawasan",
  "Analytics Journal": "Jurnal Analitik",
  "Insights behind the analysis.": "Wawasan di balik analisis.",
  "Practical notes on analytical thinking, KPI design, data storytelling, and the business questions that shape useful dashboards.":
    "Catatan praktis tentang pola pikir analitis, desain KPI, data storytelling, dan pertanyaan bisnis yang membentuk dashboard bermanfaat.",
  articles: "artikel",
  "Continue reading": "Lanjutkan membaca",
  "Project dashboard used as the visual context for this analysis.":
    "Dashboard proyek yang digunakan sebagai konteks visual dalam analisis ini.",
  "HR analytics dashboard with workforce, attrition, demographic, and job-satisfaction analysis":
    "Dashboard analitik HR berisi analisis tenaga kerja, attrition, demografi, dan kepuasan kerja",
  "Car sales dashboard with revenue, unit, commission, product, and salesperson performance":
    "Dashboard penjualan mobil berisi kinerja pendapatan, unit, komisi, produk, dan tenaga penjualan",
  "Road accident dashboard with casualty severity, monthly trends, road conditions, and location analysis":
    "Dashboard kecelakaan jalan berisi tingkat keparahan korban, tren bulanan, kondisi jalan, dan analisis lokasi",
  "Related insights": "Wawasan terkait",
  "View all": "Lihat semua",
  By: "Oleh",
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");
    if (stored !== "en" && stored !== "id") return;

    const timer = window.setTimeout(() => setLanguageState(stored), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "id" ? "id-ID" : "en-ID";
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  }, []);

  const t = useCallback(
    (value: string) =>
      language === "id" ? (idTranslations[value] ?? value) : value,
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
