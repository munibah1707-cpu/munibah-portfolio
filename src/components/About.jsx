function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">About Me</p>
          <h2>Learning, building, and growing through real projects.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Munibah, a frontend developer focused on building responsive
              and interactive web experiences.
            </p>

            <p>
              I'm currently studying BS Business Analytics while continuing to
              develop my frontend skills through hands-on projects. My work
              includes React applications, JavaScript projects, API
              integrations, responsive interfaces, and modern UI development.
            </p>

            <p>
              I enjoy turning ideas into functional interfaces and learning
              through the process of building real applications.
            </p>

            <a
              href="https://www.linkedin.com/in/munibah-shehzad-9b9770369/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Connect with me on LinkedIn ↗
            </a>
          </div>

          <div className="about-highlight">
            <div className="highlight-item">
              <span className="highlight-number">06</span>
              <span className="highlight-text">Projects built</span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">04+</span>
              <span className="highlight-text">React applications</span>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">∞</span>
              <span className="highlight-text">Things still to learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;