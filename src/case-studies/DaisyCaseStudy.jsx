function DaisyCaseStudy() {
  return (
    <article className="case-study case-study--daisy">
      <header className="case-study-hero">
        <div className="case-study-hero-inner">
          <p className="section-eyebrow">
            Human-Centered AI · Case Study
          </p>

          <h1>D.AI.SY — Daily AI Systems</h1>

          <p className="case-study-lede">
            Designing an agentic AI system that helps people move from
            cognitive friction toward clarity, useful workflows, and
            explicitly authorized action.
          </p>

          <p className="case-study-principle">
            AI Assists. Humans Decide.
          </p>

          <dl className="case-study-meta">
            <div>
              <dt>Role</dt>
              <dd>Founder · Product Lead · AI Systems Developer</dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>Human-Centered AI · UX/UI · Agentic Systems</dd>
            </div>

            <div>
              <dt>Platform</dt>
              <dd>Web · Google Cloud</dd>
            </div>
          </dl>

          <a
            className="case-study-primary-link"
            href="https://daisy.randazzodesignsai.com"
            target="_blank"
            rel="noreferrer"
          >
            Explore D.AI.SY
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </header>

      <section className="case-study-challenge">
        <div className="case-study-section-inner">
          <div className="case-study-section-heading">
            <p className="section-eyebrow">The Challenge</p>

            <h2>
              More AI autonomy should not mean less human agency.
            </h2>
          </div>

          <div className="case-study-challenge-content">
            <p className="case-study-challenge-lede">
              Agentic systems are often designed around a simple progression:
              the user asks, the AI decides, and the AI executes.
            </p>

            <p>
              D.AI.SY began from a different design question: how can AI help
              someone move through uncertainty and cognitive friction without
              taking decision authority away from them?
            </p>

            <p>
              That changed the role of the system. Instead of treating
              autonomous execution as the starting point, D.AI.SY was designed
              to clarify difficulty, establish human direction, adapt its
              assistance, propose a path forward, request authorization, and
              only then move into bounded action.
            </p>

            <div className="case-study-flow" aria-label="D.AI.SY interaction model">
              <span>Human expresses difficulty</span>
              <span aria-hidden="true">→</span>
              <span>AI clarifies</span>
              <span aria-hidden="true">→</span>
              <span>Human establishes direction</span>
              <span aria-hidden="true">→</span>
              <span>AI adapts + proposes</span>
              <span aria-hidden="true">→</span>
              <span>Human authorizes</span>
              <span aria-hidden="true">→</span>
              <span>AI acts</span>
              <span aria-hidden="true">→</span>
              <span>Control returns to human</span>
            </div>

            <blockquote className="case-study-statement">
              <p>Autonomy happens downstream of human authority.</p>
            </blockquote>
          </div>
        </div>
      </section>
    </article>
  )
}

export default DaisyCaseStudy