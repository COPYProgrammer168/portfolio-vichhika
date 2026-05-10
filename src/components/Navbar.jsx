import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Project", "Contact"];

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    // Small delay to ensure sections are mounted in DOM first
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { threshold: 0.5 },
      );
      ["home", "about", "skills", "project", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) obs.observe(el);
      });

      return () => obs.disconnect();
    }, 500); // wait 500ms for DOM to be ready

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "hsla(var(--bg-h), var(--bg-s), var(--bg-l), 0.7)",
        borderBottom:
          "1px solid hsla(var(--text-h), var(--text-s), var(--text-l), 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0 4px 32px var(--glow)"
          : "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="font-black text-lg tracking-widest cursor-pointer"
          style={{
            color: "var(--accent)",
            textShadow: "0 0 16px var(--glow)",
            fontFamily: "Megatrox, sans-serif",
            fontSize: "2rem",
          }}
          onClick={() => scrollTo("home")}
        >
          KV
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.toLowerCase();
            return (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  style={{
                    fontFamily: "transonite, sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "none",
                    border: "none",
                    borderBottom: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid transparent",
                    cursor: "pointer",
                    padding: "4px 0",
                    // ✅ Active = cyan glow, Inactive = dim
                    color: isActive ? "var(--accent)" : "var(--text)",
                    opacity: isActive ? 1 : 0.6,
                    textShadow: isActive ? "0 0 12px var(--glow)" : "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.opacity = 1;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive
                      ? "var(--accent)"
                      : "var(--text)";
                    e.currentTarget.style.opacity = isActive ? 1 : 0.6;
                  }}
                >
                  {l}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1"
            style={{
              background: dark ? "var(--accent)" : "var(--border)",
              boxShadow: dark ? "0 0 12px var(--glow)" : "none",
            }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300"
              style={{
                background: "var(--bg)",
                transform: dark ? "translateX(28px)" : "translateX(0px)",
              }}
            >
              {dark ? "🌙" : "☀️"}
            </div>
          </button>

          {/* Mobile Menu Btn */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all"
                style={{ background: "var(--accent)" }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            backdropFilter: "blur(20px)",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-center px-6 py-3 text-xs tracking-widest uppercase"
              style={{
                color:
                  activeSection === l.toLowerCase()
                    ? "var(--accent)"
                    : "var(--text)",
                fontFamily: "Orbitron, sans-serif",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
