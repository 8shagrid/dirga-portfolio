import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contactData } from "@/lib/data";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "GitHub",
    href: `https://${contactData.github}`,
    icon: FaGithub,
    hoverClassName: "hover:text-shiro",
  },
  {
    label: "LinkedIn",
    href: `https://${contactData.linkedin}`,
    icon: FaLinkedinIn,
    hoverClassName: "hover:text-[#0a66c2]",
  },
  {
    label: "Email",
    href: `mailto:${contactData.email}`,
    icon: HiOutlineMail,
    hoverClassName: "hover:text-beni",
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-susu/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-shiro tracking-wide">
            DIRGA<span className="text-beni">.</span>
          </span>
          <span className="text-xs text-hai/75">Halim Susilo</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-hai/75">
          © {new Date().getFullYear()} Dirga Halim Susilo. Full-stack, AI, and
          data portfolio.
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={cn(
                "inline-flex size-10 items-center justify-center text-hai/75 transition-colors",
                link.hoverClassName,
              )}
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
