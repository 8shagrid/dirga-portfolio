"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem(storageKey);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;

  const themeColor = theme === "light" ? "#f4eee1" : "#0d0d12";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor);
}

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { language } = useLanguage();
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);

    const timeoutId = window.setTimeout(() => {
      setTheme(initialTheme);
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        language === "id"
          ? `Ganti ke mode ${theme === "light" ? "gelap" : "terang"}`
          : `Switch to ${theme === "light" ? "dark" : "light"} mode`
      }
      title={
        language === "id"
          ? `Ganti ke mode ${theme === "light" ? "gelap" : "terang"}`
          : `Switch to ${theme === "light" ? "dark" : "light"} mode`
      }
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-susu/30 text-hai transition-all duration-200 hover:border-beni/40 hover:bg-beni/5 hover:text-shiro",
        className,
      )}
    >
      {mounted && theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
