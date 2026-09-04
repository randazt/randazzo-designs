import daisyInterface from '../assets/daisy-interface.webp'

function DaisyFeature() {
  const progression = [
    {
      number: '01',
      title: 'Cognitive Friction',
    },
    {
      number: '02',
      title: 'Clarity',
    },
    {
      number: '03',
      title: 'Agency',
    },
    {
      number: '04',
      title: 'Everyday Workflows',
    },
    {
      number: '05',
      title: 'Authorized Action',
    },
  ]

  return (
    <section className="daisy-feature" id="daisy">
      <div className="daisy-feature-inner">
        <div className="daisy-feature-heading">
          <p className="daisy-eyebrow">
            D.AI.SY — Daily AI Systems
          </p>

          <h2>
            AI Assists.
            <br />
            Humans Decide.
          </h2>

          <p className="daisy-intro">
            D.AI.SY helps people move from cognitive friction toward clarity,
            agency, useful everyday workflows, and explicitly authorized
            action—supporting better productivity, cognition, accessibility,
            and human agency.
          </p>

          <a
            className="daisy-link"
            href="https://daisy.randazzodesignsai.com"
          >
            Explore D.AI.SY
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <div
          className="daisy-progression"
          aria-label="D.AI.SY human agency progression"
        >
          {progression.map((stage, index) => (
            <div className="daisy-progression-item" key={stage.title}>
              <div className="daisy-stage">
                <span className="daisy-stage-number">{stage.number}</span>
                <span className="daisy-stage-dot" aria-hidden="true" />
                <span className="daisy-stage-title">{stage.title}</span>
              </div>

              {index < progression.length - 1 && (
                <span className="daisy-stage-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          className="daisy-authority-line"
          aria-label="D.AI.SY human authorization model"
        >
          <span>AI assists</span>
          <span aria-hidden="true">→</span>
          <span>Human understands</span>
          <span aria-hidden="true">→</span>
          <span>Human decides</span>
          <span aria-hidden="true">→</span>
          <span>AI acts when authorized</span>
        </div>

        <div className="daisy-product-visual">
          <img
            className="daisy-product-image"
            src={daisyInterface}
            alt="D.AI.SY — Daily AI Systems interface showing human-directed support and an example workspace"
          />
        </div>
      </div>
    </section>
  )
}

export default DaisyFeature