// Central site data + brand config for ademon.
// Change these values in one place to rebrand or update contact details.

export const site = {
  brand: "Ademon",
  brandSub: "Temizlik Hizmetleri",
  tagline: "Temizlikte Mükemmellik, Yaşamınıza Değer Katar.",
  hero: {
    eyebrow: "Sağlıklı Temizlik · Güvenli Ekip · %100 Memnuniyet",
    line1: "Temizlik bir hizmet değil,",
    line2: "bir yaşam kalitesidir.",
    text: "Ademon ile tanışın, tanıdığınız temizlik anlayışını unutun. Sadece temizlemiyoruz; yaşamınıza değer katıyoruz.",
  },
  slogan: "Sadece Temizlemiyoruz, Yaşamınıza Değer Katıyoruz.",
  motto: "Temizliğin Adı, Güvenin Adresi.",
  description:
    "Ev, ofis, apartman ve işletmeler için profesyonel, güvenilir ve %100 memnuniyet garantili temizlik hizmetleri.",
  phoneDisplay: "0535 794 36 28",
  phoneRaw: "+905357943628",
  whatsappRaw: "905357943628",
  whatsappDisplay: "0535 794 36 28",
  // E-posta (info@ademon.com.tr) şu an aktif değil — sitede gösterilmiyor,
  // iletişim WhatsApp üzerinden yönlendiriliyor. Aktif olunca buraya ekleyin.
  web: "www.ademon.com.tr",
  address: "Seldeğirmeni Mah. Kabacaküz Sok. No:34, Merkez/Giresun",
  hours: "Hafta içi & Cumartesi, 09:00 – 18:00",
  instagram: "https://instagram.com",
  mapUrl: "https://maps.google.com/?q=Seldeğirmeni+Mahallesi+Giresun",
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const stats = [
  { value: "100+", label: "Mutlu Müşteri" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
  { value: "5+", label: "Yıl Tecrübe" },
  { value: "7/24", label: "Destek & İletişim" },
] as const;

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "ev-temizligi",
    icon: "🏠",
    title: "Ev Temizliği",
    short: "Evinizde hijyenik, ferah ve temiz bir yaşam alanı sunuyoruz.",
    description:
      "Evinizde hijyenik, ferah ve temiz bir yaşam alanı sunuyoruz. Mutfak, banyo ve tüm yaşam alanları çevre dostu ürünlerle tertemiz teslim edilir.",
    features: [
      "Mutfak ve banyo dezenfeksiyonu",
      "Toz alma ve detaylı temizlik",
      "Çevre dostu, sağlığa zararsız ürünler",
      "Sigortalı ve eğitimli personel",
    ],
  },
  {
    slug: "ofis-is-yeri-temizligi",
    icon: "🏢",
    title: "Ofis & İş Yeri Temizliği",
    short: "Çalışma alanlarınızı hijyenik, düzenli ve ferah tutuyoruz.",
    description:
      "Çalışma alanlarınızı hijyenik, düzenli ve ferah tutuyoruz. Mesai düzeninize göre planlanan periyodik temizlik ile verimli bir ortam sağlıyoruz.",
    features: [
      "Düzenli periyodik temizlik",
      "Mesai dışı esnek çalışma",
      "Zemin ve ekipman bakımı",
      "Faturalandırma ve sözleşme",
    ],
  },
  {
    slug: "apartman-site-temizligi",
    icon: "🏬",
    title: "Apartman & Site Temizliği",
    short:
      "Ortak yaşam alanlarınızı titizlikle temizliyor, sağlıklı ortamlar sunuyoruz.",
    description:
      "Ortak yaşam alanlarınızı titizlikle temizliyor, sağlıklı ortamlar sunuyoruz. Merdiven, asansör ve ortak alanlar düzenli olarak hijyenik tutulur.",
    features: [
      "Merdiven ve sahanlık temizliği",
      "Asansör ve ortak alan hijyeni",
      "Periyodik bakım programı",
      "Yönetim ile şeffaf raporlama",
    ],
  },
  {
    slug: "cam-temizligi",
    icon: "🪟",
    title: "Cam Temizliği",
    short: "İç ve dış cam yüzeylerde lekesiz ve ışıl ışıl temizlik sağlıyoruz.",
    description:
      "İç ve dış cam yüzeylerde lekesiz ve ışıl ışıl temizlik sağlıyoruz. Profesyonel ekipman ve solüsyonlarla camlarınız pırıl pırıl olur.",
    features: [
      "İç ve dış cephe cam temizliği",
      "Lekesiz parlaklık garantisi",
      "Çerçeve ve doğrama temizliği",
      "Güvenli ekipman ve yöntem",
    ],
  },
  {
    slug: "insaat-sonrasi-temizlik",
    icon: "🧱",
    title: "İnşaat Sonrası Temizlik",
    short:
      "İnşaat sonrası detaylı temizlik ile yaşam alanlarınızı kullanıma hazır hale getiriyoruz.",
    description:
      "İnşaat sonrası detaylı temizlik ile yaşam alanlarınızı kullanıma hazır hale getiriyoruz. Toz, moloz ve kalıntılar profesyonelce temizlenir.",
    features: [
      "Boya ve sıva kalıntısı temizliği",
      "Cam etiketi ve bant sökümü",
      "Zemin cilalama ve süpürme",
      "İnce toz alımı ve dezenfeksiyon",
    ],
  },
  {
    slug: "koltuk-hali-yikama",
    icon: "🛋️",
    title: "Koltuk & Halı Yıkama",
    short:
      "Koltuk ve halılarınızı profesyonel ekipmanlarla derinlemesine temizliyoruz.",
    description:
      "Koltuk ve halılarınızı profesyonel ekipmanlarla derinlemesine temizliyoruz. Lekeler çıkar, kumaşlarınız yeniler gibi hijyenik olur.",
    features: [
      "Vakumlu derin temizlik",
      "Leke çıkarma garantisi",
      "Hızlı kuruma teknolojisi",
      "Antibakteriyel şampuanlar",
    ],
  },
];

