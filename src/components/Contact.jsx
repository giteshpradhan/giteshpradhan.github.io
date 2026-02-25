import './Contact.css';

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>

          <div className="contact-grid fade-in-up">
            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <a href="mailto:giteshpradhan554@gmail.com">giteshpradhan554@gmail.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>+91 9579458731</p>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-info">
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <a href="#home" className="footer-logo">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,85 10,85" stroke="#1ABC9C" strokeWidth="6" strokeLinejoin="round" />
            </svg>
            Portfolio
          </a>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="footer-copy">© 2025 Gitesh Pradhan. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
