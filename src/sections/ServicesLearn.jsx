function ServicesLearn() {
  const learningAreas = [
    {
      title: 'Practical AI Learning',
      description:
        'Clear guidance that helps people understand AI, recognize where it may be useful, and make informed decisions about how to use it responsibly.',
    },
    {
      title: 'Visual Explanation',
      description:
        'Diagrams, instructional communication, and information design that make complex ideas, processes, and technology easier to understand and use.',
    },
    {
      title: 'Creative & Technical Exploration',
      description:
        'Hands-on exploration that connects design, media, storytelling, and technology to help people understand what is possible and what may be worth pursuing.',
    },
    {
      title: 'Knowledge & Resources',
      description:
        'Guides, learning materials, documentation, and practical resources that turn useful knowledge into something people can apply to their own work.',
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
            New technology is more useful when people understand what it can
            do, where it fits, and how to make informed decisions about it.
            Randazzo Designs develops practical learning and resources that
            make complex ideas easier to understand and apply.
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
              Build Understanding
            </p>

            <h3>
              Need help making something
              <br />
              complex easier to understand?
            </h3>

            <p>
              Whether you are introducing AI, explaining a process, or helping
              people work with new technology, start with what they need to
              understand and what they need to do next.
            </p>
          </div>

          <a
            className="services-learn-button"
            href="https://cal.com/randazzo-designs/conversation"
            target="_blank"
            rel="noreferrer"
          >
            Discuss Your Learning Needs
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesLearn