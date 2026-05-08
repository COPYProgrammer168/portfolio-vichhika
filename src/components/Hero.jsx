import { useState, useEffect } from "react";
import myPhoto from "../assets/photo.jpg";

const titles = [
  "Software Developer",
  "Graphic Designer",
  "UI/UX Design",
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[titleIdx];
    let timer;
    if (!deleting && displayed.length < full.length) {
      timer = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === full.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 pb-24"
      style={{ zIndex: 1 }}
    >
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent)", top: "20%", left: "10%" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent2)", bottom: "20%", right: "10%" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sci-card">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            <span
              className="font-orbitron text-xs tracking-widest opacity-70"
              style={{
                fontFamily: "Orbitron, sans-serif",
                color: "var(--text2)",
              }}
            >
              AVAILABLE FOR INTERNSHIP
            </span>
          </div>

          {/* Name */}
          <div>
            <p
              className="font-orbitron text-xs tracking-[0.3em] uppercase mb-2"
              style={{
                fontFamily: "Orbitron, sans-serif",
                color: "var(--text2)",
              }}
            >
              &gt;Hello, My Name is
            </p>
            <h1
              className="font-orbitron font-black leading-none glow-text"
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                color: "var(--accent)",
              }}
            >
              KRY
              <br />
              VICHHIKA
            </h1>
          </div>

          {/* Typing title */}
          <div
            className="font-orbitron text-lg md:text-xl tracking-wide"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "var(--text)",
              minHeight: "2rem",
            }}
          >
            <span style={{ color: "var(--text2)" }}>&gt; </span>
            <span>{displayed}</span>
            <span className="animate-pulse" style={{ color: "var(--accent)" }}>
              _
            </span>
          </div>

          {/* Info line */}
          <p
            className="text-sm tracking-wide"
            style={{ color: "var(--text2)", fontFamily: "Exo 2, sans-serif" }}
          >
            📍 Cambodia · Norton University · IT / Software Development
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/Kry VIchhika - Cover Me.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sci btn-sci-filled"
            >
              <span>⬇</span> View My CV
            </a>
            <button
              className="btn-sci"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>✉</span> Contact Me
            </button>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="mailto:vichhika.kry@gmail.com"
              className="text-xs tracking-widest transition-all hover:opacity-100 opacity-60 font-bold"
              style={{ color: 'var(--accent)', fontFamily: 'Orbitron, sans-serif', textDecoration: 'none' }}>
              vichhika.kry@gmail.com
            </a>
            <span style={{ opacity: 0.3, color: 'var(--text)' }}>|</span>
            <a href="tel:012949139"
              className="text-xs tracking-widest transition-all hover:opacity-100 opacity-60 font-bold"
              style={{ color: 'var(--accent)', fontFamily: 'Orbitron, sans-serif', textDecoration: 'none' }}>
              012-949-139
            </a>
            <span style={{ opacity: 0.3, color: 'var(--text)' }}>|</span>
            <a href="https://github.com/COPYProgrammer168/Tronmatix_WebTest"
              target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest transition-all hover:opacity-100 opacity-60 font-bold"
              style={{ color: 'var(--accent)', fontFamily: 'Orbitron, sans-serif', textDecoration: 'none' }}>
              GITHUB
            </a>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="flex flex-col items-center gap-8">
          {/* Avatar frame */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: "var(--accent)", transform: "scale(1.2)" }}
            />
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border"
              style={{ border: "2px solid var(--accent)" }}
            >
              <img
                src={myPhoto}
                alt="Kry Vichhika"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Orbit ring */}
            <div
              className="absolute inset-0 rounded-full border animate-spin"
              style={{
                borderColor:
                  "transparent var(--accent) transparent transparent",
                animationDuration: "8s",
                transform: "scale(1.15)",
              }}
            />
          </div>

          {/* Project preview card */}
          <a
            href="https://tronmatix-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sci-card w-full max-w-xs p-4 group"
            style={{ textDecoration: "none" }}
          >
            <div className="flex items-center gap-3 mb-3">
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
                className="font-orbitron text-xs ml-2 opacity-50 truncate"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  color: "var(--text2)",
                }}
              >
                tronmatix-frontend.onrender.com
              </span>
            </div>
            <div
              className="w-full h-24 rounded flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--bg2), var(--bg))",
                border: "1px solid var(--border)",
              }}
            >
              <div className="text-center">
                <div
                  className="font-orbitron font-bold text-sm"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  TRONMATIX
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text2)" }}>
                  Computer E-Commerce Platform
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-1 flex-wrap">
                {["Laravel", "React", "PostgreSQL"].map((t) => (
                  <span
                    key={t}
                    className="skill-tag"
                    style={{ fontSize: "0.55rem" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>
                ↗
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-xs tracking-widest opacity-40"
            style={{ fontFamily: "Orbitron, sans-serif", color: "var(--text)" }}
          >
            SCROLL DOWN TO SEE MORE
          </span>
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
