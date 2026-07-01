import React from "react";
import { personalInfo, aboutText, education } from "../../data/portfolioData";
import "./About.css";

// ── Stats displayed at the bottom of the About section ────────
const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "2+", label: "Projects" },
  { value: "15+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <div className="about__grid">

          {/* ── Text side ─────────────────────────────────── */}
          <div className="about__text">
            <h2 className="section-title">About Me</h2>

            {/* About paragraphs — edit in portfolioData.js → aboutText */}
            {aboutText.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* Education list — edit in portfolioData.js → education */}
            {education.map((edu, i) => (
              <p key={i} style={{ fontSize: 14, color: "var(--text-muted)" }}>
                🎓 &nbsp;
                <strong style={{ color: "var(--text-secondary)" }}>
                  {edu.degree}
                </strong>
                {" — "}
                {edu.institution} &nbsp;·&nbsp; {edu.period}
              </p>
            ))}

            {/* Stats row */}
            <div className="about__stats">
              {stats.map((s) => (
                <div className="about__stat" key={s.label}>
                  <div className="about__stat-value">{s.value}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo / Avatar side ───────────────────────── */}
          <div className="about__avatar-wrapper">
            <div className="about__avatar-card">
              <div className="about__avatar-border" />
              <div className="about__avatar">
                {/* Your photo — stored in public/ folder */}
                <img
                  src={personalInfo.avatarImage}
                  alt={personalInfo.name}
                  className="about__avatar-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
