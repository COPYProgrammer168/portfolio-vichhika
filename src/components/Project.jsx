import { useScrollFade } from "../hooks/useScrollFade";
import myWeb from "../assets/imageweb.jpg";

export default function Project() {
  const ref = useScrollFade();

  const features = [
    "Role-based Authentication",
    "Google OAuth Integration",
    "Order Management System",
    "Khmer / English Localization",
    "Admin Dashboard",
    "AI Engineer Integration",
    "PostgreSQL Database",
    "Render Cloud Deployment",
  ];

  const stack = [
    "Laravel",
    "React",
    "Vite",
    "PostgreSQL",
    "Google OAuth",
    "Render",
    "AI Prompt",
  ];

  return (
    <section id="project" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="section-title mb-12">Project</h2>

          <div className="sci-card overflow-hidden">
            {/* Top bar */}
            <div
              className="flex items-center gap-2 px-5 py-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#ef4444" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#f59e0b" }}
              />
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#22c55e" }}
              />
              <span
                className="font-orbitron text-xs ml-4 opacity-50"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  color: "var(--text2)",
                }}
              >
                &gt; project_showcase.exe
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Preview */}
              <div
                className="relative overflow-hidden min-h-96"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%)",
                  borderRight: "1px solid var(--border)",
                }}
              >
                <div className="absolute inset-4 sci-card overflow-hidden flex flex-col">
                  {/* Browser bar */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2 shrink-0"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: "var(--bg2)",
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "#ef4444" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "#f59e0b" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "#22c55e" }}
                    />
                    <div
                      className="flex-1 rounded px-2 py-0.5 text-xs opacity-50 truncate ml-2"
                      style={{
                        background: "var(--bg)",
                        color: "var(--text2)",
                        fontFamily: "Exo 2, sans-serif",
                      }}
                    >
                      tronmatix-frontend.onrender.com
                    </div>
                    <a
                      href="https://tronmatix-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                        textDecoration: "none",
                      }}
                    >
                      ↗
                    </a>
                  </div>

                  {/* iframe */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "380px" }}
                  >
                    <img
                      src={myWeb}
                      alt="Tronmatix Computer"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Hover overlay */}
                    <a
                      href="https://tronmatix-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        textDecoration: "none",
                      }}
                    >
                      <span className="btn-sci" style={{ fontSize: "0.65rem" }}>
                        ↗ Open Site
                      </span>
                    </a>
                  </div>
                </div>

                {/* Live badge */}
                <div className="absolute top-6 right-6 sci-card px-3 py-2 text-center">
                  <div
                    className="font-orbitron font-bold text-xs"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "#22c55e",
                    }}
                  >
                    LIVE
                  </div>
                  <div
                    className="w-2 h-2 rounded-full mx-auto mt-1 animate-pulse"
                    style={{ background: "#22c55e" }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 space-y-6">
                <div>
                  <span
                    className="font-orbitron text-xs tracking-widest block mb-2"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "var(--accent)",
                    }}
                  >
                    FINAL YEAR THESIS · 2026.03 - PRESENT
                  </span>
                  <h3
                    className="font-orbitron font-black text-2xl mb-2"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "var(--text)",
                    }}
                  >
                    Tronmatix Computer
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--text2)",
                      fontFamily: "Exo 2, sans-serif",
                    }}
                  >
                    A full-stack computer hardware e-commerce platform.
                    Independently developed and deployed, featuring
                    enterprise-grade functionality including multi-role
                    authentication, bilingual support, and a complete admin
                    ecosystem.
                  </p>
                </div>

                {/* Features */}
                <div>
                  <p
                    className="font-orbitron text-xs tracking-wider mb-3 opacity-50"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "var(--text2)",
                    }}
                  >
                    &gt; FEATURES
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-xs"
                        style={{
                          color: "var(--text2)",
                          fontFamily: "Exo 2, sans-serif",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div>
                  <p
                    className="font-orbitron text-xs tracking-wider mb-3 opacity-50"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "var(--text2)",
                    }}
                  >
                    &gt; TECH_STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://tronmatix-frontend.onrender.com/"
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
        </div>
      </div>
    </section>
  );
}
