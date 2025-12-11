import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center p-6 bg-card border border-border rounded hover-lift", className)}>
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-electric mb-2">
        {value}
      </div>
      <div className="font-body text-muted-foreground uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
}
