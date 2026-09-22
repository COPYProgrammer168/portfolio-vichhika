import { useScrollFade } from "../hooks/useScrollFade";
import frontendImg from "../assets/frontend.jpg";
import figmaImg from "../assets/figma.jpg";

const projects = [
  {
    title: "Tronmatix Computer",
    date: "2026.03 - PRESENT",
    description: "A full-stack computer hardware e-commerce platform. Independently developed and deployed, featuring enterprise-grade functionality including multi-role authentication, bilingual support, and a complete admin ecosystem.",
    features: [
      "Role-based Authentication",
      "Google OAuth Integration",
      "Order Management System",
      "Khmer / English Localization",
      "Admin Dashboard",
      "AI Engineer Integration",
      "PostgreSQL Database",
      "Render Cloud Deployment",
    ],
    stack: [
      "Laravel",
      "React",
      "Vite",
      "PostgreSQL",
      "Google OAuth",
      "Render",
      "AI Prompt",
    ],
    liveUrl: "https://tronmatix-frontend.onrender.com/",
    img: frontendImg
  },
  {
    title: "Template Project - Tronmatix Computer Figma Design",
    date: "2026",
    description: "A secondary project showcasing technical versatility, featuring a design and integrated Frontend.",
    features: [
      "Template Project",
    ],
    stack: [
      "Figma",
    ],
    liveUrl: "https://www.figma.com/design/0128XEe7UKajp4G4ZrVy0m/TronmatixComuter?node-id=0-1&t=xITkohOXoQRkgMwP-1",
    img: figmaImg
  }
];

function TerminalWindow({ project, index }) {
  const codename = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

  return (
    <div
      className="terminal-window project-holo reveal"
      style={{
        transitionDelay: `${index * 0.15}s`,
        animation: `fadeUp 0.7s ${index * 0.15}s ease both`,
      }}
    >
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
          {'>'} {codename}.exe
        </span>
        <span style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '0.55rem',
          color: 'var(--accent)',
          opacity: 0.4,
          marginLeft: 'auto',
          letterSpacing: '0.1em',
        }}>
          LIVE
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Preview side */}
        <div
          className="relative overflow-hidden min-h-[380px]"
          style={{
            background: "linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%)",
            borderRight: "1px solid var(--border)",
          }}
        >
          <div className="absolute inset-4 sci-card overflow-hidden flex flex-col">
            {/* Browser bar */}
            <div
              className="flex items-center gap-1.5 px-3 py-2 shrink-0"
              style={{ borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
              <div
                className="flex-1 rounded px-2 py-0.5 text-xs opacity-50 truncate ml-2"
                style={{ background: "var(--bg)", color: "var(--text2)", fontFamily: "Exo 2, sans-serif" }}
              >
                {project.liveUrl.replace(/https?:\/\//, '').replace(/\/$/, '')}
              </div>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontSize: "0.75rem", textDecoration: "none" }}>↗</a>
            </div>

            {/* Preview image with scan line */}
            <div className="relative overflow-hidden" style={{ height: "300px" }}>
              <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top" />
              <div className="scan-line" />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,0,0,0.4)", textDecoration: "none" }}
              >
                <span className="btn-sci" style={{ fontSize: "0.65rem" }}>↗ Open Site</span>
              </a>
            </div>
          </div>

          {/* Live badge */}
          <div className="absolute top-6 right-6 sci-card px-3 py-2 text-center">
            <div className="font-orbitron font-bold text-xs" style={{ fontFamily: "Orbitron, sans-serif", color: "#22c55e" }}>LIVE</div>
            <div className="w-2 h-2 rounded-full mx-auto mt-1 animate-pulse" style={{ background: "#22c55e" }} />
          </div>
        </div>

        {/* Info side */}
        <div className="p-8 space-y-6">
          <div>
            <span
              className="font-orbitron text-xs tracking-widest block mb-2"
              style={{ fontFamily: "Orbitron, sans-serif", color: "var(--accent)" }}
            >
              {project.date}
            </span>
            <h3
              className="font-orbitron font-black text-2xl mb-2"
              style={{ fontFamily: "Orbitron, sans-serif", color: "var(--text)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text2)", fontFamily: "Exo 2, sans-serif" }}
            >
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <p
                className="font-orbitron text-xs tracking-wider mb-3 opacity-50"
                style={{ fontFamily: "Orbitron, sans-serif", color: "var(--text2)" }}
              >
                {'>'} FEATURES
              </p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <span key={f} className="feature-tag">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stack */}
          <div>
            <p
              className="font-orbitron text-xs tracking-wider mb-3 opacity-50"
              style={{ fontFamily: "Orbitron, sans-serif", color: "var(--text2)" }}
            >
              {'>'} TECH_STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sci btn-sci-filled inline-flex"
            style={{ textDecoration: "none" }}
          >
            ↗ &nbsp;Visit Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const ref = useScrollFade();

  return (
    <section id="project" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="section-title mb-12">Projects</h2>

          <div className="glow-divider mb-12" />

          <div className="space-y-10">
            {projects.map((proj, idx) => (
              <TerminalWindow key={idx} project={proj} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
