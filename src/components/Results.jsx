export default function Results() {
  const results = [
    { label: 'E‑shop s módou', metric: '+218% ROAS', note: 'během 90 dní' },
    { label: 'SaaS B2B', metric: '+142% MRR', note: 'za 6 měsíců' },
    { label: 'DTC značka', metric: '3.1x scale', note: 'při stabilní CPA' },
  ]

  return (
    <section id="work" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ověřené výsledky</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.label} className="p-6 rounded-xl bg-white border border-slate-200">
              <p className="text-slate-500 text-sm mb-2">{r.label}</p>
              <p className="text-2xl font-extrabold text-slate-900">{r.metric}</p>
              <p className="text-slate-500 text-sm">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
