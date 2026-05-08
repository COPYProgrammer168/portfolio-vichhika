import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Project', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 32px var(--glow)' : '0 2px 16px rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="font-black text-lg tracking-widest cursor-pointer"
          style={{ color: 'var(--accent)', textShadow: '0 0 16px var(--glow)', fontFamily: 'Megatrox, sans-serif', fontSize: '2rem' }}
          onClick={() => scrollTo('home')}
        > KV </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-xs tracking-widest uppercase transition-all duration-200 hover:opacity-100 opacity-70"
                style={{ color: 'var(--text)', fontFamily: 'transonite, sans-serif', fontSize: '1rem' }}
                onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.opacity = 1 }}
                onMouseLeave={e => { e.target.style.color = 'var(--text)'; e.target.style.opacity = 0.7 }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1"
            style={{
              background: dark ? 'var(--accent)' : 'var(--border)',
              boxShadow: dark ? '0 0 12px var(--glow)' : 'none'
            }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300"
              style={{
                background: 'var(--bg)',
                transform: dark ? 'translateX(28px)' : 'translateX(0px)',
              }}
            >
              {dark ? '🌙' : '☀️'}
            </div>
          </button>

          {/* Mobile Menu Btn */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(o => !o)}
          >
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-0.5 transition-all" style={{ background: 'var(--accent)' }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: 'var(--surface)', borderColor: 'var(--border)', backdropFilter: 'blur(20px)' }}>
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-center px-6 py-3 font-orbitron text-xs tracking-widest uppercase"
              style={{ color: 'var(--text)', fontFamily: 'Orbitron, sans-serif' }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
