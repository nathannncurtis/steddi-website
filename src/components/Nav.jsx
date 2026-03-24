import { MapPin } from 'lucide-react'

export default function Nav() {
  return (
    <nav className="fixed top-3 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-2xl border border-accent/10 bg-bg/65 backdrop-blur-xl backdrop-saturate-150">
      <a href="#" className="flex items-center gap-3 font-heading text-xl font-bold text-text-primary cursor-pointer">
        <img src="/assets/app_icon.png" alt="Steddi" className="w-9 h-9 rounded-lg" />
        <span>Steddi</span>
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#features" className="text-text-secondary text-sm font-medium transition-colors duration-200 hover:text-text-primary cursor-pointer">Features</a></li>
        <li><a href="#how" className="text-text-secondary text-sm font-medium transition-colors duration-200 hover:text-text-primary cursor-pointer">How It Works</a></li>
        <li><a href="#download" className="text-text-secondary text-sm font-medium transition-colors duration-200 hover:text-text-primary cursor-pointer">Download</a></li>
      </ul>

      <a href="#download" className="bg-accent text-bg px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-92 cursor-pointer">
        Get Steddi
      </a>
    </nav>
  )
}
