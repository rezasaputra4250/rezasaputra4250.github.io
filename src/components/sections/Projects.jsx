import { FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

function Projects() {
  return (
    <section id="projects" className="border-y border-[#d8e3f0] bg-[#eaf2ff] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Portofolio" title="Proyek pilihan untuk menampilkan kemampuan saya." />
          <p className="max-w-md text-left leading-7 text-[#5f6f85] md:text-right">
            Contoh jenis project yang bisa dikembangkan menjadi website nyata dan siap dipublikasikan.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-[#c8d7ea] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0f2747]/10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-black text-[#2563eb]">0{index + 1}</span>
                <span className="rounded-full bg-[#eaf2ff] px-3 py-1 text-xs font-bold text-[#1d4ed8]">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-black text-[#102033]">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#5f6f85]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-[#f1f6fb] px-3 py-1 text-xs font-bold text-[#52657a]">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.href || '#contact'}
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#2563eb] transition group-hover:gap-3"
              >
                {project.action || 'Diskusikan project'}
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
