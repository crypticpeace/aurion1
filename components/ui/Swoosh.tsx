import { cn } from "@/lib/utils";

/**
 * The thin orange arc that sweeps through the hero. Paths are authored in a
 * 1000x1000 box and stretched to the parent, with a non-scaling stroke so the
 * line stays a hairline at any viewport size.
 */
export default function Swoosh({
  d,
  className,
  strokeClassName = "stroke-brand",
  width = 1.5,
  animate = false,
  delay = 0,
}: {
  d: string;
  className?: string;
  strokeClassName?: string;
  width?: number;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      fill="none"
    >
      <path
        d={d}
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        strokeWidth={width}
        className={cn(strokeClassName, animate && "draw-path animate-draw")}
        style={animate ? { animationDelay: `${delay}ms` } : undefined}
      />
    </svg>
  );
}
