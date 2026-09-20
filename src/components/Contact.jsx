function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <div className="section-heading">
            <p className="section-label">Let's Connect</p>

            <h2>
              Have an opportunity or a project in mind?
            </h2>

            <p className="contact-description">
              I'm open to frontend internships and entry-level opportunities.
              Feel free to reach out and connect with me.
            </p>
          </div>

          <div className="contact-links">
            <a
            href="mailto:munibah1707@gmail.com"
            className="contact-link"
            >
            <span>Email</span>
             <strong>munibah1707@gmail.com ↗</strong>
             </a>

            <a
              href="https://www.linkedin.com/in/munibah-shehzad-9b9770369/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
              <strong>Connect with me ↗</strong>
            </a>

            <a
              href="https://github.com/munibah1707-cpu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <strong>View my work ↗</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;