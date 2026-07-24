import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Ev, ofis, halı & koltuk yıkama, derin temizlik, inşaat sonrası ve otel temizliği hizmetlerimiz.",
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-ink-radial">
        <div className="container-x py-20 text-center">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title={<>Size Nasıl Yardımcı Olabiliriz?</>}
            subtitle="Evden ofise hijyen standartlarını yeniden tanımlıyoruz. Her hizmetimiz sigortalı ekip ve doğa dostu ürünlerle sunulur. Temiz bir alan, net bir zihin, başarılı bir hayat."
          />
        </div>
      </section>

      <section className="container-x space-y-8 pb-20">
        {services.map((s, i) => {
          return (
            <div
              key={s.slug}
              className={`grid items-start gap-8 rounded-3xl border border-ink-border bg-ink-card p-8 md:grid-cols-2 lg:p-10 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="text-4xl">{s.icon}</div>
                <h2 className="mt-4 text-2xl font-bold text-white">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 rounded-xl border border-ink-border bg-ink p-4 text-sm text-neutral-300"
                    >
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-gold/15 text-gold">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="rounded-2xl border border-gold/20 bg-ink px-5 py-6 text-center text-sm text-neutral-400">
                  Fiyat, alan büyüklüğüne ve hizmet kapsamına göre belirlenir.
                  <br />
                  <span className="text-gold">
                    Ücretsiz keşif ile net teklif alın.
                  </span>
                </div>
                <Link href="/iletisim" className="btn-gold mt-6">
                  Teklif Al
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <CtaBand />
    </>
  );
}
