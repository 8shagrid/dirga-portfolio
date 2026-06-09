import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dirgahalimsusilo.site"),
  title:
    "Dirga Halim Susilo | Full-Stack Developer, AI Engineer & Data Specialist",
  description:
    "Portfolio Dirga Halim Susilo, Full-Stack Developer, AI Engineer, and Data Specialist based in Medan, Indonesia. Building web apps, ERP systems, dashboards, and AI solutions with Next.js, TypeScript, Python, and Supabase.",
  keywords: [
    "Dirga Halim Susilo",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Scientist",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "ERP Developer",
    "Data Analyst",
    "Medan Developer",
  ],
  authors: [{ name: "Dirga Halim Susilo" }],
  openGraph: {
    title: "Dirga Halim Susilo | Full-Stack Developer & AI Engineer",
    description:
      "Explore web applications, ERP systems, data dashboards, and AI projects built by Dirga Halim Susilo.",
    type: "website",
    locale: "en_ID",
    siteName: "Dirga Halim Susilo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dirga Halim Susilo | Full-Stack Developer, AI Engineer & Data Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirga Halim Susilo | Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of web applications, ERP systems, data dashboards, and AI projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#c53030" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dirga Halim Susilo",
  jobTitle: "Full-Stack Developer, AI Engineer & Data Specialist",
  url: "https://dirgahalimsusilo.site",
  sameAs: [
    "https://github.com/8shagrid",
    "https://linkedin.com/in/dirgahalimsusilo",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Data Science",
    "Full-Stack Development",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
  ],
};

const themeInitializer = `
(() => {
  try {
    const storageKey = "portfolio-theme";
    const storedTheme = window.localStorage.getItem(storageKey);
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : preferredTheme;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    const themeColor = theme === "light" ? "#f4eee1" : "#0d0d12";
    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themeColor);
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ID"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfairDisplay.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-sumi text-shiro font-body">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-beni focus:text-shiro focus:rounded-sm focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
