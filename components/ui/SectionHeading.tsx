import { cn } from "@/lib/utils";

/**
 * Section opener: a short orange rule + tracked label (the hero's eyebrow
 * treatment), then a tight, heavy heading in the hero's type style.
 */
export default function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-4xl", className)}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-brand" />
        <span className={cn("eyebrow", dark && "text-white/60")}>{label}</span>
      </div>
      <h2
        className={cn(
          "display mt-5 text-[40px] sm:text-[52px] lg:text-[64px]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-white/60" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
