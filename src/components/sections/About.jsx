import { skills } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'
import InfoCard from '../ui/InfoCard'

function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.78fr_1.22fr]">
        <SectionTitle
          eyebrow="Tentang Saya"
          title="Saya merancang tampilan web yang rapi, jelas, dan siap digunakan."
        />

        <div className="text-left">
          <p className="max-w-3xl text-lg leading-8 text-[#5b6470]">
            Saya suka membangun halaman yang tidak hanya terlihat bagus, tetapi juga
            nyaman dibaca dan mudah dipakai. Fokus saya ada pada struktur konten,
            konsistensi komponen, responsivitas, dan detail kecil yang membuat website
            terasa lebih profesional.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <InfoCard title="Yang saya kerjakan" detail="Portfolio, landing page, company profile, dan UI dashboard." />
            <InfoCard title="Cara saya bekerja" detail="Mulai dari kebutuhan, susun layout, build component, lalu testing." />
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#e5dfd4] bg-white px-4 py-2 text-sm font-bold text-[#3f4852]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
