import { useScrollFade } from '../hooks/useScrollFade'

const skills = [
  { name: 'PHP Laravel', level: 70, desc: 'MVC, routing, database, auth', icon: '🐘', cat: 'Backend' },
  { name: 'React + Vite', level: 60, desc: 'Frontend design, OAuth, hooks', icon: '⚛️', cat: 'Frontend' },
  { name: 'PostgreSQL', level: 65, desc: 'Database design & queries', icon: '🐘', cat: 'Database' },
  { name: 'UX/UI (Figma)', level: 75, desc: 'Prototype & website design', icon: '🎨', cat: 'Design' },
  { name: 'PS / AE', level: 70, desc: 'Editing, posters, motion effects', icon: '🖌️', cat: 'Design' },
  { name: 'Tailwind CSS', level: 60, desc: 'Utility-first CSS styling', icon: '💨', cat: 'Frontend' },
  { name: 'Word / PPT', level: 85, desc: 'Documentation & slide design', icon: '📝', cat: 'Tools' },
  { name: 'AI Prompt Engineering', level: 60, desc: 'AI integration in projects', icon: '🤖', cat: 'Emerging' },
]

export default function Skills() {
  const ref = useScrollFade()

  return (
    <section id="skills" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="section-title mb-12">Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map(({ name, level, desc, icon, cat }) => (
              <div key={name} className="sci-card p-5 group">
                {/* Category badge */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="skill-tag">{cat}</span>
                </div>

                {/* Skill name */}
                <h3 className="font-orbitron font-bold text-sm mb-1"
                  style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text)' }}>
                  {name}
                </h3>
                <p className="text-xs mb-4 opacity-60" style={{ color: 'var(--text2)', fontFamily: 'Exo 2, sans-serif' }}>
                  {desc}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-orbitron opacity-50" style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--text2)', fontSize: '0.6rem' }}>
                      PROFICIENCY
                    </span>
                    <span className="font-orbitron" style={{ fontFamily: 'Orbitron, sans-serif', color: 'var(--accent)', fontSize: '0.6rem' }}>
                      {level}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000 group-hover:shadow-lg"
                      style={{
                        width: `${level}%`,
                        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                        boxShadow: '0 0 8px var(--glow)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
