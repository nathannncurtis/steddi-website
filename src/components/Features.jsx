import { useEffect, useRef } from 'react'
import RouterIcon from '@/components/ui/router-icon'
import SlidersHorizontalIcon from '@/components/ui/sliders-horizontal-icon'
import ShieldCheck from '@/components/ui/shield-check'
import RefreshIcon from '@/components/ui/refresh-icon'
import LocateIcon from '@/components/ui/locate-icon'
import BrainCircuitIcon from '@/components/ui/brain-circuit-icon'
import PlugConnectedIcon from '@/components/ui/plug-connected-icon'
import FilledBellIcon from '@/components/ui/filled-bell-icon'
import PaintIcon from '@/components/ui/paint-icon'
import ChartBarIcon from '@/components/ui/chart-bar-icon'
import PlayerIcon from '@/components/ui/player-icon'
import DownloadIcon from '@/components/ui/download-icon'
import TriangleAlertIcon from '@/components/ui/triangle-alert-icon'
import PhoneVolume from '@/components/ui/phone-volume'
import TargetIcon from '@/components/ui/target-icon'

const features = [
  { Icon: RouterIcon, title: 'Your Routes, Learned', desc: "Drive a route once. Steddi remembers it and follows your path every time, not whatever the algorithm thinks is best." },
  { Icon: SlidersHorizontalIcon, title: 'Smart Reroute Thresholds', desc: "A sigmoid-scaled engine that adapts to your remaining drive time. Almost there? Higher bar. Long drive ahead? Smaller savings count." },
  { Icon: ShieldCheck, title: 'No-Go Zones', desc: "Draw on the map, trace a road, drop waypoints. Avoid that sketchy intersection, the school zone, the construction that never ends." },
  { Icon: RefreshIcon, title: 'Bidirectional Commutes', desc: "Auto-detects which direction you're heading. Work at 7am, home at 5pm. It just knows." },
  { Icon: LocateIcon, title: 'Commutes, Trips & Pins', desc: "Daily commutes with route hierarchies. Multi-stop road trips planned to the mile. Or just search and go. Three ways to navigate." },
  { Icon: BrainCircuitIcon, title: 'Pattern Learning', desc: "Learns your schedule. Tuesday at 7am? Already knows where you're headed before you open the app." },
  { Icon: PlugConnectedIcon, title: 'CarPlay', desc: "Full turn-by-turn on your car's display. Custom UI built for glanceability. Media controls from the steering wheel." },
  { Icon: FilledBellIcon, title: 'Smart Notifications', desc: "Checks traffic before your usual departure. If your commute is 40 minutes slower than normal, you'll know before you leave." },
  { Icon: PaintIcon, title: 'Six Accent Colors', desc: "Lavender, Ocean, Sage, Coral, Gold, or Slate. Pick a color and it flows through every screen, every route line, every icon." },
  { Icon: ChartBarIcon, title: 'Commute Analytics', desc: "Time spent in traffic, average commute by day of week, trends over months. Your driving data visualized, on your device, for your eyes only." },
  { Icon: PlayerIcon, title: 'Now Playing', desc: "Album art, song title, playback controls right in the nav view. Skip tracks from the steering wheel. Long-press to seek." },
  { Icon: DownloadIcon, title: 'Offline Ready', desc: "Routes cached locally. Voice guidance works without signal. Your commute doesn't stop because your connection did." },
  { Icon: TriangleAlertIcon, title: 'Speed Cameras & Hazards', desc: "Subtle alerts for speed traps and red light cameras. Clean and quiet, not the notification spam you get from other apps." },
  { Icon: PhoneVolume, title: 'Haptic Feedback', desc: "A gentle tap approaching a turn. A distinct pulse for reroute suggestions. Five intensity levels from off to fully customizable." },
  { Icon: TargetIcon, title: 'Purpose-Built Nav UI', desc: "Every pixel of the navigation interface was designed from scratch. No generic SDK overlay. No third-party map branding. Just the road." },
]

export default function Features() {
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
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.06}>
            <div className="feature-card">
              <div className="feature-icon"><f.Icon className="w-6 h-6" /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
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
