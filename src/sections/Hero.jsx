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
            Design better systems for people. We help businesses create better
            websites, simplify how work gets done, communicate more clearly,
            and use AI in practical ways.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              See How We Can Help
            </a>

            <a className="button button-secondary" href="#contact">
              Start a Conversation
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