function SiteFooter() {
  return (
    <>
      <section className="final-cta" id="contact">
        <div className="final-cta-inner">
          <p className="section-eyebrow">START A CONVERSATION</p>

          <div className="final-cta-grid">
            <div>
              <h2>
                Have an idea worth
                <br />
                building?
              </h2>
            </div>

            <div className="final-cta-content">
              <p>
                Whether you’re exploring a creative project, digital
                experience, AI system, educational idea, or something that
                doesn’t fit neatly into a category, the best place to start is
                a conversation.
              </p>

              <a
                className="final-cta-button"
                href="https://cal.com/randazzo-designs/conversation"
                target="_blank"
                rel="noreferrer"
              >
                Book a Conversation
                <span aria-hidden="true">→</span>
              </a>
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
              Design, technology, education,
              <br />
              and original creative worlds.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <p>Explore</p>
            <a href="#work">Work</a>
            <a href="#technology">Technology</a>
            <a href="#awesomeverse">Awesomeverse</a>
            <a href="#learn">Learn</a>
            <a href="#about">About</a>
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
              Cinema Building Agent ↗
            </a>
          </div>

          <div className="footer-location">
            <p>Based on Florida’s Suncoast.</p>
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
          <p>Designed and built with human direction.</p>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter