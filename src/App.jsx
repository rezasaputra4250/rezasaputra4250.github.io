import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Process from './components/sections/Process'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#172026]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
