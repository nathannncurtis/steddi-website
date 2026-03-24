import {
  Route, Activity, Ban, Repeat, Brain, Monitor,
  Palette, Download, CheckCircle
} from 'lucide-react'

const features = [
  {
    icon: Route,
    title: 'Drive Your Route (BYOR)',
    desc: 'Save your preferred routes by driving them once. Steddi follows your path every time, not the algorithm\'s.',
  },
  {
    icon: Activity,
    title: 'Smart Thresholds',
    desc: 'Sigmoid-scaled rerouting adapts to your remaining drive time. Almost there? Higher bar. Long drive? Smaller savings count.',
  },
  {
    icon: Ban,
    title: 'No-Go Zones',
    desc: 'Draw exclusion areas on the map. That sketchy intersection, the school zone, the road that\'s been "under construction" for three years.',
  },
  {
    icon: Repeat,
    title: 'Bidirectional Commutes',
    desc: 'Steddi auto-detects which direction you\'re heading. Work at 7am, home at 5pm — it just knows.',
  },
  {
    icon: Brain,
    title: 'Pattern Learning',
    desc: 'Learns your schedule after a few trips. Tuesday 7am? It already knows you\'re heading to work on your usual route.',
  },
  {
    icon: Monitor,
    title: 'CarPlay Ready',
    desc: 'Full turn-by-turn on your car\'s display with a custom UI built for glanceability. Not stock Mapbox.',
  },
  {
    icon: Palette,
    title: '6 Accent Colors',
    desc: 'Lavender, Ocean, Sage, Coral, Gold, or Slate. Pick a theme that makes Steddi feel like yours.',
  },
  {
    icon: Download,
    title: 'Offline Caching',
    desc: 'Routes are cached locally so you\'re never stranded without a signal. Your commute works even in tunnels.',
  },
  {
    icon: CheckCircle,
    title: 'Custom Turn-by-Turn',
    desc: 'Purpose-built navigation UI designed for commuters. Clean, readable maneuvers — not a generic SDK overlay.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Navigation that respects you</h2>
        <p className="text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
          Other apps reroute you every 30 seconds. Steddi only speaks up when there's a real reason to change course.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-surface border border-border rounded-2xl p-9 transition-all duration-250 hover:border-accent/18 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] cursor-default"
          >
            <div className="w-13 h-13 bg-accent/12 rounded-xl flex items-center justify-center mb-5 text-accent">
              <f.icon size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2.5">{f.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
