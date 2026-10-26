import Image from "next/image";
import { cn } from "@/lib/utils";

/** Swap these PNGs for the master SVG logo when available. */
export default function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Image
      src={tone === "dark" ? "/images/aurion-logo.png" : "/images/aurion-logo-light.png"}
      alt="Aurion Digital"
      width={550}
      height={166}
      priority
      className={cn("h-auto w-[150px] sm:w-[190px]", className)}
    />
  );
}
