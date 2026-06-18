"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    // No backend needed: forward the request to WhatsApp with a prefilled text.
    const text = encodeURIComponent(
      `Merhaba ${site.brand}, teklif/randevu talebim:\n\n` +
        `Ad Soyad: ${name}\n` +
        `Telefon: ${phone}\n` +
        `Hizmet: ${service}\n` +
        `Mesaj: ${message}`
    );
    window.open(`https://wa.me/${site.whatsappRaw}?text=${text}`, "_blank");
    setSent(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" placeholder="Adınız ve soyadınız" required />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="05xx xxx xx xx"
          required
        />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-neutral-300">
          İstediğiniz Hizmet
        </span>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-neutral-200 outline-none transition-colors focus:border-gold"
        >
          <option value="" disabled>
            Bir hizmet seçin
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Diğer">Diğer</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-neutral-300">
          Mesajınız
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Talebinizi kısaca anlatın..."
          className="w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-neutral-200 outline-none transition-colors focus:border-gold"
        />
      </label>

      <button type="submit" className="btn-gold w-full">
        Teklif & Randevu Talebi Gönder
      </button>

      {sent && (
        <p className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
          Talebiniz hazırlandı! WhatsApp üzerinden bize ulaştırabilirsiniz. ✅
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-neutral-300">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-neutral-200 outline-none transition-colors placeholder:text-neutral-600 focus:border-gold"
      />
    </label>
  );
}
