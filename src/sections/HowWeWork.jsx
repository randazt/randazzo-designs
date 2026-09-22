const stages = [
  {
    title: 'Human Direction',
    description:
      'Start by understanding the problem, what needs to improve, and what a useful outcome should look like. People set the direction and priorities.',
  },
  {
    title: 'AI Collaboration',
    description:
      'Use AI where it can genuinely help with research, organization, exploration, drafting, or problem-solving while keeping important decisions in human hands.',
  },
  {
    title: 'Implementation',
    description:
      'Turn approved ideas into something people can actually use, whether that means a website, interface, workflow, resource, system, or other working solution.',
  },
  {
    title: 'External Systems',
    description:
      'Connect the work to the platforms, services, and tools it needs so the solution can be tested in the environment where it will actually be used.',
  },
  {
    title: 'Evidence',
    description:
      'Look at what actually happens through testing, feedback, behavior, and real results instead of relying only on assumptions.',
  },
  {
    title: 'Review & Refine',
    description:
      'Use what we learn to identify what needs to change, make useful improvements, and test again when needed.',
  },
  {
    title: 'Verified Outcome',
    description:
      'Confirm that the solution works as intended before treating the work as complete. If new evidence reveals a problem, the process can continue.',
  },
]

function HowWeWork() {
  return (
    <section className="how-we-work" id="process">
      <div className="how-we-work-inner">
        <header className="how-we-work-heading">
          <p className="section-eyebrow">The Randazzo Method™</p>

          <h2>
            Start with people.
            <br />
            Build toward what works.
          </h2>

          <p className="how-we-work-intro">
            Every project begins by understanding the problem and ends by
            checking the result against real evidence. Design, technology, and
            AI can support the process, but people remain responsible for the
            direction and final decisions.
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
            Good work should do more than deliver a finished project. It should
            leave you with greater clarity, useful knowledge, and a solution
            you understand and can move forward with confidently.
          </p>
        </div>

        <div className="how-we-work-daisy-bridge">
          <p className="how-we-work-daisy-label">The Method in Practice</p>

          <h3>See how the approach works in a real system.</h3>

          <p>
            D.AI.SY — Daily AI Systems puts these principles into practice
            through an AI experience built around clear guidance, meaningful
            human control, evidence, and actions that remain explicitly
            authorized by the person using it.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork