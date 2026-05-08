export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t" style={{ borderColor: 'var(--border)', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-orbitron font-black text-xl"
            style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)' }}>
            KV
          </span>
          <span className="text-xs ml-3 opacity-40"
            style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
            Kry Vichhika · Software Developer · Graphic Designer
          </span>
        </div>
        <p className="text-xs opacity-30" style={{ color: 'var(--text2)', fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} · BUILT WITH REACT + VITE
        </p>
      </div>
    </footer>
  )
}
