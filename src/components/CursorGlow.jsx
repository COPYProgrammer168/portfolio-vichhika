import { useEffect, useRef } from 'react'

// A soft glowing circle that follows the mouse with a slight lag.
// Uses requestAnimationFrame for smooth 60fps tracking.
// Hidden on touch devices automatically.

export default function CursorGlow() {
  const glowRef = useRef(null)
  // Store current glow position (starts off screen)
  const pos = useRef({ x: -200, y: -200 })
  // Store target position (where mouse actually is)
  const target = useRef({ x: -200, y: -200 })

  useEffect(() => {
    // Update TARGET position on every mouse move
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    // Animation loop — smoothly lerp current pos toward target
    // Lerp = Linear Interpolation: moves 10% closer each frame
    // This creates the "lag" effect — feels organic not robotic
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1
      pos.current.y += (target.current.y - pos.current.y) * 0.1

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`
      }
      requestAnimationFrame(loop)
    }
    const raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        // Radial gradient from cyan center → transparent edge
        background: 'radial-gradient(circle, rgba(0,245,228,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', // never blocks clicks
        zIndex: 9999,
        // Hide on touch screens — no mouse to follow
        display: window.matchMedia('(pointer: fine)').matches ? 'block' : 'none',
      }}
    />
  )
}