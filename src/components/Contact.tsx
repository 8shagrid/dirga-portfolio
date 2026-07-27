"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { contactData } from "@/lib/data";
import { Mail, Phone, Globe, Copy, Check, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useRef, type FormEvent } from "react";
import { viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "ready">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(
      language === "id"
        ? `Peluang Data Analyst — ${name}`
        : `Data Analyst Opportunity — ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setFormStatus("ready");
    form.reset();
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      action: handleCopyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactData.phoneDisplay,
      href: `https://wa.me/${contactData.whatsappPhone}`,
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: contactData.linkedin,
      href: `https://${contactData.linkedin}`,
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: contactData.github,
      href: `https://${contactData.github}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: contactData.website,
      href: `https://${contactData.website}`,
    },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        label={t("Availability")}
        title={t("Let’s Discuss a Data Role")}
        description={t("Open to Data Analyst and Business Intelligence opportunities where clear analysis, practical dashboards, and business communication matter.")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Links */}
        <div className="space-y-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={link.action}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-center gap-4 p-4 bg-tetsu/50 border border-susu/20 rounded-sm hover:border-beni/40 transition-all duration-300"
            >
              <link.icon
                size={18}
                className="text-hai/50 group-hover:text-beni transition-colors shrink-0"
              />
              <div className="min-w-0">
                <p className="text-[10px] text-hai/80 uppercase tracking-wider">
                  {t(link.label)}
                </p>
                <p className="text-sm text-shiro group-hover:text-beni transition-colors truncate">
                  {link.value}
                </p>
              </div>
              {link.action && (
                <div className="ml-auto shrink-0">
                  {copied ? (
                    <Check size={14} className="text-take" />
                  ) : (
                    <Copy
                      size={14}
                      className="text-hai/45 group-hover:text-hai/60 transition-colors"
                    />
                  )}
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Quick Message Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-tetsu/50 border border-susu/10 rounded-sm p-5 flex flex-col gap-4"
        >
          <div>
            <p className="text-xs text-hai/80 uppercase tracking-wider">
              {t("Introduce the opportunity")}
            </p>
            <p className="mt-1 text-xs text-hai/70">
              {t("Share the role or analytics challenge. This opens a prepared email draft.")}
            </p>
          </div>

          <label className="flex flex-col gap-1.5 text-xs text-hai/85">
            {t("Name")} <span className="sr-only">{t("required")}</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder={t("Your name")}
              className="w-full bg-sumi border border-susu/35 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/60 focus:outline-none focus:border-beni/70 transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-xs text-hai/85">
            Email <span className="sr-only">{t("required")}</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="w-full bg-sumi border border-susu/35 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/60 focus:outline-none focus:border-beni/70 transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-xs text-hai/85">
            {t("Message")} <span className="sr-only">{t("required")}</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={t("Share the role, team, or analytics challenge...")}
              className="w-full bg-sumi border border-susu/35 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/60 focus:outline-none focus:border-beni/70 transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-beni text-shiro font-medium text-sm rounded-sm hover:bg-beni-light transition-colors duration-200"
          >
            {formStatus === "ready" ? (
              <>
                <Check size={14} />
                {t("Email App Opened")}
              </>
            ) : (
              <>
                <Send size={14} />
                {t("Prepare Email")}
              </>
            )}
          </button>

          <p className="text-[10px] text-hai/65 text-center">
            {t("Your browser may ask which email app to use.")}
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
