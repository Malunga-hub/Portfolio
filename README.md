# Portfolio

A professional software developer portfolio built with **React.js**.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/       # Fixed nav with active-section highlighting
│   │   ├── Hero/         # Landing with typewriter effect
│   │   ├── About/        # Bio, stats, avatar
│   │   ├── Skills/       # Tech categories as pill tags
│   │   ├── Experience/   # Tabbed job history
│   │   ├── Projects/     # Featured cards + mini grid
│   │   ├── Contact/      # Contact form + direct links
│   │   └── Footer/
│   ├── data/
│   │   └── portfolioData.js 
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
└── package.json
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## ✏️ Customising Your Portfolio

**All personal content lives in one file:**

```
src/data/portfolioData.js
```

Edit these exported objects:

| Export | What to change |
|---|---|
| `personalInfo` | Name, title, tagline, email, social links |
| `aboutText` | Paragraphs in the About section |
| `skillCategories` | Your tech skills by category |
| `experiences` | Work history (role, bullets, tech stack) |
| `projects` | Projects with descriptions, links |
| `education` | Degree and institution |

## 📬 Wiring Up the Contact Form

The form currently simulates a submission. To make it live, pick one:

- **[Formspree](https://formspree.io)** (free) — replace the simulated `await` in `Contact.js` with:
  ```js
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  setStatus(res.ok ? "success" : "error");
  ```

- **[EmailJS](https://emailjs.com)** — `npm install @emailjs/browser` and follow their React guide.

## 🖼️ Adding a Real Avatar

Replace the initials block in `About.js` with:

```jsx
<img src="/avatar.jpg" alt="Your Name" className="about__avatar-img" />
```

And drop your photo into `public/avatar.jpg`.

## 🎨 Changing the Accent Colour

Edit `--accent` in `src/styles/global.css`:

```css
--accent: #6366f1;       /* indigo — change to any hex */
--accent-light: #818cf8;
--accent-dark:  #4f46e5;
```

## 📄 Resume

Drop your PDF into `public/resume.pdf` — the **Resume** button in the navbar will link directly to it.
