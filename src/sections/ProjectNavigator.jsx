const projectPaths = [
  {
    title: 'My website needs to be created or improved.',
    description:
      'For businesses that need a new website, a stronger online presence, or an existing experience that is clearer, easier to use, and better suited to what people need.',
    href: '#services',
    linkLabel: 'See Website Options',
  },
  {
    title: "People aren't understanding what we need to communicate.",
    description:
      'For information, visuals, messaging, or processes that have become difficult to understand and need clearer structure and communication.',
    href: '#services',
    linkLabel: 'See Design Options',
  },
  {
    title: "I know AI could help, but I'm not sure where.",
    description:
      'For understanding where AI may be useful, identifying practical opportunities, improving a workflow, or exploring a focused AI solution.',
    href: '#services',
    linkLabel: 'See AI Options',
  },
  {
    title: 'My team needs practical help using AI.',
    description:
      'For teams that need clearer guidance, hands-on learning, and practical ways to use AI confidently and responsibly in their everyday work.',
    href: '#services',
    linkLabel: 'See Team Options',
  },
]

function ProjectNavigator() {
  return (
    <section
      className="project-navigator"
      aria-labelledby="project-navigator-title"
    >
      <div className="project-navigator-inner">
        <header className="project-navigator-heading">
          <p className="section-eyebrow">Find Your Starting Point</p>

          <h2 id="project-navigator-title">
            Not sure what
            <br />
            you need yet?
          </h2>

          <p>
            You do not need to know the name of the service. Start with what
            needs to work better, and we can define the right approach from
            there.
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
            Something different? You don&apos;t need to fit your problem into
            one of these categories.
          </p>

          <a
            href="https://cal.com/randazzo-designs/conversation"
            target="_blank"
            rel="noreferrer"
          >
            Tell Us What You&apos;re Working On
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectNavigator