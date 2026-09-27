function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="/"
          target="_blank"
          rel="noreferrer"
          aria-label="Randazzo Designs home"
        >
          Randazzo Designs
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#selected-work" target="_blank" rel="noreferrer">
            Work
          </a>
          <a href="/#services" target="_blank" rel="noreferrer">
            Services
          </a>
          <a href="/#process" target="_blank" rel="noreferrer">
            Process
          </a>
          <a href="/#learn" target="_blank" rel="noreferrer">
            Learn
          </a>
          <a href="/#about" target="_blank" rel="noreferrer">
            About
          </a>
        </nav>

        <a
          className="header-cta"
          href="https://cal.com/randazzo-designs/conversation"
          target="_blank"
          rel="noreferrer"
        >
          Book a Conversation
        </a>
      </div>
    </header>
  )
}

export default Header