const problems = [
  {
    title: 'Digital Experiences',
    description:
      'Websites and digital tools become harder to use when information, navigation, and interaction no longer match what people actually need.',
  },
  {
    title: 'Information & Work Systems',
    description:
      'Fragmented information and unclear workflows create friction, make decisions harder, and leave useful knowledge scattered across tools and processes.',
  },
  {
    title: 'AI Adoption',
    description:
      'AI creates more confusion than value when organizations adopt tools before understanding where they belong, what they should improve, and where human judgment must remain.',
  },
  {
    title: 'Workforce Capability',
    description:
      'New technology only helps when people understand how to use it confidently, responsibly, and in ways that support the work they actually do.',
  },
]

function ProblemFraming() {
  return (
    <section className="problem-framing">
      <div className="problem-framing-inner">
        <header className="problem-framing-heading">
          <p className="section-eyebrow">Start With the Problem</p>

          <h2>
            Better technology starts
            <br />
            with understanding people.
          </h2>

          <p className="problem-framing-intro">
            Digital systems should make work clearer, information easier to
            understand, and technology more useful. When they do not, the
            problem is rarely solved by adding another tool.
          </p>
        </header>

        <div className="problem-framing-grid">
          {problems.map((problem) => (
            <article className="problem-framing-card" key={problem.title}>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemFraming