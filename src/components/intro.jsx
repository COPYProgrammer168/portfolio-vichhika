import { useState, useEffect } from 'react'

// ─── ANIMATED ORBS ───────────────────────────────────────────────
// We generate orbs randomly once on mount using useMemo pattern
// Each orb has random: position, size, color, speed, delay
const ORBS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  // Random position across full screen (%)
  x: Math.random() * 100,
  y: Math.random() * 100,
  // Random size between 150px and 400px
  size: 150 + Math.random() * 250,
  // Pick from 3 sci-fi colors
  color: ['#00f5e4', '#a855f7', '#0066ff'][Math.floor(Math.random() * 3)],
  // Random float duration 10s–22s (slower = more elegant)
  duration: 10 + Math.random() * 12,
  // Random delay so they don't all move together
  delay: Math.random() * 5,
  // Random movement distance -60px to +60px
  dx: (Math.random() - 0.5) * 120,
  dy: (Math.random() - 0.5) * 120,
}))

// ─── BOOT LINES ──────────────────────────────────────────────────
// Each line appears one by one like a real terminal
const BOOT_LINES = [
  { text: '> SYSTEM BOOT v2.0.4',         delay: 0    },
  { text: '> INITIALIZING CORE...',        delay: 600  },
  { text: '> LOADING PROFILE...',          delay: 1100 },
  { text: '> USER: KRY_VICHHIKA',          delay: 1600 },
  { text: '> ROLE: SOFTWARE_DEVELOPER',    delay: 2000 },
  { text: '> STATUS: AVAILABLE_INTERNSHIP',delay: 2400 },
  { text: '> ACCESS GRANTED',              delay: 2900 },
]

