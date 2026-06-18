import type { Metadata } from "next";
import { SectionHeading, Stat } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { serviceArea, stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ademon Temizlik Hizmetleri — hikayemiz, değerlerimiz ve hizmet bölgelerimiz.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="bg-ink-radial">
        <div className="container-x py-20 text-center">
          <SectionHeading
            eyebrow="Hakkımızda"
            title={
              <>
                Sadece Temizlemiyoruz,{" "}
                <span className="gold-text">Yaşamınıza Değer Katıyoruz</span>
              </>
            }
            subtitle="Temizlik, sadece görüneni değil; hissettiklerinizi de değiştirir. Daha ferah bir alan, daha huzurlu bir zihin, daha verimli bir siz. Biz, bu dönüşümü mükemmellikle sağlıyoruz."
          />
        </div>
      </section>

      {/* Story */}
      <section className="container-x grid gap-10 pb-16 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold text-white">Hikayemiz</h2>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Ademon, temizliği yüzeysel bir işten ibaret görmeyen bir anlayışla yola
            çıktı. Temel mottomuz, görünenin ötesinde gerçek hijyene ulaşmaktır;
            evden ofise, apartman ortak alanlarından inşaat sonrası lekelere kadar
            her zorluğu profesyonel ekipman ve doğa dostu çözümlerle ele alıyoruz.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Bugün İstanbul genelinde onlarca aileye ve işletmeye hizmet veriyoruz.
            Temiz bir ortam, sadece mekanı değil; ruh halini de değiştirir.
          </p>
        </div>
        <div className="card flex flex-col justify-center">
          <h2 className="text-xl font-bold text-white">Misyonumuz</h2>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Temizliği, yaşam alanlarınıza huzur getiren bir deneyime dönüştürmek.
            Şeffaf iletişim, ekolojik yaklaşım ve kurumsal güvence ile gerçek hijyen
            standardını yükseltmek.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink-border bg-ink-soft">
        <div className="container-x grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="Değerlerimiz" title="Bizi Biz Yapan İlkeler" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-2xl">
                {v.icon}
              </div>
              <h3 className="mt-4 font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section className="border-t border-ink-border bg-ink-soft">
        <div className="container-x py-20">
          <SectionHeading
            eyebrow="Hizmet Bölgeleri"
            title="Nerelere Hizmet Veriyoruz?"
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {serviceArea.map((a) => (
              <span
                key={a}
                className="rounded-full border border-gold/30 bg-gold/5 px-5 py-2 text-sm font-medium text-gold"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
