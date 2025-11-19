import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-pink-500 shadow-[0_0_18px_rgba(236,72,153,0.45)]"></span>
          <span className="font-semibold text-white">100K Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#services" className="hover:text-white">Služby</a>
          <a href="#work" className="hover:text-white">Výsledky</a>
          <a href="#about" className="hover:text-white">O nás</a>
          <a href="https://www.millionagency.cz/booking" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md btn-glow">Nezávazná konzultace</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-white/10 text-white" aria-label="menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
