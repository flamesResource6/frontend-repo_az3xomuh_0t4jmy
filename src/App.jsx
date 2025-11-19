import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} 100K Agency — Všechna práva vyhrazena.</p>
          <a href="#contact" className="text-sm text-slate-700 hover:text-slate-900">Nezávazná konzultace</a>
        </div>
      </footer>
    </div>
  )
}

export default App
