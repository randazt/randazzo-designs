function ServicesLearn() {
  const learningAreas = [
    {
      title: 'Practical AI Learning',
      description:
        'Clear, practical guidance that helps people understand emerging AI, evaluate where it is useful, and approach it with greater confidence and responsible human judgment.',
    },
    {
      title: 'Visual Explanation',
      description:
        'Diagrams, instructional communication, and information design that make complex ideas, systems, and processes easier to understand and use.',
    },
    {
      title: 'Creative & Technical Exploration',
      description:
        'Working explorations that connect design, media, storytelling, emerging technology, and human-directed experimentation.',
    },
    {
      title: 'Knowledge & Resources',
      description:
        'Guides, learning materials, documentation, and practical resources developed as the practice evolves and new knowledge becomes useful to share.',
    },
  ]

  return (
    <section className="services-learn" id="learn">
      <div className="services-learn-inner">
        <div className="services-learn-heading">
          <p className="section-eyebrow">Learning & Knowledge</p>

          <h2>
            Understand what
            <br />
            comes next.
          </h2>

          <p className="services-learn-intro">
            Technology becomes more useful when people understand the ideas,
            systems, and decisions behind it. Randazzo Designs develops
            practical learning, visual explanation, and knowledge resources
            that make emerging technology easier to understand and use.
          </p>
        </div>

        <div className="services-learn-grid">
          {learningAreas.map((area) => (
            <article className="service-learn-card" key={area.title}>
              <h3>{area.title}</h3>

              <p>{area.description}</p>
            </article>
          ))}
        </div>

        <div className="services-learn-cta">
          <div>
            <p className="services-learn-label">
              Start With the Problem
            </p>

            <h3>
              Have a project, system,
              <br />
              or idea worth exploring?
            </h3>

            <p>
              Start with a conversation about the problem, the audience,
              and what a useful outcome should actually look like.
            </p>
          </div>

          <a
            className="services-learn-button"
            href="https://cal.com/randazzo-designs/conversation"
            target="_blank"
            rel="noreferrer"
          >
            Start a Conversation
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesLearn