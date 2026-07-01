import React from "react";
import { skillCategories } from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to build products end-to-end.
          </p>
        </div>

        {/* ── Skill grid ─────────────────────────────────────── */}
        {/* Categories and skills come from portfolioData.js → skillCategories */}
        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div className="skills__category" key={cat.category}>
              <p className="skills__category-title">{cat.category}</p>
              <div className="skills__list">
                {cat.skills.map((skill) => (
                  <span className="skills__pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