// "Neden biz" / Değerlerimiz — broşürdeki dört değer
export const features = [
  {
    icon: "🛡️",
    title: "Güven",
    text: "Deneyimli ve eğitimli profesyonel ekip.",
  },
  {
    icon: "⭐",
    title: "Kalite",
    text: "Yüksek kalite standartlarında titiz ve özenli temizlik.",
  },
  {
    icon: "🌿",
    title: "Sağlık",
    text: "Doğa dostu ve insan sağlığına zararsız ürünler kullanıyoruz.",
  },
  {
    icon: "⏱️",
    title: "Zaman",
    text: "Planlı ve düzenli çalışma ile zamanınız size kalsın.",
  },
];

export const values = features;

export const trustBadges = [
  { icon: "🌿", label: "Sağlıklı Temizlik" },
  { icon: "🛡️", label: "Güvenli Ekip" },
  { icon: "👍", label: "%100 Müşteri Memnuniyeti" },
];

export const testimonials = [
  {
    name: "Can Ö.",
    text: "Profesyonel ve titiz bir ekip. Evimiz hiç bu kadar temiz olmamıştı, kesinlikle tavsiye ederim.",
  },
  {
    name: "Gözde B.",
    text: "Detaylara verdikleri önem muhteşem. Zamanında geldiler ve işlerini kusursuz yaptılar.",
  },
  {
    name: "Ayça Ö.",
    text: "Koltuk ve halı yıkama sonucu inanılmazdı. Güler yüzlü ve güvenilir bir firma.",
  },
];

export const faqs = [
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Giresun Merkez ve çevre ilçelere hizmet veriyoruz.",
  },
  {
    q: "Randevu nasıl alabilirim?",
    a: "İletişim sayfasındaki formu doldurabilir, WhatsApp'tan yazabilir veya bizi telefonla arayabilirsiniz.",
  },
  {
    q: "Kullandığınız ürünler güvenli mi?",
    a: "Tüm ürünlerimiz doğa dostu, insan sağlığına zararsız ve sertifikalıdır.",
  },
  {
    q: "Fiyatlandırma nasıl yapılıyor?",
    a: "Ücretsiz keşif sonrası, alanın büyüklüğü ve hizmet türüne göre şeffaf ve net fiyat veriyoruz.",
  },
  {
    q: "Personeliniz sigortalı mı?",
    a: "Evet, tüm personelimiz sigortalı, referanslı ve sürekli eğitim alan profesyonellerden oluşur.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Hafta içi ve Cumartesi 09:00 - 18:00 saatleri arasında hizmet veriyoruz.",
  },
];

export const serviceArea = [
  "Giresun Merkez",
  "Bulancak",
  "Espiye",
  "Tirebolu",
  "Görele",
  "Keşap",
  "Dereli",
  "Şebinkarahisar",
];
