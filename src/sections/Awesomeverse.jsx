import awesomeverseHero from '../assets/awesomeverse-hero.webp'

function Awesomeverse() {
  return (
    <section className="awesomeverse" id="awesomeverse">
      <div className="awesomeverse-inner">
        <div className="awesomeverse-heading">
          <p className="awesomeverse-eyebrow">
            Original Worlds · Stories · Visual Storytelling
          </p>

          <h2>The Awesomeverse</h2>

          <p className="awesomeverse-intro">
            An original science-fiction universe developed through visual
            storytelling, characters, environments, and short-form episodes.
          </p>
        </div>

        <div className="awesomeverse-feature">
          <div className="awesomeverse-artwork">
            <img
              src={awesomeverseHero}
              alt="Science-fiction scene from The Awesomeverse"
            />

            <div
              className="awesomeverse-artwork-shade"
              aria-hidden="true"
            />
          </div>

          <div className="awesomeverse-story">
            <p className="awesomeverse-label">
              Original IP · Worldbuilding · Creative Exploration
            </p>

            <h3>
              A growing universe
              <br />
              built through stories.
            </h3>

            <p>
              The Awesomeverse is an original creative project from Randazzo
              Designs, bringing together cinematic imagery, science-fiction
              storytelling, characters, environments, and connected stories
              within a growing fictional universe.
            </p>

            <div className="awesomeverse-actions">
              <a
                className="awesomeverse-primary-link"
                href="https://www.youtube.com/@thaawesomeverse"
                target="_blank"
                rel="noreferrer"
              >
                Watch the Awesomeverse
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="awesomeverse-footer">
          <span>ORIGINAL IP</span>
          <span>SCIENCE FICTION</span>
          <span>VISUAL STORYTELLING</span>
          <span>SHORT-FORM EPISODES</span>
        </div>
      </div>
    </section>
  )
}

export default Awesomeverse