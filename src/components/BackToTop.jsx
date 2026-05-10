import { useEffect, useState } from 'react'

// Floating button bottom-right.
// Appears after scrolling 400px down.
// Smooth scrolls back to top on click.

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  // Track if mouse is hovering for glow effect
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '24px',
        zIndex: 999,
        width: '44px',
        height: '44px',
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '1rem',
        color: hovered ? 'var(--bg)' : 'var(--accent)',
        background: hovered ? 'var(--accent)' : 'var(--surface)',
        border: '1px solid var(--accent)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        boxShadow: hovered ? '0 0 24px var(--glow)' : '0 0 8px var(--glow)',
        backdropFilter: 'blur(12px)',
        // Slide up when visible, slide down when hidden
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        opacity: visible ? 1 : 0,
        transition: 'all 0.3s ease',
      }}
    >
      ↑
    </button>
  )
}