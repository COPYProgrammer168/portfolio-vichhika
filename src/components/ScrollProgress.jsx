import { useEffect, useState } from 'react'

// Thin bar at top of page that fills as user scrolls down.
// 0% at top of page → 100% at bottom.
// Uses scroll event + simple math: scrollY / (totalHeight - viewportHeight)

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      // Total scrollable distance = full page height minus viewport
      const total = document.documentElement.scrollHeight - window.innerHeight
      // Convert to percentage
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    // Fixed at very top, full width track
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      zIndex: 9999,
      background: 'rgba(0,245,228,0.08)', // dim track
    }}>
      {/* Fill bar — width driven by scroll percentage */}
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: 'linear-gradient(90deg, #0066ff, #00f5e4, #a855f7)',
        boxShadow: '0 0 8px #00f5e4, 0 0 16px rgba(0,245,228,0.4)',
        transition: 'width 0.05s linear',
      }} />
    </div>
  )
}