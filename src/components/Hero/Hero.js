import React, { useEffect, useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

// ── SVG Icons ──────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

// ── Social links (twitter is hidden if null in portfolioData) ──
const socialLinks = [
  { href: personalInfo.github, icon: <GithubIcon />, label: "GitHub" },
  { href: personalInfo.linkedin, icon: <LinkedinIcon />, label: "LinkedIn" },
  ...(personalInfo.twitter
    ? [{ href: personalInfo.twitter, icon: <TwitterIcon />, label: "Twitter" }]
    : []),
];

// ── Typing animation strings ───────────────────────────────────
const TYPING_STRINGS = [
  "Full-Stack Developer",
  "Software Developer",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
    }

    setDisplayText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <section className="hero">
      <div className="hero__content container">
        <p className="hero__greeting">Hi, my name is</p>

        {/* Your name — pulled from portfolioData.js */}
        <h1 className="hero__name">{personalInfo.name}</h1>

        {/* Animated typing title */}
        <h2 className="hero__title">
          <span className="hero__title--accent">{displayText}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </h2>

        {/* Tagline — pulled from portfolioData.js */}
        <p className="hero__tagline">{personalInfo.tagline}</p>

        <div className="hero__cta">
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </button>
          <button
            className="btn-outline"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Social icons — pulled from portfolioData.js */}
        <div className="hero__social">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
