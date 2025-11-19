import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} 100K Agency — Všechna práva vyhrazena.</p>
          <a href="https://www.millionagency.cz/booking" className="text-sm text-white/90 hover:text-white btn-glow px-4 py-2 rounded-md">Rezervovat call</a>
        </div>
      </footer>
    </div>
  )
}

export default App
