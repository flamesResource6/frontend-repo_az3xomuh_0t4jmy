export default function Services() {
  const services = [
    {
      title: 'Meta Ads',
      desc: 'Strategie, tvorba a škálování kampaní na Facebooku a Instagramu.',
    },
    {
      title: 'Google Ads',
      desc: 'Vyhledávání, YouTube, Display – výkon a ziskovost na prvním místě.',
    },
    {
      title: 'TikTok Ads',
      desc: 'Nativní kreativita a testování pro rychlý růst za nízké CPM.',
    },
    {
      title: 'Landing pages',
      desc: 'UX, copy a A/B testy pro maximální konverzní poměr.',
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Co pro vás uděláme</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow bg-white">
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
