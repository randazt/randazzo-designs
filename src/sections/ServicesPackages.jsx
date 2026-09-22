const servicePillars = [
  {
    title: 'Web & Digital Experience Design',
    statement:
      'Build a website or digital experience that is easier to understand, easier to use, and better aligned with what your business needs to accomplish.',
    services: [
      'Website strategy and planning',
      'UX and interface design',
      'Responsive website design',
      'Information and navigation design',
      'Accessibility-conscious design',
      'Frontend implementation',
    ],
    ctaLabel: 'Build a Better Website',
  },
  {
    title: 'Design & Information Systems',
    statement:
      'Make information, workflows, and everyday tools easier to understand so people can spend less time navigating complexity and more time getting useful work done.',
    services: [
      'Workflow and process design',
      'Information organization',
      'Internal tools and resources',
      'Visual communication systems',
      'Knowledge and content structure',
      'Operational design support',
    ],
    ctaLabel: 'Make Work Easier',
  },
  {
    title: 'AI Advisory & Systems',
    statement:
      'Find practical places where AI can help, then design the experience around real needs, clear boundaries, and meaningful human control.',
    services: [
      'AI opportunity assessment',
      'AI workflow design',
      'Human-centered AI experiences',
      'Purpose-built AI assistants',
      'AI system planning',
      'Responsible implementation guidance',
    ],
    ctaLabel: 'Find Where AI Can Help',
  },
  {
    title: 'AI Workforce Enablement',
    statement:
      'Help people understand how to use AI confidently and responsibly in the work they already do, without making technology the center of the process.',
    services: [
      'AI clarity sessions',
      'Team workshops',
      'Workflow assessments',
      'Practical AI training',
      'Role-specific guidance',
      'Human-in-the-loop working practices',
    ],
    ctaLabel: 'Help Your Team Use AI',
  },
]

const engagements = [
  {
    title: 'AI Clarity Session',
    price: 'From $175',
    description:
      'A focused conversation for businesses or professionals who want help understanding where AI may be useful, what to prioritize, and what to avoid.',
  },
  {
    title: 'AI Workflow Assessment',
    price: 'From $900',
    description:
      'A structured review of an existing workflow to identify friction, opportunities for improvement, and practical places where AI or better process design may help.',
  },
  {
    title: 'Remote AI Workshop',
    price: 'From $1,500',
    description:
      'An interactive remote session that helps a team understand practical AI use, explore relevant workflows, and build confidence around responsible adoption.',
  },
  {
    title: 'On-Site AI Workshop',
    price: 'From $2,500',
    description:
      'A hands-on working session designed around the needs of your team, with practical guidance, examples, and opportunities to apply AI to real work.',
  },
  {
    title: 'Professional Website',
    price: 'From $3,500',
    description:
      'A professionally designed website for organizations that need a clearer, more credible, and more useful digital presence.',
  },
  {
    title: 'AI Enablement Program',
    price: 'From $5,000',
    description:
      'A more comprehensive engagement for organizations that need help identifying useful AI opportunities, improving workflows, and building practical capability across a team.',
  },
  {
    title: 'Custom Digital Experience',
    price: 'From $6,000',
    description:
      'A tailored digital project for organizations that need more than a standard website, combining strategy, design, technology, and implementation around a specific problem.',
  },
]

function ServicesPackages() {
  const bookingUrl = 'https://cal.com/randazzo-designs/conversation'

  return (
    <section className="services-packages" id="services">
      <div className="services-packages-inner">
        <header className="services-packages-heading">
          <p className="section-eyebrow">Services</p>

          <h2>
            Start with what
            <br />
            needs to work better.
          </h2>

          <p className="services-packages-intro">
            Randazzo Designs helps businesses improve websites, simplify
            information and workflows, and use AI in practical ways. The work
            starts with the problem, then brings together the right mix of
            design, technology, and guidance to solve it.
          </p>
        </header>

        <div className="service-pillars">
          {servicePillars.map((pillar) => (
            <article className="service-pillar" key={pillar.title}>
              <div className="service-pillar-heading">
                <h3>{pillar.title}</h3>
              </div>

              <p className="service-pillar-statement">{pillar.statement}</p>

              <ul className="service-pillar-list">
                {pillar.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>

              <div className="service-pillar-cta">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  {pillar.ctaLabel}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="service-engagements">
          <div className="service-engagements-heading">
            <p className="section-eyebrow">Ways to Work Together</p>

            <h3>Choose the level of support that fits the problem.</h3>

            <p>
              Start with a focused conversation, assessment, workshop, or
              larger project. Engagements can scale with the complexity of the
              work rather than forcing every problem into the same package.
            </p>
          </div>

          <div className="service-engagement-grid">
            {engagements.map((engagement) => (
              <article
                className="service-engagement-card"
                key={engagement.title}
              >
                <div>
                  <h4>{engagement.title}</h4>
                  <p>{engagement.description}</p>
                </div>

                <p className="service-engagement-price">{engagement.price}</p>
              </article>
            ))}
          </div>

          <div className="service-pricing-note">
            <p>
              Starting prices provide a planning reference. Final scope,
              schedule, and pricing depend on the needs and complexity of the
              project and are confirmed before work begins.
            </p>
          </div>

          <div className="service-engagement-cta">
            <div>
              <p className="service-engagement-cta-label">
                Not sure where to start?
              </p>

              <h3>Start with the problem.</h3>

              <p>
                Tell us what is not working, what you are trying to improve, or
                where you need more clarity. We can use the conversation to
                determine what kind of support makes sense.
              </p>
            </div>

            <a
              className="button button-primary"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPackages