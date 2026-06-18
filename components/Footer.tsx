import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-neutral-400">
            {site.description}
          </p>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-ink-border text-gold transition-colors hover:bg-gold/10"
              aria-label="Instagram"
            >
              ◎
            </a>
            <a
              href={`https://wa.me/${site.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg border border-ink-border text-gold transition-colors hover:bg-gold/10"
              aria-label="WhatsApp"
            >
              ✆
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Hizmetler
          </h3>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/hizmetler" className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Kurumsal
          </h3>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${site.web}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                {site.web}
              </a>
            </li>
            <li className="leading-relaxed">{site.address}</li>
            <li className="text-neutral-500">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand}. Tüm hakları saklıdır.
          </p>
          <p className="gold-text font-semibold">{site.motto}</p>
        </div>
      </div>
    </footer>
  );
}
