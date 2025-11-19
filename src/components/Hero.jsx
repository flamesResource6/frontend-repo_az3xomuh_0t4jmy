export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-fuchsia-200 text-sm mb-4">
            <span className="inline-block w-2 h-2 bg-fuchsia-400 rounded-full"></span>
            Performance marketing pro firmy, co chtějí růst
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Získejte 100 000+ měsíčně z online kampaní
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Stavíme a škálujeme výkonnostní kampaně na platformách Meta, Google a TikTok.
            Transparentní reporting, rychlé iterace a důraz na ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://www.millionagency.cz/booking" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md btn-glow">
              Začít spolupráci
            </a>
            <a href="https://www.millionagency.cz/booking" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/5">
              Zobrazit výsledky
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-pink-500 opacity-80 shadow-[0_0_40px_rgba(217,70,239,0.45)]"></div>
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl bg-white/5 backdrop-blur border border-white/10"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
