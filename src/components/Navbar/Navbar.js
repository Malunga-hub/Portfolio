import React, { useState, useEffect } from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.to);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {personalInfo.name}
        </button>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <button
              key={link.to}
              className={`navbar__link${activeSection === link.to ? " navbar__link--active" : ""}`}
              onClick={() => scrollTo(link.to)}
            >
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer${menuOpen ? " navbar__drawer--open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.to}
            className="navbar__drawer-link"
            onClick={() => scrollTo(link.to)}
          >
            {link.label}
          </button>
        ))}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__drawer-resume"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
