import heroImg from '../assets/hero.png'

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
            Human-centered technology, creative tools, educational
            experiences, and original worlds.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore Our Work
            </a>

            <a className="button button-secondary" href="#daisy">
              Discover D.AI.SY
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src={heroImg}
            alt="Randazzo Designs cube logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero