function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="footer-logo">MS.</p>
          <p className="footer-text">
            Building, learning, and growing through frontend development.
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/munibah1707-cpu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/munibah-shehzad-9b9770369/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

         <a href="mailto:munibah1707@gmail.com">
           Email ↗
         </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Munibah. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;