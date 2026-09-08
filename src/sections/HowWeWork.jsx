const stages = [
  {
    title: 'Human Direction',
    description:
      'Define the problem, intent, constraints, and desired outcome. Human judgment establishes what the work is trying to accomplish and what matters most.',
  },
  {
    title: 'AI Collaboration',
    description:
      'Use AI to help research, reason, organize, explore, draft, and troubleshoot while keeping consequential decisions under human direction.',
  },
  {
    title: 'Implementation',
    description:
      'Move approved thinking into the appropriate working environment, where ideas become tangible designs, interfaces, systems, content, or code.',
  },
  {
    title: 'External Systems',
    description:
      'Connect the work to the platforms, services, production environments, and other systems required to test how it performs beyond the workspace.',
  },
  {
    title: 'Evidence',
    description:
      'Bring real results back into the process through testing, screenshots, output, behavior, feedback, and other observable evidence.',
  },
  {
    title: 'Review & Refine',
    description:
      'Interpret what actually happened, identify what needs to change, and choose the smallest useful correction before returning to implementation.',
  },
  {
    title: 'Verified Outcome',
    description:
      'Confirm that the result works as intended before treating it as complete. New evidence can reopen the loop whenever further refinement is needed.',
  },
]

function HowWeWork() {
  return (
    <section className="how-we-work" id="process">
      <div className="how-we-work-inner">
        <header className="how-we-work-heading">
          <p className="section-eyebrow">The Randazzo Method™</p>

          <h2>
            A human-directed feedback loop
            <br />
            from problem to capability.
          </h2>

          <p className="how-we-work-intro">
            Human direction starts the process and evidence brings it back.
            AI, design, technology, and production tools assist throughout the
            loop while people retain judgment, agency, and final authority.
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
              Leave more capable —
              <br />
              not more dependent.
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