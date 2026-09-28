import { cn } from "@/lib/utils";

/**
 * Handwritten note + hand-drawn arrow, lifted from the hero ("More Reach",
 * "Better Strategy", "Real Results"). Reused sparingly to carry the brand voice
 * into lower sections.
 */
type ArrowVariant = "down-right" | "down-left" | "right" | "left" | "up-right";

const arrows: Record<ArrowVariant, { d: string; head: string; box: string }> = {
  "down-right": {
    d: "M8 6 C 6 30, 20 48, 50 58",
    head: "M40 50 L 51 58 L 38 63",
    box: "0 0 60 70",
  },
  "down-left": {
    d: "M52 6 C 30 8, 12 24, 10 56",
    head: "M3 46 L 10 57 L 18 47",
    box: "0 0 60 70",
  },
  right: {
    d: "M4 24 C 20 40, 48 42, 76 22",
    head: "M64 18 L 77 21 L 72 34",
    box: "0 0 84 48",
  },
  left: {
    d: "M80 24 C 64 40, 36 42, 8 22",
    head: "M20 18 L 7 21 L 12 34",
    box: "0 0 84 48",
  },
  "up-right": {
    d: "M6 56 C 14 30, 30 14, 54 8",
    head: "M42 3 L 55 8 L 46 18",
    box: "0 0 60 64",
  },
};

export function HandArrow({ variant, className }: { variant: ArrowVariant; className?: string }) {
  const a = arrows[variant];
  return (
    <svg viewBox={a.box} fill="none" aria-hidden className={cn("h-auto w-14 text-ink", className)}>
      <path d={a.d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d={a.head} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Annotation({
  children,
  className,
  rotate = -8,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={cn("inline-block font-script text-[26px] leading-[0.9] text-ink-700", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
