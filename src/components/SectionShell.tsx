"use client";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  eyebrow,
  index,
  total,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  index?: number;
  total?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("slide-section snap-start relative", className)}
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {(eyebrow || index !== undefined) && (
          <div className="flex items-center gap-3 mb-8">
            {index !== undefined && total !== undefined && (
              <span className="eyebrow tabular text-ceyo-muted">
                {String(index).padStart(2, "0")} <span className="text-ceyo-border mx-1">/</span> {String(total).padStart(2, "0")}
              </span>
            )}
            {eyebrow && (
              <>
                <span className="h-px w-8 bg-ceyo-border" />
                <span className="eyebrow text-ceyo-accent3">{eyebrow}</span>
              </>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
