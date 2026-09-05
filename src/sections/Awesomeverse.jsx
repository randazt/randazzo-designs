import awesomeverseHero from '../assets/awesomeverse-hero.webp'

function Awesomeverse() {
  return (
    <section className="awesomeverse" id="awesomeverse">
      <div className="awesomeverse-inner">
        <div className="awesomeverse-heading">
          <p className="awesomeverse-eyebrow">
            Original Worlds · Stories · Creative IP
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
              Something is wrong with the system.
            </p>

            <h3>
              Worldbuilding through
              <br />
              visual storytelling.
            </h3>

            <p>
              The Awesomeverse is the original entertainment and creative-IP
              side of Randazzo Designs—a growing universe expressed through
              cinematic imagery, short-form science-fiction, characters, and
              connected stories.
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