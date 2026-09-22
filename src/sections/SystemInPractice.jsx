import { Link } from 'react-router-dom'

function SystemInPractice() {
  return (
    <section className="system-practice" id="system-in-practice">
      <div className="system-practice-inner">
        <div className="system-practice-heading">
          <p className="section-eyebrow">See the System in Practice</p>

          <h2>
            We build ideas.
            <br />
            Then put them to work.
          </h2>

          <p>
            Randazzo Designs doesn&apos;t only explore new technology in
            theory. Original projects provide a place to build, test, and learn
            from creative systems in practice while keeping people in control
            of the work.
          </p>
        </div>

        <div className="system-practice-grid">
          <div className="system-practice-feature">
            <p className="system-practice-label">Original Creative Project</p>

            <h3>The Awesomeverse</h3>

            <p>
              The Awesomeverse is an original connected storyworld from
              Randazzo Designs, developed through characters, environments,
              visual storytelling, and connected experiences. It provides a
              real creative setting for exploring how ideas, design, and
              technology can work together.
            </p>

            <Link to="/work/awesomeverse">
              See How the Awesomeverse Is Built
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          <div className="system-practice-tools">
            <p className="system-practice-label">Creative Technology in Practice</p>

            <h3>
              Tools that support
              <br />
              the person doing the work.
            </h3>

            <p>
              Projects such as STUDIO//ONE and the Uncanny Art Director explore
              different ways technology and AI can help organize, develop, and
              move creative work forward while people remain responsible for
              direction and decisions.
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