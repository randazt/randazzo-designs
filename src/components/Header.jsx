function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Randazzo Designs home">
          Randazzo Designs
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#selected-work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#learn">Learn</a>
          <a href="#about">About</a>
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