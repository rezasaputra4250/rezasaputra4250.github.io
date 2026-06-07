import { FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

function Projects() {
  return (
    <section id="projects" className="border-y border-[#e5dfd4] bg-[#efebe3] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle eyebrow="Portofolio" title="Proyek pilihan untuk menampilkan kemampuan saya." />
          <p className="max-w-md text-left leading-7 text-[#68727f] md:text-right">
            Contoh jenis project yang bisa dikembangkan menjadi website nyata dan siap dipublikasikan.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-[#ddd5c8] bg-[#fffefa] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172026]/10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-black text-[#0f766e]">0{index + 1}</span>
                <span className="rounded-full bg-[#edf7f4] px-3 py-1 text-xs font-bold text-[#0f766e]">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-black text-[#111827]">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#5b6470]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-[#eee8dd] px-3 py-1 text-xs font-bold text-[#5b6470]">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#0f766e] transition group-hover:gap-3"
              >
                Diskusikan project
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