export default function Intro({ onComplete }) {
  // Which lines are currently visible
  const [visibleLines, setVisibleLines] = useState([])
  // Progress bar width 0–100
  const [progress, setProgress] = useState(0)
  // Trigger glitch flash before exit
  const [glitch, setGlitch] = useState(false)
  // Trigger exit slide animation
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // ── Step 1: Show each boot line one by one ──
    // forEach line, set a timeout based on its delay
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        // Add this line index to visible list
        setVisibleLines(prev => [...prev, i])
      }, line.delay)
    })

    // ── Step 2: Fill progress bar after last line appears ──
    // Starts at 3000ms, fills over 600ms using requestAnimationFrame
    setTimeout(() => {
      const start = performance.now()
      const duration = 600 // ms to fill bar

      const tick = (now) => {
        const elapsed = now - start
        const pct = Math.min((elapsed / duration) * 100, 100)
        setProgress(pct)
        // Keep animating until 100%
        if (pct < 100) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, 3000)

    // ── Step 3: Glitch flash at 3700ms ──
    setTimeout(() => setGlitch(true),  3700)
    // Turn glitch off after 300ms (just a quick flash)
    setTimeout(() => setGlitch(false), 4000)

    // ── Step 4: Start exit slide animation at 4100ms ──
    setTimeout(() => setExiting(true), 4100)

    // ── Step 5: Call onComplete so App.jsx hides intro ──
    // 300ms after exit starts (matches CSS transition duration)
    setTimeout(() => onComplete(), 4500)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#05070f',
        overflow: 'hidden',
        // Exit: slide the whole intro UP off screen
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.7, 0, 1, 0.3)',
        // Glitch: rapid background color flash
        filter: glitch ? 'hue-rotate(180deg) brightness(2)' : 'none',
      }}
    >

      {/* ── ANIMATED ORBS ── */}
      {/* These are the glowing blurred circles floating around */}
      {ORBS.map(orb => (
        <div
          key={orb.id}
          style={{
            position: 'absolute',
            // Place at random position
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            // Shift by half size so position is centered
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: orb.color,
            // Heavy blur = soft glow cloud effect
            filter: `blur(80px)`,
            // Low opacity so it doesn't overpower text
            opacity: 0.12,
            // Animate floating using CSS custom keyframes
            animation: `orb-float-${orb.id} ${orb.duration}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}

      {/* ── GLASS PANEL ── */}
      {/* Frosted rectangle in center holds the terminal text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            // Glass effect: semi-transparent + blur of what's behind
            background: 'rgba(10, 15, 35, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 245, 228, 0.15)',
            // Soft cyan glow around the panel
            boxShadow: '0 0 60px rgba(0, 245, 228, 0.08), inset 0 0 40px rgba(0, 245, 228, 0.03)',
            borderRadius: '4px',
            padding: '40px 60px',
            minWidth: '420px',
            maxWidth: '90vw',
          }}
        >
          {/* Top bar — like a terminal title bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            {/* Traffic light dots */}
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.6rem',
              color: 'rgba(0,245,228,0.4)',
              letterSpacing: '0.2em',
              marginLeft: '12px',
            }}>
              SYSTEM_TERMINAL v2.0
            </span>
          </div>

          {/* Boot lines — each fades in when added to visibleLines */}
          <div style={{ minHeight: '180px' }}>
            {BOOT_LINES.map((line, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                  // Fade in when visible, invisible when not yet shown
                  opacity: visibleLines.includes(i) ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  // Different colors for different line types
                  color: i === 6
                    ? '#22c55e'           // ACCESS GRANTED = green
                    : i >= 3 && i <= 5
                    ? '#00f5e4'           // Profile data = cyan
                    : 'rgba(224,240,255,0.7)', // System lines = dim white
                }}
              >
                {line.text}
                {/* Blinking cursor only on the LAST visible line */}
                {i === Math.max(...visibleLines, -1) && i < BOOT_LINES.length - 1 && (
                  <span style={{ animation: 'blink 1s step-end infinite', color: '#00f5e4' }}>_</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar — only shows after last line */}
          {visibleLines.length === BOOT_LINES.length && (
            <div style={{ marginTop: '20px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px',
              }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: 'rgba(0,245,228,0.5)', letterSpacing: '0.1em' }}>
                  LOADING
                </span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.6rem', color: '#00f5e4' }}>
                  {Math.round(progress)}%
                </span>
              </div>
              {/* Track */}
              <div style={{ height: '2px', background: 'rgba(0,245,228,0.1)', borderRadius: '2px' }}>
                {/* Fill — width driven by progress state */}
                <div style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #0066ff, #00f5e4)',
                  borderRadius: '2px',
                  // Glow on the bar itself
                  boxShadow: '0 0 8px #00f5e4',
                  transition: 'width 0.05s linear',
                }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── SCANLINE OVERLAY ── */}
      {/* Thin horizontal lines across whole screen = old CRT monitor feel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, rgba(0,245,228,0.015) 0px, rgba(0,245,228,0.015) 1px, transparent 1px, transparent 3px)',
      }} />

      {/* ── GRID OVERLAY ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,245,228,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,228,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* ── SKIP BUTTON ── */}
      {/* Small button bottom-right for people who've seen the intro before */}
      <button
        onClick={onComplete}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          color: 'rgba(0,245,228,0.4)',
          background: 'transparent',
          border: '1px solid rgba(0,245,228,0.15)',
          padding: '6px 14px',
          cursor: 'pointer',
        }}
        onMouseEnter={e => e.target.style.color = '#00f5e4'}
        onMouseLeave={e => e.target.style.color = 'rgba(0,245,228,0.4)'}
      >
        SKIP ›
      </button>

      {/* ── INJECT KEYFRAME ANIMATIONS ── */}
      {/* We inject CSS for orb float animations dynamically */}
      {/* Each orb gets its own unique keyframe using its dx/dy values */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50%       { opacity: 0 }
        }
        ${ORBS.map(orb => `
          @keyframes orb-float-${orb.id} {
            0%   { transform: translate(-50%, -50%) translate(0px, 0px) }
            33%  { transform: translate(-50%, -50%) translate(${orb.dx * 0.5}px, ${orb.dy * 0.3}px) }
            66%  { transform: translate(-50%, -50%) translate(${orb.dx * -0.3}px, ${orb.dy * 0.7}px) }
            100% { transform: translate(-50%, -50%) translate(0px, 0px) }
          }
        `).join('')}
      `}</style>
    </div>
  )
}