import { useState, useRef } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import emailjs from '@emailjs/browser'

// ── CONFIGURE EMAILJS ──────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_gdk0k9o' 
const EMAILJS_TEMPLATE_ID = 'template_hq00yfg'
const EMAILJS_PUBLIC_KEY  = 'WZulSV2eLpt8vLj-Y'
// ──────────────────────────────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useScrollFade()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
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

  const info = [
    { label: 'EMAIL', value: 'vichhika.kry@gmail.com', icon: '📧', href: 'mailto:vichhika.kry@gmail.com' },
    { label: 'PHONE', value: '012-949-139', icon: '📱', href: 'tel:012949139' },
    { label: 'LOCATION', value: 'Phnom Penh, Cambodia', icon: '📍', href: null },
    { label: 'UNIVERSITY', value: 'Norton University', icon: '🎓', href: null },
  ]

  return (
    <section id="contact" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="fade-in">
          <h2 className="section-title mb-12">Contact</h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left — Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="sci-card p-6 mb-6">
                <p className="font-orbitron text-xs tracking-widest opacity-50 mb-4"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                  &gt; ESTABLISH_CONNECTION
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                  Looking for an internship opportunity in software development. Feel free to reach out — I respond within 24 hours.
                </p>
              </div>

              {info.map(({ label, value, icon, href }) => (
                <div key={label} className="sci-card p-4 flex items-center gap-4">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="font-orbitron text-xs tracking-wider opacity-50 mb-0.5"
                      style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.6rem' }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-sm hover:opacity-80 transition-opacity"
                        style={{ color: 'var(--text)', fontFamily: 'Exo 2, sans-serif', textDecoration: 'none' }}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: 'var(--text)', fontFamily: 'Exo 2, sans-serif' }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div className="md:col-span-3">
              <div className="sci-card p-8">
                <p className="font-orbitron text-xs tracking-widest opacity-50 mb-6"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                  &gt; SEND_MESSAGE
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
                        ⚠ Failed to send. Please try again or email directly at vichhika.kry@gmail.com
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

                    <p className="text-xs text-center opacity-40" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                      Message will be delivered to vichhika.kry@gmail.com
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
