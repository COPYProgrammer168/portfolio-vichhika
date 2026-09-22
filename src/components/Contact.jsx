import { useState, useRef } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import emailjs from '@emailjs/browser'

// ── CONFIGURE EMAILJS ──────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_gdk0k9o'
const EMAILJS_TEMPLATE_ID = 'template_hq00yfg'
const EMAILJS_PUBLIC_KEY  = 'WZulSV2eLpt8vLj-Y'
// ──────────────────────────────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useScrollFade()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email format'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="section-title mb-12">Contact</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left — Quick Reach */}
            <div className="md:col-span-2 space-y-4">
              <div className="sci-card p-6 mb-6">
                <p className="font-orbitron text-xs tracking-widest opacity-50 mb-4"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                  {'>'} ESTABLISH_CONNECTION
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                  Looking for an internship opportunity in software development. Feel free to reach out — I respond within 24 hours.
                </p>
              </div>

              {/* Email card */}
              <a
                href="mailto:vichhika.kry@gmail.com"
                className="sci-card p-4 flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.boxShadow = '0 0 20px var(--glow)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--glow)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    color: 'var(--accent)',
                    fontSize: '1rem',
                  }}
                >
                  ✉
                </div>
                <div>
                  <div className="font-orbitron text-xs tracking-wider opacity-50 mb-0.5"
                    style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.6rem' }}>
                    EMAIL
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text)', fontFamily: 'Exo 2, sans-serif' }}>
                    vichhika.kry@gmail.com
                  </span>
                </div>
              </a>

              {/* Telegram card */}
              <a
                href="https://t.me/012949139"
                target="_blank"
                rel="noopener noreferrer"
                className="sci-card p-4 flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent2)'
                  e.currentTarget.style.boxShadow = '0 0 20px var(--glow2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'rgba(168,85,247,0.08)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    color: 'var(--accent2)',
                    fontSize: '1rem',
                  }}
                >
                  ✈
                </div>
                <div>
                  <div className="font-orbitron text-xs tracking-wider opacity-50 mb-0.5"
                    style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent2)', fontSize: '0.6rem' }}>
                    TELEGRAM
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text)', fontFamily: 'Exo 2, sans-serif' }}>
                    012-949-139
                  </span>
                </div>
              </a>
            </div>

            {/* Right — Form (Terminal Window) */}
            <div className="md:col-span-3">
              <div className="terminal-window">
                {/* Terminal top bar */}
                <div className="term-bar">
                  <div className="term-dot" style={{ background: '#ef4444' }} />
                  <div className="term-dot" style={{ background: '#f59e0b' }} />
                  <div className="term-dot" style={{ background: '#22c55e' }} />
                  <span style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '0.65rem',
                    color: 'var(--text2)',
                    opacity: 0.5,
                    letterSpacing: '0.1em',
                    marginLeft: '12px',
                  }}>
                    {'>'} contact_transmit.exe
                  </span>
                </div>

                <div className="p-8">
                  <p className="font-orbitron text-xs tracking-widest opacity-50 mb-6"
                    style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                    {'>'} SEND_MESSAGE
                  </p>

                  {/* Success state */}
                  {status === 'success' && (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl"
                        style={{ background: 'rgba(34,197,94,0.1)', border: '2px solid #22c55e', boxShadow: '0 0 24px rgba(34,197,94,0.3)' }}>
                        ✓
                      </div>
                      <h3 className="font-orbitron font-bold"
                        style={{ fontFamily: 'Orbitron, sans-serif', color: '#22c55e' }}>
                        MESSAGE_SENT
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                        Your message has been transmitted successfully. I'll respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn-sci mt-4"
                      >
                        Send Another
                      </button>
                    </div>
                  )}

                  {status !== 'success' && (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-orbitron text-xs tracking-wider block mb-2"
                            style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.62rem' }}>
                            YOUR NAME *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="sci-input"
                            style={{ fontSize: '0.875rem' }}
                          />
                          {errors.name && <p className="text-xs mt-1" style={{ color: '#ef4444', fontFamily: 'Exo 2, sans-serif' }}>{errors.name}</p>}
                        </div>
                        <div>
                          <label className="font-orbitron text-xs tracking-wider block mb-2"
                            style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.62rem' }}>
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="sci-input"
                            style={{ fontSize: '0.875rem' }}
                          />
                          {errors.email && <p className="text-xs mt-1" style={{ color: '#ef4444', fontFamily: 'Exo 2, sans-serif' }}>{errors.email}</p>}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="font-orbitron text-xs tracking-wider block mb-2"
                          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.62rem' }}>
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Internship Opportunity / Collaboration..."
                          className="sci-input"
                          style={{ fontSize: '0.875rem' }}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="font-orbitron text-xs tracking-wider block mb-2"
                          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.62rem' }}>
                          MESSAGE *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell me about the opportunity, project, or just say hello..."
                          className="sci-input"
                          style={{ resize: 'vertical', minHeight: '120px', fontSize: '0.875rem' }}
                        />
                        {errors.message && <p className="text-xs mt-1" style={{ color: '#ef4444', fontFamily: 'Exo 2, sans-serif' }}>{errors.message}</p>}
                      </div>

                      {/* Error banner */}
                      {status === 'error' && (
                        <div className="p-3 text-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', color: '#ef4444', fontFamily: 'Exo 2, sans-serif' }}>
                          ⚠ Failed to send. Please try again or contact directly:
                          <div className="mt-1 flex gap-4">
                            <a href="mailto:vichhika.kry@gmail.com" style={{ color: 'var(--accent)' }}>✉ vichhika.kry@gmail.com</a>
                            <a href="tel:012949139" style={{ color: 'var(--accent2)' }}>✈ 012-949-139</a>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-sci btn-sci-filled w-full justify-center"
                        style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="inline-block animate-spin mr-2">◌</span>
                            TRANSMITTING...
                          </>
                        ) : (
                          <>✉ &nbsp;SEND MESSAGE</>
                        )}
                      </button>

                      {/* Reach me via */}
                      <div className="pt-2">
                        <p className="font-orbitron text-xs tracking-wider mb-3 opacity-50"
                          style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)', fontSize: '0.6rem' }}>
                          {'>'} REACH_ME_VIA
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href="mailto:vichhika.kry@gmail.com"
                            className="sci-card px-4 py-2 flex items-center gap-2"
                            style={{ textDecoration: 'none' }}
                          >
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>✉</span>
                            <span className="font-orbitron text-xs" style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text)' }}>
                              vichhika.kry@gmail.com
                            </span>
                          </a>
                          <a
                            href="https://t.me/012949139"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sci-card px-4 py-2 flex items-center gap-2"
                            style={{ textDecoration: 'none' }}
                          >
                            <span style={{ color: 'var(--accent2)', fontSize: '0.9rem' }}>✈</span>
                            <span className="font-orbitron text-xs" style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text)' }}>
                              012-949-139
                            </span>
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-center opacity-40 mt-2" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                        Message will be delivered to vichhika.kry@gmail.com or 012-949-139
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
