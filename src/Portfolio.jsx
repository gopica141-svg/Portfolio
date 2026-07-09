import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const SKILLS = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  "Backend & DB": ["Node.js", "Express.js", "MongoDB", "SQL (basic)"],
  Languages: ["Core Java"],
  Tools: ["GitHub", "Postman"],
  Concepts: ["Functional Components", "Props", "State Management", "Hooks"],
};

const EXPERIENCE = [
  {
    role: "Full Stack Development Intern",
    company: "Global Quest Technologies",
    duration: "Jan 29 – Apr 30, 2026",
    points: [
      "Worked on frontend and backend development using React.js, JavaScript, and Node.js.",
      "Improved application performance, fixed bugs, and collaborated with the team to build scalable web applications.",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Zoho Corporation",
    duration: "Jun 2024 – Aug 1, 2025",
    points: [
      "Worked on Java application development with hands-on OOP and debugging.",
      "Assisted in designing, coding, and testing modules to improve application performance.",
    ],
  },
  {
    role: "Web Development Training",
    company: "ARFFY Technologies",
    duration: "Feb 17 – Feb 27, 2025",
    points: [
      "Built mini projects using HTML, CSS, JavaScript, MongoDB and React.js.",
      "Practiced responsive web design, frontend development, and reusable component creation.",
    ],
  },
];

const PROJECTS = [
  {
    title: "DeepGuard — Deepfake Detection",
    year: "2026",
    tag: "Final Year Project",
    desc: "A hybrid deep learning model achieving 92.5% accuracy in classifying AI-manipulated video media.",
    tech: ["EfficientNet-B4", "BiLSTM", "Transformer Encoders", "Python"],
    highlight: true,
  },
  {
    title: "ConnectSphere",
    year: "2025",
    tag: "Social Media App",
    desc: "Full-featured social media web app with user authentication, post sharing, and real-time interaction.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    highlight: false,
  },
  {
    title: "SweetCrate",
    year: "2025",
    tag: "E-Commerce",
    desc: "Online sweet ordering platform with product listings, cart management, and a clean checkout flow.",
    tech: ["HTML", "CSS", "Bootstrap", "JS", "React", "Node.js", "MongoDB"],
    highlight: false,
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((id) => document.getElementById(id));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0b0f1a", color: "#e2e8f0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .nav-link-custom {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .nav-link-custom:hover, .nav-link-custom.active {
          color: #7c3aed;
          border-bottom-color: #7c3aed;
        }

        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #e2e8f0 0%, #7c3aed 60%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7c3aed;
          margin-bottom: 8px;
        }
        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: -0.02em;
        }

        .glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, transform 0.2s;
        }
        .glass-card:hover {
          border-color: rgba(124,58,237,0.4);
          transform: translateY(-3px);
        }

        .skill-pill {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.78rem;
          font-weight: 500;
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.3);
          color: #c4b5fd;
          margin: 4px;
          transition: background 0.2s;
        }
        .skill-pill:hover { background: rgba(124,58,237,0.3); }

        .tech-badge {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 0.72rem;
          font-weight: 500;
          background: rgba(6,182,212,0.1);
          border: 1px solid rgba(6,182,212,0.25);
          color: #67e8f9;
          margin: 3px;
        }

        .timeline-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #7c3aed;
          border: 2px solid #0b0f1a;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.3);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .timeline-line {
          width: 2px;
          background: linear-gradient(to bottom, #7c3aed, transparent);
          flex-grow: 1;
          margin: 6px auto 0;
        }

        .highlight-card {
          background: linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.08) 100%);
          border-color: rgba(124,58,237,0.3) !important;
        }

        .contact-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-link:hover { color: #7c3aed; }

        .cta-btn {
          padding: 12px 32px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        .cta-primary {
          background: #7c3aed;
          color: #fff;
        }
        .cta-primary:hover { background: #6d28d9; transform: translateY(-2px); }
        .cta-outline {
          background: transparent;
          color: #c4b5fd;
          border: 1px solid rgba(124,58,237,0.5);
        }
        .cta-outline:hover { background: rgba(124,58,237,0.15); transform: translateY(-2px); }

        .edu-row {
          border-left: 2px solid rgba(124,58,237,0.3);
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .desktop-nav { display: flex !important; }
        }

        section { scroll-margin-top: 70px; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(11,15,26,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 24px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "1.1rem", color: "#7c3aed" }}>
          GA<span style={{ color: "#06b6d4" }}>.</span>
        </span>
        <div className="desktop-nav" style={{ gap: "28px" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link-custom ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
        <button className="mobile-menu" style={{ background: "none", border: "none", color: "#e2e8f0", fontSize: "1.4rem", cursor: "pointer" }}
          onClick={() => setMenuOpen(o => !o)}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 99, background: "#0f1422", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className={`nav-link-custom ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l)} style={{ fontSize: "1rem" }}>{l}</span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="About" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", width: "100%" }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Hello, world —</p>
          <h1 className="hero-name">Gopica A</h1>
          <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#94a3b8", fontWeight: 400, marginTop: 20, maxWidth: 600, lineHeight: 1.5 }}>
            Full Stack Developer · MERN Stack · Fresh Graduate from Anna University
          </p>
          <p style={{ color: "#64748b", marginTop: 16, maxWidth: 560, lineHeight: 1.7, fontSize: "0.95rem" }}>
            Detail-oriented developer with hands-on internship experience across React, Node.js, and Java. Passionate about building scalable web applications and collaborating in agile teams.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <button className="cta-btn cta-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
            <button className="cta-btn cta-outline" onClick={() => scrollTo("Contact")}>Get in Touch</button>
            <a href="/RESUME.pdf" download="RESUME.pdf" style={{ textDecoration: "none" }}>
    <button className="cta-btn cta-outline">Download Resume</button>
  </a>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap" }}>
            {[["CGPA", "8.4"], ["Internship", "3+"], ["Stack", "MERN"]].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Space Grotesk'", fontSize: "2rem", fontWeight: 700, color: "#c4b5fd" }}>{val}</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="section-label">What I work with</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Skills & Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="glass-card" style={{ padding: 24 }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#06b6d4", marginBottom: 14 }}>{cat}</p>
                <div>{items.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < EXPERIENCE.length - 1 ? 0 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24 }}>
                  <div className="timeline-dot" />
                  {i < EXPERIENCE.length - 1 && <div className="timeline-line" style={{ minHeight: 60 }} />}
                </div>
                <div className="glass-card" style={{ padding: "20px 24px", flex: 1, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: "1.05rem", color: "#f1f5f9" }}>{exp.role}</h3>
                      <p style={{ color: "#7c3aed", fontSize: "0.88rem", fontWeight: 500 }}>{exp.company}</p>
                    </div>
                    <span style={{ fontSize: "0.78rem", color: "#64748b", whiteSpace: "nowrap" }}>{exp.duration}</span>
                  </div>
                  <ul style={{ paddingLeft: 18, marginTop: 8 }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.65, marginBottom: 4 }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="section-label">Things I've built</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className={`glass-card ${p.highlight ? "highlight-card" : ""}`} style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: p.highlight ? "#c4b5fd" : "#06b6d4" }}>{p.tag}</span>
                  <span style={{ fontSize: "0.78rem", color: "#475569" }}>{p.year}</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: "1.05rem", color: "#f1f5f9", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "#94a3b8", lineHeight: 1.65, flexGrow: 1 }}>{p.desc}</p>
                <div>{p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="Education" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="section-label">Academic background</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Education</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { deg: "B.Tech (Information Technology)", inst: "J.P. College of Engineering, Tenkasi\n(Anna University)", score: "CGPA: 8.4", yr: "2022 – 2026" },
              { deg: "HSC", inst: "Subbiah Vidyalayam Girls Higher Secondary School", score: "75%", yr: "2021 – 2022" },
              { deg: "SSLC", inst: "Subbiah Vidyalayam Girls Higher Secondary School", score: "78.8%", yr: "2019 – 2020" },
            ].map((e, i) => (
              <div key={i} className="glass-card" style={{ padding: 24 }}>
                <p style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: 6 }}>{e.yr}</p>
                <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 600, fontSize: "1rem", color: "#f1f5f9", marginBottom: 8 }}>{e.deg}</h3>
                <p style={{ fontSize: "0.84rem", color: "#94a3b8", marginBottom: 12, lineHeight: 1.5 }}>{e.inst}</p>
                <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd", fontSize: "0.85rem", fontWeight: 600 }}>{e.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "80px 24px 120px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p className="section-label">Let's talk</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Get in Touch</h2>
          <p style={{ color: "#64748b", marginBottom: 40, lineHeight: 1.7 }}>
            Open to full-time roles, freelance collaborations, and anything MERN-shaped. Drop me a message anytime.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: "✉", label: "Email", value: "gopica141@gmail.com", href: "mailto:gopica141@gmail.com" },
              { icon: "📞", label: "Phone", value: "+91 8220131300", href: "tel:+918220131300" },
              { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/GopicaA", href: "https://linkedin.com/in/GopicaA" },
              { icon: "📍", label: "Location", value: "Bangalore, Karnataka", href: null },
              // Ithai contact array-la add pannunga
{ 
  icon: "💻", 
  label: "GitHub", 
  value: "github.com/GopicaA", 
  href: "https://github.com/gopica141-svg" 
},
            ].map(item => (
              <div key={item.label} className="glass-card" style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "0.72rem", color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="contact-link" style={{ fontSize: "0.95rem" }}>{item.value}</a>
                    : <p style={{ fontSize: "0.95rem", color: "#94a3b8" }}>{item.value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", textAlign: "center" }}>
        <p style={{ color: "#334155", fontSize: "0.8rem" }}>© 2026 Gopica A · Built with React & Bootstrap</p>
      </footer>
    </div>
  );
}