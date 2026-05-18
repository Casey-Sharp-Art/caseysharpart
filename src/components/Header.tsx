import { Link } from '@tanstack/react-router'
import { Instagram, Twitter, ExternalLink } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-stone-900 hover:text-stone-600 transition-colors">
          Casey Sharp
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link to="/" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-semibold">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-stone-900 transition-colors [&.active]:text-stone-900 [&.active]:font-semibold">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/caseysharp.art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-stone-500 hover:text-stone-900 transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/CaseyandLines"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-stone-500 hover:text-stone-900 transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://cara.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cara"
            className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 text-xs font-medium"
          >
            <ExternalLink size={16} />
            <span className="hidden sm:inline">Cara</span>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-4 ml-4">
          <Link to="/" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            Portfolio
          </Link>
          <Link to="/contact" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
