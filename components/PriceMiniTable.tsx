import type { PriceCategory } from "@/lib/site";

// Kompakt fiyat tablosu — hizmet detay kartlarının altında kullanılır.
export default function PriceMiniTable({ category }: { category: PriceCategory }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/20 bg-ink">
      <div className="flex items-center justify-between bg-gold/10 px-5 py-2.5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
          Güncel Fiyat Listesi
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold/70">
          {category.priceLabel}
        </span>
      </div>
      <ul>
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-4 border-t border-ink-border px-5 py-3 text-sm transition-colors hover:bg-gold/5"
          >
            <span className="text-neutral-300">{item.name}</span>
            <span className="flex items-baseline gap-2 whitespace-nowrap">
              {item.oldPrice && (
                <span className="text-xs text-neutral-500 line-through">
                  {item.oldPrice}
                </span>
              )}
              <span className="font-bold text-gold">{item.price}</span>
            </span>
          </li>
        ))}
      </ul>
      {category.note && (
        <div className="border-t border-ink-border px-5 py-2.5 text-xs italic text-neutral-500">
          * {category.note}
        </div>
      )}
    </div>
  );
}
