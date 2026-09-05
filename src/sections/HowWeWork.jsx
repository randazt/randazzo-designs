const stages = [
  {
    title: 'Understand',
    description:
      'Identify the real problem, audience, context, constraints, and desired outcome before prescribing a solution.',
  },
  {
    title: 'Structure',
    description:
      'Organize information, workflows, priorities, and relationships into something people can understand and use.',
  },
  {
    title: 'Design',
    description:
      'Shape the experience around human needs through hierarchy, interaction, communication, and accessibility-conscious design.',
  },
  {
    title: 'Augment',
    description:
      'Apply the appropriate design and technology to extend human capability without adding unnecessary complexity.',
  },
  {
    title: 'Validate',
    description:
      'Review the result against requirements, evidence, usability, accessibility, and the intended outcome.',
  },
  {
    title: 'Enable',
    description:
      'Transfer understanding, documentation, and practical control so the client can confidently use what was created.',
  },
]

function HowWeWork() {
  return (
    <section className="how-we-work" id="process">
      <div className="how-we-work-inner">
        <header className="how-we-work-heading">
          <p className="section-eyebrow">How We Work</p>

          <h2>
            A clear process
            <br />
            from problem to capability.
          </h2>

          <p className="how-we-work-intro">
            Randazzo Designs uses a repeatable human-centered process to turn
            unclear problems into useful systems, experiences, and outcomes.
          </p>
        </header>

        <div className="how-we-work-grid">
          {stages.map((stage) => (
            <article className="how-we-work-stage" key={stage.title}>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>

        <div className="how-we-work-principle">
          <div>
            <p className="how-we-work-label">Client Outcome</p>

            <h3>
              Leave more <span className="how-we-work-keep">capable—</span>not
              more dependent.
            </h3>
          </div>

          <p>
            The goal is not simply to deliver an artifact. It is to create
            greater clarity, accessibility, productivity, and agency around the
            problem being solved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork