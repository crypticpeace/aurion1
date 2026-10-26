import { cn } from "@/lib/utils";

/**
 * Handwritten note from the hero ("More Reach", "Better Strategy", "Real
 * Results"). Purely decorative, so every use is wrapped in aria-hidden.
 */
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
