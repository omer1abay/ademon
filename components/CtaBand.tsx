import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gold-gradient p-10 text-center sm:p-14">
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Tertemiz bir mekan için hazır mısınız?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/80">
          Ücretsiz keşif talep edin, size özel şeffaf fiyat teklifimizi hemen
          alın.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/iletisim"
            className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-gold transition-transform hover:scale-105"
          >
            Teklif & Randevu Al
          </Link>
          <a
            href={`tel:${site.phoneRaw}`}
            className="rounded-full border border-ink/40 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/10"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
