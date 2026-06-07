import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialLink from '../ui/SocialLink'

function Contact() {
  return (
    <section id="contact" className="bg-[#172026] py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_0.92fr] md:items-center">
        <div className="text-left">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#5eead4]">Kontak</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Punya ide website? Mari kita buat tampil lebih profesional.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#cbd5df]">
            Kirim pesan melalui email atau sosial media. Saya bisa bantu mulai dari
            struktur halaman, tampilan, sampai implementasi React dan TailwindCSS.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
          <a
            href="mailto:reza@domain.com"
            className="flex items-center gap-3 rounded-2xl bg-[#5eead4] px-5 py-4 font-black text-[#172026] transition hover:bg-white"
          >
            <FaEnvelope />
            reza@domain.com
          </a>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <SocialLink href="https://github.com/" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/" icon={<FaLinkedin />} label="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
