"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, cvData } from "@/lib/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) return;

    e.preventDefault();
    const sectionId = href.replace("/#", "");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = navLinks
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => link.href.replace("/#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 md:px-6",
        scrolled || isOpen
          ? "border-b border-susu/30 bg-sumi/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold text-shiro tracking-wide group-hover:text-beni transition-colors duration-200">
            DIRGA<span className="text-beni">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = link.href.startsWith("/#")
                ? pathname === "/" && activeSection === sectionId
                : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={
                    pathname === "/" && link.href.startsWith("/#")
                      ? link.href.slice(1)
                      : link.href
                  }
                  className={cn(
                    "relative text-sm transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-beni after:transition-all",
                    isActive
                      ? "text-shiro after:w-full"
                      : "text-hai hover:text-shiro after:w-0 hover:after:w-full",
                  )}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 border-l border-susu/30 pl-3">
            <a
              href={cvData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-sm border border-beni/50 px-3 text-xs font-medium text-beni transition-all duration-200 hover:bg-beni hover:text-shiro"
            >
              {t(cvData.label)}
            </a>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-hai transition-colors hover:bg-beni/5 hover:text-shiro"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("Toggle menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden border-b border-susu/30 bg-sumi/98 shadow-2xl backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("/#", "");
                const isActive = link.href.startsWith("/#")
                  ? pathname === "/" && activeSection === sectionId
                  : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={
                      pathname === "/" && link.href.startsWith("/#")
                        ? link.href.slice(1)
                        : link.href
                    }
                    onClick={(e) => handleMobileNav(e, link.href)}
                    className={cn(
                      "rounded-sm px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-beni/10 text-beni"
                        : "text-hai hover:bg-susu/20 hover:text-shiro",
                    )}
                  >
                    {t(link.label)}
                  </Link>
                );
              })}
              <a
                href={cvData.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex h-10 items-center justify-center rounded-sm border border-beni/50 px-4 text-sm font-medium text-beni transition-colors hover:bg-beni hover:text-shiro"
              >
                {t(cvData.label)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
