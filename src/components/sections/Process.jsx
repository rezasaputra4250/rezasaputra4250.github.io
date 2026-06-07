import { processSteps } from '../../data/portfolioData'
import SectionTitle from '../ui/SectionTitle'

function Process() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.78fr_1.22fr]">
        <SectionTitle eyebrow="Proses" title="Alur kerja sederhana supaya hasilnya terarah." />

        <div className="space-y-4">
          {processSteps.map((item) => (
            <div key={item.step} className="grid gap-4 rounded-2xl border border-[#d8e3f0] bg-white p-5 text-left shadow-sm shadow-[#0f2747]/5 sm:grid-cols-[72px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2747] text-sm font-black text-white">
                {item.step}
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
  )
}

export default Process
