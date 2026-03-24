const steps = [
  { num: '1', title: 'Save Your Commute', desc: 'Pin your home and work. Set up a commute between them with your preferred routes.' },
  { num: '2', title: 'Drive Your Routes', desc: 'Navigate like normal. Steddi records the route and saves it as your preferred path.' },
  { num: '3', title: 'Stay on Track', desc: 'Steddi uses your saved route every time. Only suggests a change when the savings actually matter to you.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <div className="how-inner">
        <div className="section-header">
          <h2>How Steddi works</h2>
          <p>Three steps to take back your commute.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
