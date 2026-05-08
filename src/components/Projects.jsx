import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Projects.module.css'

/* ── EDIT YOUR PROJECTS HERE ─────────────────── */
const PROJECTS = [
  {
    title: 'Tronmatix Computer',
    role: 'Full Stack Developer · Thesis Project',
    desc: `Built a full e-commerce platform for computer hardware from scratch as my final-year university thesis — solo, end to end. Covers everything from database design and REST API to Google OAuth, Maps integration, Khmer/English localization, and production deployment on Render.`,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=900&q=80',
    liveUrl: 'https://tronmatix.onrender.com',
    githubUrl: 'https://github.com/yourusername/tronmatix',
    tags: ['Laravel', 'React', 'MySQL', 'Google OAuth', 'Maps API', 'Render'],
    accentTags: ['Laravel', 'React'],
    featured: true,
  },
  {
    title: 'Project Two',
    role: 'Role · Type',
    desc: 'Describe what this project does. Focus on what problem it solves and what you shipped specifically. Two or three sentences is enough.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    liveUrl: '',
    githubUrl: '',
    tags: ['Tech A', 'Tech B', 'Tech C'],
    accentTags: [],
    featured: false,
  },
  {
    title: 'Project Three',
    role: 'Role · Type',
    desc: 'Another project. Could be a course assignment, open source contribution, or personal experiment. Real scope beats big names.',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80',
    liveUrl: '',
    githubUrl: '',
    tags: ['Tech A', 'Tech B'],
    accentTags: [],
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''} reveal`}
         style={{ transitionDelay: `${index * 0.12}s` }}>

      {/* Image */}
      <div className={styles.imgWrap}>
        {project.featured && <div className={styles.featuredBadge}>⭐ Thesis Project</div>}
        {!imgErr ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className={styles.imgFallback}>
            <span>{project.title.slice(0,2).toUpperCase()}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.role}>{project.role}</div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.tags}>
          {project.tags.map(t => (
            <span key={t} className={`pill ${project.accentTags.includes(t) ? 'pill-accent' : ''}`}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              View live
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-wrap">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="section-title reveal delay-1">Things I've <em>built</em></h2>
        <div className="section-rule reveal delay-2" />

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
