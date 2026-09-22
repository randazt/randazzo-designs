function SiteFooter() {
  return (
    <>
      <section className="final-cta" id="contact">
        <div className="final-cta-inner">
          <p className="section-eyebrow">START A CONVERSATION</p>

          <div className="final-cta-grid">
            <div>
              <h2>
                Have something that
                <br />
                needs to work better?
              </h2>
            </div>

            <div className="final-cta-content">
              <p>
                You don&apos;t need to have the solution figured out before
                reaching out. Whether it&apos;s a website, workflow,
                communication challenge, AI question, learning need, or new
                idea, start with what you&apos;re trying to improve.
              </p>

              <div className="final-cta-actions">
                <a
                  className="final-cta-button"
                  href="https://cal.com/randazzo-designs/conversation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Conversation
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  className="final-cta-inquiry"
                  href="mailto:randazzodesignsai@gmail.com"
                >
                  Send an Inquiry
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" aria-label="Randazzo Designs home">
              Randazzo Designs
            </a>

            <p>
              Design, digital experiences, practical AI,
              <br />
              learning, and original creative work.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <p>Explore</p>
            <a href="/#selected-work">Work</a>
            <a href="/#technology">Technology</a>
            <a href="/#awesomeverse">Awesomeverse</a>
            <a href="/#learn">Learn</a>
            <a href="/#about">About</a>
          </nav>

          <div className="footer-projects">
            <p>Projects</p>

            <a
              href="https://daisy.randazzodesignsai.com"
              target="_blank"
              rel="noreferrer"
            >
              D.AI.SY ↗
            </a>

            <a
              href="https://studio.randazzodesignsai.com"
              target="_blank"
              rel="noreferrer"
            >
              STUDIO//ONE ↗
            </a>
          </div>

          <div className="footer-location">
            <p>Based on Florida&apos;s Suncoast.</p>
            <p>Working wherever ideas travel.</p>

            <a
              className="footer-linkedin"
              href="https://www.linkedin.com/in/thaddeus-randazzo-48a66b6a/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Randazzo Designs.</p>

          <nav className="footer-legal" aria-label="Legal">
            <a href="/privacy" target="_blank" rel="noreferrer">
              Privacy
            </a>
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms
            </a>
          </nav>

          <p>Designed and built with human direction.</p>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter