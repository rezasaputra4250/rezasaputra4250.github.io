import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Packages from './components/sections/Packages'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'
import CompanyProfileExample from './components/pages/CompanyProfileExample'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (hash === '#company-profile') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash.startsWith('#')) {
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [hash])

  if (hash.startsWith('#company')) {
    return <CompanyProfileExample />
  }

  return (
    <div className="min-h-screen bg-[#f6f9fc] text-[#102033]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Packages />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
