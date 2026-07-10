import Link from "next/link";
import { SectionHeading, Stat } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import PricingTabs from "@/components/PricingTabs";
import {
  faqs,
  features,
  services,
  site,
  stats,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-radial">
        <div className="container-x grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="eyebrow">{site.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.hero.line1}{" "}
              <span className="gold-text">{site.hero.line2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-400">
              {site.hero.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/iletisim" className="btn-gold">
                Ücretsiz Keşif İste
              </Link>
              <a
                href={`https://wa.me/${site.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="relative rounded-3xl border border-ink-border bg-ink-card p-8 shadow-gold">
              <div className="absolute -right-3 -top-3 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold text-ink">
                %100 Memnuniyet
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
              <div className="mt-8 space-y-3">
                {["Sağlıklı Temizlik", "Güvenli Ekip", "%100 Müşteri Memnuniyeti"].map(
                  (t) => (
                    <div key={t} className="flex items-center gap-3 text-sm">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold">
                        ✓
                      </span>
                      <span className="text-neutral-300">{t}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Size Nasıl Yardımcı Olabiliriz?"
          subtitle="Evden ofise, apartmandan cam ve halı yıkamaya kadar her ihtiyacınız için profesyonel çözümler."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="card group">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.short}
              </p>
              <Link
                href="/hizmetler"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100"
              >
                Detaylar →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="fiyatlar" className="border-y border-ink-border bg-ink-soft">
        <div className="container-x py-20">
          <SectionHeading
            eyebrow="Fiyat Listesi"
            title="Şeffaf ve Net Fiyatlar"
            subtitle="Sürpriz maliyet yok. Hizmet kategorisini seçin, güncel fiyatlarımızı anında görün."
          />
          <PricingTabs />
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-ink-border">
        <div className="container-x py-20">
          <SectionHeading
            eyebrow="Neden Biz?"
            title="Fark Yaratan Özelliklerimiz"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="card text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Müşterilerimiz Ne Diyor?"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card">
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-neutral-300">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gold">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-border bg-ink-soft">
        <div className="container-x py-20">
          <SectionHeading
            eyebrow="S.S.S."
            title="Sıkça Sorulan Sorular"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-ink-border bg-ink-card p-5 transition-colors open:border-gold/40"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </>
  );
}
