import daisyInterface from '../assets/daisy-interface.png'

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
          <p className="daisy-eyebrow">D.AI.SY · Human Agency Platform</p>

          <h2>
            AI assists.
            <br />
            Humans decide.
          </h2>

          <p className="daisy-intro">
            D.AI.SY helps people move from cognitive friction toward clarity,
            agency, useful workflows, and explicitly authorized action.
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

        <div className="daisy-authority-line">
          <span>AI assists</span>
          <span aria-hidden="true">→</span>
          <span>Human understands</span>
          <span aria-hidden="true">→</span>
          <span>Human decides</span>
          <span aria-hidden="true">→</span>
          <span>AI acts with authority</span>
        </div>

        <div className="daisy-product-visual">
          <img
            className="daisy-product-image"
            src={daisyInterface}
            alt="D.AI.SY product interface showing human-directed support and an example workspace"
          />
        </div>
      </div>
    </section>
  )
}

export default DaisyFeature