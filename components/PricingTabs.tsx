"use client";

import { useState } from "react";
import Link from "next/link";
import { pricing, site } from "@/lib/site";

function discountPercent(oldPrice: string, price: string) {
  const parse = (s: string) => parseInt(s.replace(/\D/g, ""), 10);
  const oldP = parse(oldPrice);
  const newP = parse(price);
  if (!oldP || !newP || newP >= oldP) return null;
  return Math.round(((oldP - newP) / oldP) * 100);
}

export default function PricingTabs() {
  const [active, setActive] = useState(pricing[0].slug);
  const category = pricing.find((c) => c.slug === active) ?? pricing[0];

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {pricing.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              c.slug === active
                ? "border-gold/60 bg-gold/15 text-gold shadow-gold"
                : "border-ink-border bg-ink-card text-neutral-400 hover:border-gold/30 hover:text-neutral-200"
            }`}
          >
            <span aria-hidden>{c.icon}</span>
            {c.title}
          </button>
        ))}
      </div>

      {/* Price table — key re-mounts on tab change to replay animations */}
      <div
        key={category.slug}
        className="mt-8 overflow-hidden rounded-3xl border border-ink-border bg-ink-card shadow-gold"
      >
        <div className="flex items-center justify-between border-b border-gold/20 bg-gold/5 px-6 py-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {category.unitLabel}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {category.priceLabel}
          </span>
        </div>

        <ul>
          {category.items.map((item, i) => {
            const discount = item.oldPrice
              ? discountPercent(item.oldPrice, item.price)
              : null;
            return (
              <li
                key={item.name}
                className="group flex items-center justify-between gap-4 border-b border-ink-border px-6 py-4 transition-colors last:border-b-0 hover:bg-gold/5 sm:px-8 animate-fade-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-gold/60 transition-transform group-hover:scale-150 sm:block" />
                  <span className="text-sm text-neutral-200 sm:text-base">
                    {item.name}
                  </span>
                  {discount !== null && (
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-bold text-gold">
                      %{discount} indirim
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-3 whitespace-nowrap">
                  {item.oldPrice && (
                    <span className="text-xs text-neutral-500 line-through sm:text-sm">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="gold-text text-base font-extrabold sm:text-lg">
                    {item.price}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {category.note && (
          <div className="border-t border-gold/20 bg-gold/5 px-6 py-3 text-center text-xs italic text-neutral-400 sm:px-8">
            * {category.note}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="max-w-xl text-center text-sm text-neutral-500">
          Fiyatlarımız şeffaftır; keşif sonrası alanınıza özel net teklif sunulur.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/iletisim" className="btn-gold">
            Ücretsiz Keşif İste
          </Link>
          <a
            href={`https://wa.me/${site.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            WhatsApp'tan Fiyat Al
          </a>
        </div>
      </div>
    </div>
  );
}
