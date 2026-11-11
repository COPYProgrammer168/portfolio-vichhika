import { useScrollFade } from '../hooks/useScrollFade'

const icons = {
  cap: <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />,
  briefcase: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />,
  laptop: <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />,
}

const timeline = [
  { year: '2023 – Present', title: 'Norton University', desc: 'Information Technology — Software Development', icon: 'cap' },
  {
    year: '10 Jun 2026 – 10 Sep 2026',
    title: 'Web Developer Intern',
    desc: 'Completed a 3-month internship building and deploying client websites with Laravel, Blade, Tailwind CSS and Alpine.js. Built admin panels with a drag-and-drop block builder and multilingual content in Khmer, English and Chinese, implemented SEO and responsive layouts, and deployed sites on Hostinger via Git and SSH.',
    icon: 'briefcase',
  },
  { year: '2026.03-Present', title: 'Tronmatix Computer', desc: 'Full-stack E-Commerce Platform — Final Year Thesis Project', icon: 'laptop' },
]

const personal = [
  { label: 'DOB', value: '22 NOV 2004' },
  { label: 'Nationality', value: 'Cambodian' },
  { label: 'Email', value: 'vichhika.kry@gmail.com' },
  { label: 'Phone', value: '012-949-139' },
  { label: 'Address', value: 'Phnom Penh, Cambodia' },
  { label: 'Languages', value: 'Khmer (Native) · English (Medium)' },
  { label: 'Hobbies', value: 'Research · Workout · Music' },
]

export default function About() {
  const ref = useScrollFade()

  return (
    <section id="about" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="section-title mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6">
              <div className="sci-card p-6 space-y-4">
                <p className="font-orbitron text-xs tracking-widest opacity-50 mb-4"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                  &gt; PROFILE_LOADED
                </p>
                {[
                  'Strong professional foundation with a keen interest in research and problem-solving.',
                  'Able to work independently, adapt quickly to new environments, and learn new skills efficiently.',
                  'Performs well under pressure with a mature, open-minded, and studious attitude.',
                  'A cooperative team player with experience managing projects independently — planning, design, and report writing.',
                ].map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                    <span style={{ color: 'var(--accent)' }}>›</span> {p}
                  </p>
                ))}
              </div>

              {/* Personal info grid */}
              <div className="sci-card p-6">
                <p className="font-orbitron text-xs tracking-widest opacity-50 mb-4"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                  &gt; PERSONAL_DATA
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {personal.map(({ label, value }) => (
                    <div key={label} className="flex gap-3 items-start text-sm">
                      <span className="font-orbitron text-xs tracking-wider w-24 shrink-0 opacity-60"
                        style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)' }}>
                        {label}
                      </span>
                      <span className="opacity-80" style={{ color: 'var(--text)', fontFamily: 'Exo 2, sans-serif' }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <p className="font-orbitron text-xs tracking-widest opacity-50 mb-6"
                style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)' }}>
                &gt; STUDY_DATA
              </p>
              <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px"
                style={{ '--tw-border-opacity': 1 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

                {timeline.map(({ year, title, desc, icon }, i) => (
                  <div key={i} className="sci-card timeline-card p-5 relative ml-4">
                    {/* Dot */}
                    <div className="absolute -left-7 top-5 w-3 h-3 rounded-full border-2"
                      style={{ background: 'var(--bg)', borderColor: 'var(--accent)', boxShadow: '0 0 8px var(--glow)' }} />

                    <div className="flex items-start gap-3">
                      <span className="timeline-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                          {icons[icon]}
                        </svg>
                      </span>
                      <div>
                        <span className="timeline-year font-orbitron text-xs tracking-wider block mb-1"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {year}
                        </span>
                        <h3 className="timeline-title font-orbitron font-bold text-sm mb-1"
                          style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {title}
                        </h3>
                        <p className="timeline-desc text-xs leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
