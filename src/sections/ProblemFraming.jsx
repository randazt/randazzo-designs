const problems = [
  {
    title: "Your website isn't doing enough",
    description:
      'People struggle when information is hard to find, navigation is confusing, or a website no longer supports what the business and its customers need.',
  },
  {
    title: 'Work feels more complicated than it should',
    description:
      'Important information gets scattered across tools, tasks get repeated, and unclear processes make everyday work slower and harder to manage.',
  },
  {
    title: "You're not sure where AI actually helps",
    description:
      'AI is easy to experiment with but harder to use well. The challenge is finding where it can solve a real problem without creating more complexity.',
  },
  {
    title: 'Your team needs more than another tool',
    description:
      'New technology only helps when people understand how to use it confidently, responsibly, and in ways that make their work better.',
  },
]

function ProblemFraming() {
  return (
    <section className="problem-framing">
      <div className="problem-framing-inner">
        <header className="problem-framing-heading">
          <p className="section-eyebrow">Start With the Problem</p>

          <h2>
            The problem usually isn't
            <br />
            a lack of technology.
          </h2>

          <p className="problem-framing-intro">
            When websites are difficult to use, work gets scattered across too
            many tools, or new technology creates more confusion than progress,
            adding something else rarely fixes the underlying problem. Start by
            understanding what isn't working—and what people actually need.
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