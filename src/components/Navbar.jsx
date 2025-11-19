import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded"></span>
          <span className="font-semibold text-slate-800">100K Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#services" className="hover:text-slate-900">Služby</a>
          <a href="#work" className="hover:text-slate-900">Výsledky</a>
          <a href="#about" className="hover:text-slate-900">O nás</a>
          <a href="#contact" className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">Nezávazná konzultace</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-slate-100" aria-label="menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
