import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'
import { websitePackages } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

function Packages() {
  return (
    <section id="packages" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Paket Website" title="Pilihan paket untuk mulai membuat website profesional." />
          <p className="max-w-md text-left leading-7 text-[#5f6f85] md:text-right">
            Pilih paket sesuai kebutuhan awal. Detail halaman, fitur, dan estimasi waktu bisa disesuaikan setelah diskusi.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {websitePackages.map((item) => (
            <article
              key={item.name}
              className={`flex min-h-[420px] flex-col rounded-2xl border p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0f2747]/10 ${
                item.highlighted
                  ? 'border-[#2563eb] bg-[#0f2747] text-white'
                  : 'border-[#d8e3f0] bg-white text-[#102033]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    item.highlighted ? 'bg-[#93c5fd] text-[#0f2747]' : 'bg-[#eaf2ff] text-[#1d4ed8]'
                  }`}
                >
                  {item.label}
                </span>
                {item.highlighted && (
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold text-[#93c5fd]">
                    Favorit
                  </span>
                )}
              </div>

              <h3 className="mt-7 text-2xl font-black">{item.name}</h3>
              <p className={`mt-2 text-3xl font-black ${item.highlighted ? 'text-[#93c5fd]' : 'text-[#2563eb]'}`}>
                {item.price}
              </p>
              <p className={`mt-4 leading-7 ${item.highlighted ? 'text-[#dbeafe]' : 'text-[#5f6f85]'}`}>
                {item.description}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold">
                    <FaCheckCircle className={`mt-1 shrink-0 ${item.highlighted ? 'text-[#93c5fd]' : 'text-[#2563eb]'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition ${
                  item.highlighted
                    ? 'bg-[#93c5fd] text-[#0f2747] hover:bg-white'
                    : 'bg-[#1d4ed8] text-white hover:bg-[#0f2747]'
                }`}
              >
                Konsultasi Paket
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
