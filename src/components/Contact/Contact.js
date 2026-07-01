import React, { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import "./Contact.css";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/xgojlnqv", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__inner">
          <p className="section-label">Let's talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have a project in mind, a question, or just want to say
            hello — my inbox is always open.
          </p>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="Project inquiry"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="contact__divider">or reach me directly</div>

          <div className="contact__links">
            <a href={`mailto:${personalInfo.email}`} className="contact__link">
              <MailIcon /> {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
