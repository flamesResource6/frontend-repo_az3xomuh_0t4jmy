import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          company: payload.company || undefined,
          website: payload.website || undefined,
          budget: payload.budget || undefined,
          message: payload.message || undefined,
          source: 'website'
        })
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      console.error(err)
    }
  }

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
          <h2 className="text-3xl font-bold text-white mb-2">Domluvme si krátký call</h2>
          <p className="text-slate-300 mb-8">Nechte nám na sebe kontakt a krátce popište, co chcete zlepšit. Ozveme se do 24 hodin.</p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-200 mb-1">Jméno*</label>
              <input name="name" required className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-200 mb-1">Email*
              </label>
              <input type="email" name="email" required className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-200 mb-1">Firma</label>
              <input name="company" className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-200 mb-1">Web</label>
              <input name="website" className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-200 mb-1">Rozpočet</label>
              <input name="budget" placeholder="např. 50–150 tis. Kč/měsíc" className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-200 mb-1">Zpráva</label>
              <textarea name="message" rows="4" className="w-full border border-white/20 bg-black/40 text-white placeholder-white/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <a href="https://www.millionagency.cz/booking" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 rounded-md btn-glow">
                Rezervovat call
              </a>
              <button type="submit" disabled={status==='sending'} className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 disabled:opacity-60">
                {status==='sending' ? 'Odesíláme…' : 'Odeslat' }
              </button>
              {status==='success' && <p className="text-green-400">Děkujeme, brzy se ozveme.</p>}
              {status==='error' && <p className="text-red-400">Něco se nepovedlo. Zkuste to prosím znovu.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
