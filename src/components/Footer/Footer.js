import React from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">

        <p className="footer__copy">
          Designed &amp; Built by{" "}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__name"
          >
            {personalInfo.name}
          </a>
        </p>
        <p className="footer__year">© {year}</p>
      </div>
    </footer>
  );
}
