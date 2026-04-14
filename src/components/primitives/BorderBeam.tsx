"use client";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  duration = 10,
  size = 200,
  colorFrom = "#4F46E5",
  colorTo = "#818CF8",
}: {
  className?: string;
  duration?: number;
  size?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <div
      style={{
        ["--size" as any]: size,
        ["--duration" as any]: `${duration}s`,
        ["--color-from" as any]: colorFrom,
        ["--color-to" as any]: colorTo,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:1px_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-[beam_var(--duration)_infinite_linear]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        "after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
}
