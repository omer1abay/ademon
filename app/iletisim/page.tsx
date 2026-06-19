import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Teklif ve randevu için bize ulaşın. Telefon, WhatsApp, e-posta ve adres bilgileri.",
};

const contactItems = [
  { icon: "☎", label: "Telefon", value: site.phoneDisplay, href: `tel:${site.phoneRaw}` },
  { icon: "✉", label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { icon: "📍", label: "Adres", value: site.address, href: site.mapUrl },
  { icon: "🕘", label: "Çalışma Saatleri", value: site.hours },
];

export default function IletisimPage() {
  return (
    <>
      <section className="bg-ink-radial">
        <div className="container-x py-20 text-center">
          <SectionHeading
            eyebrow="İletişim"
            title={
              <>
                Bizimle <span className="gold-text">İletişime Geçin</span>
              </>
            }
            subtitle="Teklif & randevu talebinizi formdan iletin ya da doğrudan telefon/WhatsApp ile bize ulaşın."
          />
        </div>
      </section>

      <section className="container-x grid gap-10 pb-20 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((c) => {
              const inner = (
                <div className="card h-full">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-xl">
                    {c.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">
                    {c.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-300">
                    {c.value}
                  </p>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${site.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold flex-1"
            >
              WhatsApp ile Yaz
            </a>
            <a href={`tel:${site.phoneRaw}`} className="btn-outline flex-1">
              Hemen Ara
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-ink-border">
            <iframe
              title="Konum"
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.36%2C40.90%2C38.42%2C40.93&layer=mapnik&marker=40.9128%2C38.3895"
              className="h-64 w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div className="card">
          <h2 className="text-xl font-bold text-white">Teklif & Randevu Talebi</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Formu doldurun, en kısa sürede size dönelim.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
