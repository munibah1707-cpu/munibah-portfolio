import { useEffect, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            MS.
          </a>

          <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#skills" onClick={() => setMenuOpen(false)}>
    Skills
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    Projects
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</div>
<button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
          
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <a
              href="https://github.com/munibah1707-cpu"
              target="_blank"
              rel="noreferrer"
              className="nav-github"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-intro">Hello, I'm Munibah 👋</p>

            <h1>
              Frontend Developer
              <span>Building with React</span>
            </h1>

            <p className="hero-description">
              I build responsive, interactive web experiences with React,
              JavaScript, and modern frontend technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>

            <div className="hero-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
            </div>
          </div>

          <div className="hero-visual">
  <div className="avatar-placeholder">
    <img
      src="/avatar/developer-avatar.svg"
      alt="Illustrated developer avatar"
    />
  </div>

  <div className="floating-card card-one">
    <span>⚛</span>
    React
  </div>

  <div className="floating-card card-two">
    <span>⌘</span>
    Build. Learn. Grow.
  </div>
</div>
       </section>

<About />
<Skills />
<Projects />
<Contact />
<Footer />

</main>
    </>
  );
}

export default App;
