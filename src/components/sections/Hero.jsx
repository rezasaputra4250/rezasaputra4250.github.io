import { FaExternalLinkAlt } from 'react-icons/fa'
import heroImg from '../../assets/hero.png'
import { stats } from '../../data/portfolioData'
import Stat from '../ui/Stat'
import MiniInfo from '../ui/MiniInfo'

function Hero() {
  return (
    <section id="home" className="border-b border-[#d8e3f0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div className="text-left">
          <span className="inline-flex rounded-full border border-[#bfdbfe] bg-[#eaf2ff] px-4 py-2 text-sm font-bold text-[#1d4ed8]">
            Frontend Developer
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-[#102033] sm:text-5xl lg:text-6xl">
            Portofolio web yang bersih, modern, dan mudah dibaca.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6f85] sm:text-lg">
            Halo, saya Reza Saputra. Saya membuat website portofolio, landing page,
            dan antarmuka web menggunakan ReactJS serta TailwindCSS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1d4ed8] px-6 text-sm font-bold text-white shadow-lg shadow-[#2563eb]/20 transition hover:bg-[#0f2747]"
            >
              Lihat Proyek
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#b8c7d9] bg-white px-6 text-sm font-bold text-[#102033] transition hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <Stat key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[390px]">
          <div className="rounded-[28px] border border-[#d8e3f0] bg-white p-3 shadow-xl shadow-[#0f2747]/10">
            <img
              src={heroImg}
              alt="Reza Saputra"
              className="aspect-[4/5] w-full rounded-[20px] object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <MiniInfo title="Available" detail="Freelance project" />
            <MiniInfo title="Based in" detail="Indonesia" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
