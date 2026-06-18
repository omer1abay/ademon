import { site } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsappRaw}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile yazın"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition-transform hover:scale-110"
      >
        ✆
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Telefonla arayın"
        className="grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-2xl text-ink shadow-gold transition-transform hover:scale-110"
      >
        ☎
      </a>
    </div>
  );
}
