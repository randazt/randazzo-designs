const projects = [
  {
    category: 'Human-Centered AI',
    title: 'D.AI.SY — Daily AI Systems',
    description:
      'An AI experience designed to help people turn uncertainty and information overload into clearer thinking, useful next steps, and actions they remain in control of.',
    capabilities:
      'AI experience design, clear guidance, user control, memory with permission, testing, and reliable cloud delivery.',
    caseStudyHref: '/work/daisy',
    href: 'https://daisy.randazzodesignsai.com',
    linkLabel: 'Explore D.AI.SY',
    accent: 'blue',
  },
  {
    category: 'Creative Technology',
    title: 'STUDIO//ONE',
    description:
      'A creative production system designed to help one-person teams organize projects, maintain context, work with AI, and keep important decisions in human hands.',
    capabilities:
      'Creative workflow design, project coordination, persistent context, human approval, AI-assisted support, interface design, and cloud delivery.',
    caseStudyHref: '/work/studio-one',
    href: 'https://studio.randazzodesignsai.com',
    linkLabel: 'Explore STUDIO//ONE',
    accent: 'teal',
  },
  {
    category: 'Web & Digital Design',
    title: 'Randazzo Designs',
    description:
      'A responsive business website that brings services, projects, technology, learning, and original creative work together in one clear experience.',
    capabilities:
      'Website planning, responsive design, clear navigation, visual communication, frontend development, accessibility, deployment, and search visibility.',
    caseStudyHref: '/work/randazzo-designs',
    href: '#services',
    linkLabel: 'Explore Services',
    accent: 'purple',
  },
  {
    category: 'Creative Direction & Original IP',
    title: 'The Awesomeverse',
    description:
      'An original connected storyworld built through characters, visual storytelling, worldbuilding, media, and ongoing creative development.',
    capabilities:
      'Creative direction, visual storytelling, worldbuilding, multimedia communication, original IP development, and AI-assisted creative work.',
    caseStudyHref: '/work/awesomeverse',
    href: '#awesomeverse',
    linkLabel: 'Enter the Awesomeverse',
    accent: 'blue',
  },
  {
    category: 'AI Experience Design',
    title: 'AI Assistants',
    description:
      'Purpose-built AI assistants that help with specific kinds of work—from design and research to learning, accessibility, planning, and creative production.',
    capabilities:
      'Clear guidance, cognitive support, accessibility, design collaboration, research, learning, planning, and specialized work support.',
    caseStudyHref: '/work/ai-assistants',
    href: '#ai-experiences',
    linkLabel: 'Explore AI Experiences',
    accent: 'teal',
  },
]

function SelectedWork() {
  return (
    <section className="selected-work" id="selected-work">
      <div className="selected-work-inner">
        <div className="selected-work-heading">
          <p className="section-eyebrow">Selected Work</p>

          <h2>
            Ideas are stronger
            <br />
            when they become
            <br />
            real.
          </h2>

          <p className="selected-work-intro">
            These projects show how ideas can become useful websites, tools,
            creative systems, and AI experiences built around real people and
            real needs.
          </p>
        </div>

        <div className="selected-work-grid">
          {projects.map((project) => (
            <article
              className={`selected-work-card selected-work-${project.accent}`}
              key={project.title}
            >
              <div className="selected-work-content">
                <p className="selected-work-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="selected-work-description">
                  {project.description}
                </p>

                <div className="selected-work-capabilities">
                  <p>What It Demonstrates</p>
                  <span>{project.capabilities}</span>
                </div>
              </div>

              <div className="selected-work-links">
                {project.caseStudyHref && (
                  <a
                    className="selected-work-link selected-work-link--case-study"
                    href={project.caseStudyHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Case Study
                    <span aria-hidden="true"> ↗</span>
                  </a>
                )}

                <a
                  className="selected-work-link"
                  href={project.href}
                  target={
                    project.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    project.href.startsWith('http') ? 'noreferrer' : undefined
                  }
                >
                  {project.linkLabel}
                  <span aria-hidden="true">
                    {' →'}
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork