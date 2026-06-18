import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={`${site.brand} ana sayfa`}
    >
      {/* Crescent + A monogram, inspired by the brochure mark */}
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-ink-card shadow-gold">
        <span className="gold-text text-xl font-black leading-none">A</span>
        <span className="absolute right-1 top-1 text-[8px] text-gold">✦</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="gold-text text-xl font-extrabold uppercase tracking-[0.18em]">
          Ademon
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-neutral-400">
          {site.brandSub}
        </span>
      </span>
    </Link>
  );
}
