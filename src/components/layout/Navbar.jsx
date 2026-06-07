import { FaEnvelope } from 'react-icons/fa'
import { navItems } from '../../data/portfolioData'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white shadow-md">
            RS
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-black text-slate-900">
              Reza Saputra
            </h1>
            <p className="hidden text-xs font-medium text-slate-500 sm:block">
              Frontend Developer
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-semibold text-slate-600 shadow-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Button */}
        <a
          href="mailto:reza@domain.com"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-teal-600 px-4 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30"
        >
          <FaEnvelope className="text-xs" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </nav>

      {/* Mobile Menu */}
      <div className="border-t border-slate-200/70 bg-white/80 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-6xl justify-center gap-6 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar