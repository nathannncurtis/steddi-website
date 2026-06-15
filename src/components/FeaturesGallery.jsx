import { useEffect, useRef } from 'react'
import RouterIcon from '@/components/ui/router-icon'
import SlidersHorizontalIcon from '@/components/ui/sliders-horizontal-icon'
import ShieldCheck from '@/components/ui/shield-check'
import LocateIcon from '@/components/ui/locate-icon'
import BrainCircuitIcon from '@/components/ui/brain-circuit-icon'
import PlugConnectedIcon from '@/components/ui/plug-connected-icon'
import FilledBellIcon from '@/components/ui/filled-bell-icon'
import PaintIcon from '@/components/ui/paint-icon'
import ChartBarIcon from '@/components/ui/chart-bar-icon'
import PlayerIcon from '@/components/ui/player-icon'
import TriangleAlertIcon from '@/components/ui/triangle-alert-icon'
import PhoneVolume from '@/components/ui/phone-volume'
import TargetIcon from '@/components/ui/target-icon'
import GaugeIcon from '@/components/ui/gauge-icon'
import MapPinIcon from '@/components/ui/map-pin-icon'

const featured = [
  { Icon: RouterIcon, title: 'Your Routes, Learned', desc: "Drive a route once. Steddi remembers it and follows your path every time, not whatever the algorithm thinks is best." },
  { Icon: SlidersHorizontalIcon, title: 'Reroute Only When It Matters', desc: "A sigmoid-scaled threshold weighed against your remaining drive. Almost there? Higher bar. Long way to go? Smaller savings count. No detours through neighborhoods to shave 90 seconds." },
  { Icon: TargetIcon, title: 'Custom Routing Engine', desc: "A from-scratch router built on the OpenStreetMap road graph — A* search with a cost model that knows an unprotected left across busy oncoming traffic is worth a right-hand detour. Opt-in, with Apple Maps as the safety net." },
  { Icon: ShieldCheck, title: 'No-Go Zones', desc: "Draw freehand, trace a named road, drop dot-to-dot waypoints, or outline a polygon. Set time windows so a school zone only counts at 3pm. Steddi routes around them." },
  { Icon: LocateIcon, title: 'Commutes, Trips & Pins', desc: "Daily commutes with both directions auto-detected. Multi-stop trips planned to the mile. Or just search and go. Three ways to navigate." },
  { Icon: BrainCircuitIcon, title: 'Smart Commute Notifications', desc: "Learns your departure windows and checks traffic and weather before you leave. If today's commute is well off your normal, you'll know first — decided entirely on-device." },
]

const compact = [
  { Icon: PaintIcon, title: 'Dynamic Theming', desc: "Solar, weather, temperature and tunnels, blended live." },
  { Icon: GaugeIcon, title: 'Real Speed Limits', desc: "OSM limits with amber and red over-limit bands." },
  { Icon: TriangleAlertIcon, title: 'Cameras & Road Memory', desc: "Speed traps, red-light cameras, remembered potholes." },
  { Icon: MapPinIcon, title: 'Places & POI', desc: "Search, categorize, navigate or save — with review links." },
  { Icon: PlayerIcon, title: 'Music, Ducked Not Paused', desc: "Now Playing mini-bar; guidance ducks audio, never stops it." },
  { Icon: ChartBarIcon, title: 'Commute Analytics', desc: "Your driving trends, visualized, on your device." },
  { Icon: PlugConnectedIcon, title: 'CarPlay & Widgets', desc: "Full nav on the dash, ETA widget, Live Activities, Siri." },
  { Icon: FilledBellIcon, title: 'Emergency Mode', desc: "Share location, find nearby help, reach your contact." },
  { Icon: PhoneVolume, title: 'Haptics & Voice', desc: "Five intensity levels and a premium voice picker." },
]

export default function FeaturesGallery() {
  return (
    <section id="features" className="features">
      <div className="section-header">
        <FadeIn>
          <h2>Everything, considered</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p>Not a feature checklist. A navigation app where every detail has a reason to exist.</p>
        </FadeIn>
      </div>

      <div className="features-grid">
        {featured.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.08}>
            <div className="feature-card">
              <div className="feature-icon"><f.Icon className="w-6 h-6" /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="features-compact">
        {compact.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.06}>
            <div className="feature-compact-item">
              <div className="feature-compact-icon"><f.Icon className="w-4 h-4" /></div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay * 1000)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return <div ref={ref} className="fade-in">{children}</div>
}
