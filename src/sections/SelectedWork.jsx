function SelectedWork() {
  const projects = [
    {
      eyebrow: 'Human-Centered AI',
      title: 'D.AI.SY — Daily AI Systems',
      description:
        'A human-directed AI platform designed to help people move from cognitive friction toward clarity, useful workflows, and explicitly authorized action.',
      proof:
        'Product strategy, UX/UI, information architecture, agentic AI systems, permission-based memory, testing, cloud deployment, and technical communication.',
      href: 'https://daisy.randazzodesignsai.com',
      linkLabel: 'Explore D.AI.SY',
    },
    {
      eyebrow: 'Web & Digital Systems',
      title: 'Randazzo Designs',
      description:
        'A responsive digital ecosystem bringing together professional services, creative technology, AI systems, education, and original intellectual property.',
      proof:
        'Information architecture, responsive UX, visual communication, frontend development, service architecture, accessibility-conscious design, deployment, and SEO.',
      href: '#services',
      linkLabel: 'Explore Services',
    },
    {
      eyebrow: 'Creative Direction & Original IP',
      title: 'The Awesomeverse',
      description:
        'An original connected universe combining visual storytelling, characters, worldbuilding, media, and audience-facing creative development.',
      proof:
        'Creative direction, visual storytelling, narrative systems, multimedia communication, original IP development, and AI-assisted creative workflows.',
      href: '#awesomeverse',
      linkLabel: 'Enter the Awesomeverse',
    },
  ]

  return (
    <section className="selected-work" id="selected-work">
      <div className="selected-work-inner">
        <header className="selected-work-heading">
          <p className="section-eyebrow">Selected Work</p>

          <h2>
            Ideas are stronger
            <br />
            when they become real.
          </h2>

          <p className="selected-work-intro">
            Selected projects demonstrate how Randazzo Designs combines
            information design, human-centered technology, visual
            communication, and practical implementation.
          </p>
        </header>

        <div className="selected-work-grid">
          {projects.map((project) => (
            <article className="selected-work-card" key={project.title}>
              <div className="selected-work-card-content">
                <p className="selected-work-eyebrow">{project.eyebrow}</p>

                <h3>{project.title}</h3>

                <p className="selected-work-description">
                  {project.description}
                </p>

                <div className="selected-work-proof">
                  <p>Demonstrated capabilities</p>
                  <span>{project.proof}</span>
                </div>
              </div>

              <a
                className="selected-work-link"
                href={project.href}
                {...(project.href.startsWith('http')
                  ? {
                      target: '_blank',
                      rel: 'noreferrer',
                    }
                  : {})}
              >
                {project.linkLabel}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork