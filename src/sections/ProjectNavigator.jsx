const projectPaths = [
  {
    title: 'I need a website or digital experience.',
    description:
      'For a new web presence, a more substantial business website, or a custom digital experience.',
    href: '#services',
    linkLabel: 'Explore web services',
  },
  {
    title: 'I need clearer design or communication.',
    description:
      'For visual communication, information design, brand foundations, and complex information that needs structure.',
    href: '#services',
    linkLabel: 'Explore design services',
  },
  {
    title: 'I want to understand or use AI better.',
    description:
      'For individual guidance, workflow assessment, human-directed AI systems, and practical implementation.',
    href: '#services',
    linkLabel: 'Explore AI services',
  },
  {
    title: 'My team needs practical AI capability.',
    description:
      'For workforce workshops, on-site learning, and structured AI enablement across an organization.',
    href: '#services',
    linkLabel: 'Explore workforce enablement',
  },
]

function ProjectNavigator() {
  return (
    <section className="project-navigator" aria-labelledby="project-navigator-title">
      <div className="project-navigator-inner">
        <header className="project-navigator-heading">
          <p className="section-eyebrow">Find Your Starting Point</p>

          <h2 id="project-navigator-title">
            Not sure what
            <br />
            you need yet?
          </h2>

          <p>
            Start with the problem you want to solve. The right scope can be
            defined from there.
          </p>
        </header>

        <div className="project-navigator-grid">
          {projectPaths.map((path) => (
            <article className="project-path" key={path.title}>
              <div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>

              <a href={path.href}>
                {path.linkLabel}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>

        <div className="project-navigator-direct">
          <p>
            Something different? You don&apos;t need to fit your idea into a
            predefined category.
          </p>

          <a
            href="https://cal.com/randazzo-designs/conversation"
            target="_blank"
            rel="noreferrer"
          >
            Start with a conversation
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectNavigator