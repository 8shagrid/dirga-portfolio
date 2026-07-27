import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  bordered?: boolean;
  containerClassName?: string;
}

export default function Section({
  children,
  bordered = true,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-6 py-20 md:py-24",
        bordered && "border-t border-susu/10",
        className,
      )}
      {...props}
    >
      <div className={cn("max-w-6xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
