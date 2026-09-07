import { Link } from 'react-router-dom'

function SystemInPractice() {
  return (
    <section className="system-practice" id="system-in-practice">
      <div className="system-practice-inner">
        <div className="system-practice-heading">
          <p className="section-eyebrow">See the System in Practice</p>

          <h2>
            The tools are only
            <br />
            part of the story.
          </h2>

          <p>
            Randazzo Designs develops creative technology alongside the work it
            helps make possible. The Awesomeverse provides a living example of
            a human-directed production practice spanning original IP,
            worldbuilding, visual storytelling, cross-platform publishing, and
            interactive experiences.
          </p>
        </div>

        <div className="system-practice-grid">
          <div className="system-practice-feature">
            <p className="system-practice-label">Applied Creative Practice</p>

            <h3>The Awesomeverse</h3>

            <p>
              An original connected universe developed through a repeatable
              creative production system—bringing together storyworld
              development, visual media, audience-facing experiences, and
              AI-assisted creative workflows.
            </p>

            <Link to="/work/awesomeverse">
              Explore the Awesomeverse Case Study
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          <div className="system-practice-tools">
            <p className="system-practice-label">Related Creative Technology</p>

            <h3>
              Specialized tools.
              <br />
              Human creative authority.
            </h3>

            <p>
              Systems such as STUDIO//ONE and the Uncanny Art Director
              demonstrate different approaches to supporting creative
              development and production without replacing human direction.
            </p>

            <div className="system-practice-actions">
              <Link
                to="/work/studio-one"
                target="_blank"
                rel="noreferrer"
              >
                Explore STUDIO//ONE
                <span aria-hidden="true"> →</span>
              </Link>

              <a
                href="https://chatgpt.com/g/g-6a344e9d64b88191bdfb0dddd8b7cf57-uncanny-content-director"
                target="_blank"
                rel="noreferrer"
              >
                Try the Uncanny Art Director
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="system-practice-principle">
          <span>Randazzo Designs Principle</span>
          <p>AI Assists. Humans Decide.</p>
        </div>
      </div>
    </section>
  )
}

export default SystemInPractice