import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ subtitle, title, description, align = "center", className }: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {subtitle && (
        <span className="inline-block font-display text-xs tracking-[0.3em] uppercase text-primary animate-fade-in">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-slide-up">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto animate-fade-in stagger-2">
          {description}
        </p>
      )}
    </div>
  );
}
