import heroImg from '../assets/randazzo-designs-logo-optimized.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Randazzo Designs</p>

          <h1>
            Design. Technology.
            <br />
            Imagination.
          </h1>

          <p className="hero-description">
            Design better systems for people. Human-centered design and
            technology that improves digital experiences, information,
            workflows, and the way people use AI.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start with the problem
            </a>

            <a className="button button-secondary" href="#services">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src={heroImg}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Hero