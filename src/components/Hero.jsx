export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm mb-4">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
            Performance marketing pro firmy, co chtějí růst
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Získejte 100 000+ měsíčně z online kampaní
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Stavíme a škálujeme výkonnostní kampaně na platformách Meta, Google a TikTok.
            Transparentní reporting, rychlé iterace a důraz na ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              Začít spolupráci
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white border border-slate-200 text-slate-800 hover:bg-slate-50">
              Zobrazit výsledky
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 opacity-90"></div>
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl bg-white/80 backdrop-blur border border-white shadow-sm"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
