const steps = [
  {
    num: '1',
    title: 'Save Your Commute',
    desc: 'Pin your home and work. Set up a commute between them with your preferred routes.',
  },
  {
    num: '2',
    title: 'Drive Your Routes',
    desc: 'Navigate like normal. Steddi records the route and saves it as your preferred path.',
  },
  {
    num: '3',
    title: 'Stay on Track',
    desc: 'Steddi uses your saved route every time. Only suggests a change when the savings actually matter to you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 md:px-12 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Steddi works</h2>
          <p className="text-lg text-text-secondary">Three steps to take back your commute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 bg-accent text-bg rounded-2xl flex items-center justify-center font-heading text-xl font-bold mx-auto mb-6">
                {s.num}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-text-secondary text-base leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
