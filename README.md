# ademon — Temizlik Web Sitesi

`esilatemizlik.com` sitesinin **ademon** markası ve **gold + siyah** tema ile
yeniden tasarlanmış hali. Next.js 14 (App Router) + Tailwind CSS ile yazıldı,
Docker ile build alınır.

## Sayfalar

| Sayfa | Yol |
|------|------|
| Ana Sayfa | `/` |
| Hizmetler | `/hizmetler` |
| Hakkımızda | `/hakkimizda` |
| İletişim | `/iletisim` |

İçerik tek noktadan (`lib/site.ts`) yönetilir — marka, telefon, hizmetler,
yorumlar ve SSS buradan düzenlenir.

## Geliştirme

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build (local)

```bash
npm run build
npm start
```

## Docker ile build & çalıştırma

```bash
# İmajı oluştur
docker build -t ademon-web .

# Çalıştır
docker run -p 3000:3000 ademon-web
```

veya docker-compose ile:

```bash
docker compose up --build
```

Site `http://localhost:3000` adresinde yayında olur.

## Teknik Notlar

- `next.config.js` içinde `output: "standalone"` ile minimal Docker imajı üretilir.
- İletişim formu backend gerektirmez; talebi WhatsApp'a ön-dolu mesaj olarak iletir.
- Tema renkleri `tailwind.config.ts` içindeki `gold` ve `ink` paletlerinde tanımlı.
