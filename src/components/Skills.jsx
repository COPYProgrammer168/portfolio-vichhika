import { useScrollFade } from "../hooks/useScrollFade";
import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "PHP Laravel", level: 70, desc: "MVC, routing, database, auth", icon: "🐘", cat: "Backend" },
  { name: "React + Vite", level: 60, desc: "Frontend design, OAuth, hooks", icon: "⚛️", cat: "Frontend" },
  { name: "PostgreSQL", level: 65, desc: "Database design & queries", icon: "🐘", cat: "Database" },
  { name: "UX/UI (Figma)", level: 75, desc: "Prototype & website design", icon: "🎨", cat: "Design" },
  { name: "PS / AE", level: 70, desc: "Editing, posters, motion effects", icon: "🖌️", cat: "Design" },
  { name: "Word / PPT", level: 85, desc: "Documentation & slide design", icon: "📝", cat: "Tools" },
  { name: "AI Prompt Engineering", level: 60, desc: "AI integration in projects", icon: "🤖", cat: "Emerging" },
];

export default function Skills() {
  const ref = useScrollFade();

  // ✅ MOVED inside the component
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null); // ✅ fixed name: skillRefs → skillsRef

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in">
          <h2 className="section-title mb-12">Skills</h2>

          <div ref={skillsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map(({ name, level, desc, icon, cat }, index) => (
              <div key={name} className="sci-card p-5 group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="skill-tag">{cat}</span>
                </div>

                <h3 className="font-orbitron font-bold text-sm mb-1"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "var(--text)" }}>
                  {name}
                </h3>
                <p className="text-xs mb-4 opacity-60"
                  style={{ color: "var(--text2)", fontFamily: "Exo 2, sans-serif" }}>
                  {desc}
                </p>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span style={{ fontFamily: "Orbitron,sans-serif", color: "var(--text2)", fontSize: "0.6rem", opacity: 0.5 }}>
                      PROFICIENCY
                    </span>
                    <span style={{ fontFamily: "Orbitron,sans-serif", color: "var(--accent)", fontSize: "0.6rem" }}>
                      {level}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div style={{
                      height: "100%",
                      // ✅ use index directly — no more .indexOf() bug
                      width: animated ? `${level}%` : "0%",
                      background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--glow)",
                      transition: `width 1s ease ${index * 0.15}s`,
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}