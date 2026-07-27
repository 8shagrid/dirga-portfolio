import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Noto_Serif_JP } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
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
  title: "Dirga Halim Susilo | Data Analyst & Business Intelligence",
  description:
    "Data Analyst portfolio of Dirga Halim Susilo, featuring interactive Excel dashboards, SQL and Python analytics, ETL workflows, workforce analysis, sales reporting, and business intelligence projects.",
  keywords: [
    "Dirga Halim Susilo",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Data Analyst Portfolio",
    "Excel Dashboard",
    "Power BI",
    "Tableau",
    "SQL",
    "Python",
    "Data Visualization",
    "Business Intelligence",
    "Medan Data Analyst",
  ],
  authors: [{ name: "Dirga Halim Susilo" }],
  openGraph: {
    title: "Dirga Halim Susilo | Data Analyst & Business Intelligence",
    description:
      "Interactive dashboards, practical analytics, and data projects built to support clearer business decisions.",
    type: "website",
    locale: "en_ID",
    siteName: "Dirga Halim Susilo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dirga Halim Susilo | Data Analyst & Business Intelligence portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirga Halim Susilo | Data Analyst & Business Intelligence",
    description:
      "Interactive dashboards, practical analytics, and data projects built to support clearer business decisions.",
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
  jobTitle: "Data Analyst & Business Intelligence Analyst",
  description:
    "Data analyst who transforms raw business data into interactive dashboards, clear insights, and practical recommendations.",
  url: "https://dirgahalimsusilo.site",
  sameAs: [
    "https://github.com/8shagrid",
    "https://linkedin.com/in/dirgahalimsusilo",
  ],
  knowsAbout: [
    "Data Analysis",
    "Business Intelligence",
    "SQL",
    "Python",
    "Microsoft Excel",
    "Power BI",
    "Tableau",
    "Data Visualization",
    "Statistics",
  ],
};

const themeInitializer = `
(() => {
  try {
    // Some VPN extensions inject bis_* and processed_* attributes before
    // React hydrates. Remove only those extension-owned attributes while the
    // initial document is being parsed so the server and client trees match.
    const extensionAttributePattern = /^(?:bis_|processed_[0-9a-f-]+$)/;
    const cleanExtensionAttributes = (root) => {
      const cleanElement = (element) => {
        for (const attribute of Array.from(element.attributes || [])) {
          if (extensionAttributePattern.test(attribute.name)) {
            element.removeAttribute(attribute.name);
          }
        }
      };

      if (root instanceof Element) cleanElement(root);
      if (root.querySelectorAll) {
        for (const element of root.querySelectorAll("*")) cleanElement(element);
      }
    };

    cleanExtensionAttributes(document.documentElement);

    const extensionObserver = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.target instanceof Element) {
          const attributeName = record.attributeName;
          if (attributeName && extensionAttributePattern.test(attributeName)) {
            record.target.removeAttribute(attributeName);
          }
        }

        for (const node of record.addedNodes) {
          if (node instanceof Element) cleanExtensionAttributes(node);
        }
      }
    });

    extensionObserver.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener(
      "DOMContentLoaded",
      () => {
        cleanExtensionAttributes(document.documentElement);
        window.requestAnimationFrame(() => extensionObserver.disconnect());
      },
      { once: true },
    );

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
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full bg-sumi text-shiro font-body"
      >
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:px-4 focus:py-2 focus:bg-beni focus:text-shiro focus:rounded-sm focus:text-sm"
        >
          Skip to main content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
