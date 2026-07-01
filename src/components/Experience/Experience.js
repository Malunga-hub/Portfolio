import React, { useState } from "react";
import { experiences } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const exp = experiences[activeIndex];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__header">
          <p className="section-label">Where I've worked</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience__layout">

          {/* ── Company tabs ─────────────────────────────── */}
          {/* Tab labels come from portfolioData.js → experiences[].company */}
          <div className="experience__tabs" role="tablist">
            {experiences.map((e, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeIndex === i}
                className={`experience__tab${
                  activeIndex === i ? " experience__tab--active" : ""
                }`}
                onClick={() => setActiveIndex(i)}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* ── Detail panel ─────────────────────────────── */}
          {/* All content comes from portfolioData.js → experiences[] */}
          <div className="experience__panel" role="tabpanel">
            <h3 className="experience__role">
              {exp.role}{" "}
              <span className="experience__company">@ {exp.company}</span>
            </h3>

            <div className="experience__meta">
              <span className="experience__meta-item">📅 {exp.period}</span>
              <span className="experience__meta-item">📍 {exp.location}</span>
            </div>

            <ul className="experience__bullets">
              {exp.description.map((point, i) => (
                <li key={i} className="experience__bullet">
                  {point}
                </li>
              ))}
            </ul>

            <div className="experience__tech-row">
              {exp.tech.map((t) => (
                <span key={t} className="experience__tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
