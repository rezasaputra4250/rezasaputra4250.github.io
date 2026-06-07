import { FaExternalLinkAlt } from 'react-icons/fa'
import heroImg from '../../assets/hero.png'
import { stats } from '../../data/portfolioData'
import Stat from '../ui/Stat'
import MiniInfo from '../ui/MiniInfo'

function Hero() {
  return (
    <section id="home" className="border-b border-[#e5dfd4]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div className="text-left">
          <span className="inline-flex rounded-full border border-[#bfdad5] bg-[#ecf8f5] px-4 py-2 text-sm font-bold text-[#0f766e]">
            Frontend Developer
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] text-[#111827] sm:text-5xl lg:text-6xl">
            Portofolio web yang bersih, modern, dan mudah dibaca.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b6470] sm:text-lg">
            Halo, saya Reza Saputra. Saya membuat website portofolio, landing page,
            dan antarmuka web menggunakan ReactJS serta TailwindCSS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#111827] px-6 text-sm font-bold text-white transition hover:bg-[#0f766e]"
            >
              Lihat Proyek
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#d0c8ba] bg-white px-6 text-sm font-bold text-[#172026] transition hover:border-[#0f766e] hover:text-[#0f766e]"
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
          <div className="rounded-[28px] border border-[#e5dfd4] bg-white p-3 shadow-xl shadow-[#172026]/10">
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
