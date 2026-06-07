import { FaArrowLeft, FaBuilding, FaCheckCircle, FaEnvelope, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa'

const companyNav = [
  { label: 'Tentang', href: '#company-about' },
  { label: 'Layanan', href: '#company-services' },
  { label: 'Keunggulan', href: '#company-values' },
  { label: 'Kontak', href: '#company-contact' },
]

const services = [
  {
    title: 'Business Consulting',
    detail: 'Pendampingan strategi operasional, analisis kebutuhan, dan perencanaan pengembangan bisnis.',
  },
  {
    title: 'Digital Development',
    detail: 'Pembuatan website perusahaan, landing page, dashboard, dan sistem internal berbasis web.',
  },
  {
    title: 'Brand & Communication',
    detail: 'Penyusunan identitas visual, profil perusahaan, materi presentasi, dan komunikasi digital.',
  },
  {
    title: 'Operational Support',
    detail: 'Maintenance, evaluasi performa, dokumentasi kerja, dan dukungan teknis berkelanjutan.',
  },
]

const values = [
  {
    title: 'Terstruktur',
    detail: 'Setiap proyek dimulai dari kebutuhan bisnis, alur kerja, dan prioritas pengguna.',
  },
  {
    title: 'Transparan',
    detail: 'Progress, ruang lingkup, dan hasil kerja dikomunikasikan dengan jelas sejak awal.',
  },
  {
    title: 'Berkelanjutan',
    detail: 'Website dibuat agar mudah dikembangkan saat kebutuhan perusahaan bertambah.',
  },
]

const industries = [
  'UMKM dan retail',
  'Jasa profesional',
  'Pendidikan dan pelatihan',
  'Properti dan konstruksi',
  'Komunitas dan organisasi',
  'Startup digital',
]

const milestones = [
  {
    year: '2020',
    title: 'Fondasi layanan',
    detail: 'Memulai layanan konsultasi dan pengembangan website untuk bisnis lokal.',
  },
  {
    year: '2022',
    title: 'Ekspansi digital',
    detail: 'Mengembangkan layanan company profile, dashboard, dan sistem pendukung operasional.',
  },
  {
    year: '2024',
    title: 'Kemitraan strategis',
    detail: 'Berfokus pada hubungan jangka panjang dengan klien melalui dukungan dan evaluasi rutin.',
  },
]

const testimonials = [
  {
    quote: 'Tim Saputra Saputri Group membantu kami merapikan pesan bisnis dan membuat website terasa lebih kredibel.',
    name: 'Rina Maharani',
    role: 'Owner, Mahara Studio',
  },
  {
    quote: 'Prosesnya jelas, komunikasinya enak, dan hasil akhirnya mudah dipakai oleh tim internal kami.',
    name: 'Aditya Pranata',
    role: 'Director, Nusa Properti',
  },
]

function CompanyProfileExample() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] text-[#102033]">
      <header className="sticky top-0 z-50 border-b border-[#d8e3f0] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#company-about" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0f2747] text-sm font-black text-white shadow-md shadow-[#0f2747]/15">
              SSG
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-base font-black text-[#102033]">Saputra Saputri Group</p>
              <p className="hidden text-xs font-semibold text-[#64748b] sm:block">Strategic Business Partner</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-[#d8e3f0] bg-[#f8fbff] p-1 text-sm font-bold text-[#52657a] md:flex">
            {companyNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-[#1d4ed8] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#projects" className="hidden items-center gap-2 text-sm font-black text-[#64748b] transition hover:text-[#2563eb] lg:inline-flex">
              <FaArrowLeft className="text-xs" />
              Portofolio
            </a>

            <a
              href="#company-contact"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[#2563eb] px-4 text-sm font-bold text-white shadow-md shadow-[#2563eb]/20 transition hover:bg-[#1d4ed8]"
            >
              <FaEnvelope className="text-xs" />
              <span className="hidden sm:inline">Hubungi Kami</span>
            </a>
          </div>
        </nav>

        <div className="border-t border-[#d8e3f0] bg-white/90 px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl justify-center gap-6 text-sm font-bold text-[#52657a]">
            {companyNav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#2563eb]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id="company-about" className="border-b border-[#d8e3f0]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
            <div className="text-left">
              <span className="inline-flex rounded-full border border-[#bfdbfe] bg-[#eaf2ff] px-4 py-2 text-sm font-bold text-[#1d4ed8]">
                Contoh Company Profile
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-[#102033] sm:text-5xl lg:text-6xl">
                Saputra Saputri Group
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6f85] sm:text-lg">
                Perusahaan multi-layanan yang membantu bisnis membangun operasional,
                identitas digital, dan kemitraan yang lebih kuat serta terpercaya.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#company-services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1d4ed8] px-6 text-sm font-bold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#0f2747]"
                >
                  Lihat Layanan
                  <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href="#company-contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#b8c7d9] bg-white px-6 text-sm font-bold text-[#102033] transition hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#d8e3f0] bg-white p-6 shadow-xl shadow-[#0f2747]/10">
              <div className="flex aspect-[4/3] flex-col justify-between rounded-[22px] bg-[#0f2747] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#93c5fd] text-[#0f2747]">
                    <FaBuilding className="text-2xl" />
                  </div>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-[#dbeafe]">
                    Since 2020
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#93c5fd]">Trust & Growth</p>
                  <h2 className="mt-3 text-3xl font-black leading-tight">Digital partner for modern business.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-5 shadow-sm shadow-[#0f2747]/5">
              <p className="text-3xl font-black text-[#2563eb]">40+</p>
              <p className="mt-2 font-semibold text-[#5f6f85]">Klien terbantu</p>
            </div>
            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-5 shadow-sm shadow-[#0f2747]/5">
              <p className="text-3xl font-black text-[#2563eb]">6 tahun</p>
              <p className="mt-2 font-semibold text-[#5f6f85]">Pengalaman tim</p>
            </div>
            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-5 shadow-sm shadow-[#0f2747]/5">
              <p className="text-3xl font-black text-[#2563eb]">98%</p>
              <p className="mt-2 font-semibold text-[#5f6f85]">Kepuasan project</p>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Tentang Perusahaan</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                Mitra bisnis yang menggabungkan strategi, teknologi, dan komunikasi.
              </h2>
            </div>

            <div className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-left shadow-sm shadow-[#0f2747]/5">
              <p className="leading-8 text-[#5f6f85]">
                Saputra Saputri Group membantu perusahaan menyusun fondasi digital yang
                rapi, profesional, dan mudah dikembangkan. Kami percaya website bukan
                hanya media tampilan, tetapi juga alat untuk membangun kepercayaan,
                menjelaskan nilai bisnis, dan mempercepat komunikasi dengan calon klien.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f1f6fb] p-4">
                  <p className="font-black text-[#102033]">Visi</p>
                  <p className="mt-2 text-sm leading-6 text-[#5f6f85]">
                    Menjadi partner terpercaya dalam pengembangan identitas dan sistem digital perusahaan.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f1f6fb] p-4">
                  <p className="font-black text-[#102033]">Misi</p>
                  <p className="mt-2 text-sm leading-6 text-[#5f6f85]">
                    Membangun solusi yang jelas, terukur, dan memberi dampak nyata bagi operasional bisnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company-services" className="border-y border-[#d8e3f0] bg-[#eaf2ff] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Layanan</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                Solusi digital yang dibuat sesuai kebutuhan perusahaan.
              </h2>
            </div>

            <div className="grid gap-4">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-[#c8d7ea] bg-white p-5 text-left shadow-sm shadow-[#0f2747]/5">
                  <div className="flex items-center gap-3 font-black text-[#102033]">
                    <FaCheckCircle className="shrink-0 text-[#2563eb]" />
                    {service.title}
                  </div>
                  <p className="mt-3 leading-7 text-[#5f6f85]">{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Area Bisnis</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                  Melayani berbagai kebutuhan bisnis dengan pendekatan yang fleksibel.
                </h2>
              </div>
              <p className="max-w-md text-left leading-7 text-[#5f6f85] md:text-right">
                Setiap industri punya cara komunikasi yang berbeda. Karena itu, konten dan struktur halaman selalu disesuaikan.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-[#d8e3f0] bg-white px-5 py-4 font-bold text-[#334b66] shadow-sm shadow-[#0f2747]/5">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="company-values" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Keunggulan</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                Dibangun untuk menciptakan rasa percaya sejak halaman pertama.
              </h2>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-left shadow-sm shadow-[#0f2747]/5">
                  <FaShieldAlt className="text-2xl text-[#2563eb]" />
                  <h3 className="mt-5 text-xl font-black text-[#102033]">{value.title}</h3>
                  <p className="mt-3 leading-7 text-[#5f6f85]">{value.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8e3f0] bg-[#eaf2ff] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Perjalanan</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                Berkembang bersama kebutuhan klien dari tahun ke tahun.
              </h2>
            </div>

            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.year} className="grid gap-4 rounded-2xl border border-[#c8d7ea] bg-white p-5 text-left shadow-sm shadow-[#0f2747]/5 sm:grid-cols-[86px_1fr]">
                  <div className="flex h-12 items-center justify-center rounded-full bg-[#0f2747] text-sm font-black text-white">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#102033]">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[#5f6f85]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563eb]">Testimoni</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-[#102033] sm:text-4xl">
                Dipercaya untuk membuat komunikasi bisnis lebih meyakinkan.
              </h2>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl border border-[#d8e3f0] bg-white p-6 text-left shadow-sm shadow-[#0f2747]/5">
                  <p className="text-lg font-semibold leading-8 text-[#334b66]">"{item.quote}"</p>
                  <div className="mt-6 border-t border-[#d8e3f0] pt-5">
                    <p className="font-black text-[#102033]">{item.name}</p>
                    <p className="mt-1 text-sm font-semibold text-[#5f6f85]">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="company-contact" className="bg-[#0f2747] py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_0.85fr] md:items-center">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#93c5fd]">Kontak</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Siap membangun profil perusahaan yang lebih profesional?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-[#dbeafe]">
                Ceritakan kebutuhan bisnis Anda. Tim kami dapat membantu menyusun struktur konten,
                tampilan website, dan arah komunikasi yang sesuai dengan karakter perusahaan.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#93c5fd]">Saputra Saputri Group</p>
              <a
                href="mailto:hello@saputrasaputrigroup.com"
                className="mt-4 flex items-center gap-3 rounded-2xl bg-[#93c5fd] px-5 py-4 font-black text-[#0f2747] transition hover:bg-white"
              >
                <FaEnvelope />
                hello@saputrasaputrigroup.com
              </a>
              <p className="mt-4 leading-7 text-[#dbeafe]">
                Jakarta, Indonesia. Melayani konsultasi online dan project lintas kota.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CompanyProfileExample
