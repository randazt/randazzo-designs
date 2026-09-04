const servicePillars = [
  {
    category: 'Web & Digital Experience Design',
    statement:
      'Create clear, responsive digital experiences that help people find information, understand it, and take meaningful action.',
    engagements: [
      {
        title: 'Focused Web Presence',
        price: 'Starting at $1,800',
        description:
          'A focused professional web presence for individuals, creators, founders, and small organizations that need clear communication, straightforward functionality, and a credible digital home.',
      },
      {
        title: 'Professional Website',
        price: 'Starting at $3,500',
        description:
          'A structured business website with deeper information architecture, user pathways, responsive UX, reusable design patterns, and a more substantial digital presence.',
      },
      {
        title: 'Custom Digital Experience',
        price: 'Starting at $6,000',
        description:
          'A purpose-built digital experience for projects requiring custom interaction, systems architecture, specialized workflows, integrations, AI-assisted functionality, or more complex implementation.',
      },
    ],
  },

  {
    category: 'Design & Information Systems',
    statement:
      'Turn ideas, identities, and complex information into clearer visual systems that people can understand and use.',
    engagements: [
      {
        title: 'Visual Communication',
        price: 'Custom scope',
        description:
          'Coordinated visual communication designed around audience, hierarchy, clarity, and consistent presentation.',
      },
      {
        title: 'Information Design',
        price: 'Custom scope',
        description:
          'Structure complex information into clearer documents, diagrams, visual explanations, interfaces, and communication systems.',
      },
      {
        title: 'Brand & Communication Foundation',
        price: 'Custom scope',
        description:
          'Build or refine a coherent visual foundation across identity, typography, color, and essential communication applications.',
      },
    ],
  },

  {
    category: 'AI Advisory & Systems',
    statement:
      'Help people and organizations understand where AI belongs, design useful workflows, and preserve meaningful human control.',
    engagements: [
      {
        title: 'AI Clarity & Workflow Session',
        price: 'From $175',
        description:
          'Focused guidance for individuals, professionals, and founders who want to understand where AI can meaningfully improve their work.',
      },
      {
        title: 'AI Workflow & Systems Assessment',
        price: 'Starting at $900',
        description:
          'A structured organizational assessment of workflows, friction points, AI opportunities, constraints, and implementation priorities.',
      },
      {
        title: 'Custom AI Experience',
        price: 'Custom scope',
        description:
          'A purpose-built AI experience designed around a specific audience, workflow, problem, or interaction while preserving meaningful human authority.',
      },
    ],
  },

  {
    category: 'AI Workforce Enablement',
    statement:
      'Build practical AI capability across teams while supporting understanding, responsible use, and human decision-making.',
    engagements: [
      {
        title: 'AI Workforce Workshop',
        price: 'Remote from $1,500',
        description:
          'Customized practical training built around real roles, workflows, use cases, exercises, and responsible-use guidance.',
      },
      {
        title: 'On-Site Workshop Delivery',
        price: 'Starting at $2,500',
        description:
          'The workforce workshop delivered in person with scope adjusted for location, participant needs, and organizational requirements.',
      },
      {
        title: 'AI Enablement Program',
        price: 'Starting at $5,000',
        description:
          'A multi-stage engagement combining assessment, learning, workflow development, implementation guidance, and follow-up support.',
      },
    ],
  },
]

const outcomes = [
  {
    title: 'Productivity',
    description: 'Reduce unnecessary friction around meaningful work.',
  },
  {
    title: 'Cognition',
    description: 'Make complexity easier to understand and navigate.',
  },
  {
    title: 'Accessibility',
    description: 'Reduce barriers to information, interaction, and participation.',
  },
  {
    title: 'Agency',
    description:
      'Preserve meaningful human understanding, choice, and control.',
  },
]

function ServicesPackages() {
  return (
    <section className="services-packages" id="services">
      <div className="services-packages-inner">
        <header className="services-outcomes-header">
          <p className="section-eyebrow">Designed for Better Outcomes</p>

          <h2>
            Technology should help
            <br />
            people do better.
          </h2>

          <p className="services-outcomes-intro">
            Randazzo Designs uses human-centered design and technology to help
            people and organizations achieve better outcomes by improving
            productivity, supporting cognition, expanding accessibility, and
            preserving human agency.
          </p>
        </header>

        <div className="services-outcomes-grid">
          {outcomes.map((outcome) => (
            <article className="service-outcome" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>

        <div className="services-principle">
          <p className="services-principle-label">Human Agency Principle</p>

          <p className="services-principle-statement">
            AI Assists. Humans Decide.
          </p>

          <p className="services-principle-copy">
            AI and automation should support human capability without
            unnecessarily replacing understanding, judgment, authorization, or
            meaningful control.
          </p>
        </div>

        <div className="services-offers-heading">
          <p className="section-eyebrow">Services & Engagements</p>

          <h2>Ways to work together.</h2>

          <p>
            Choose the area closest to what you want to improve. The exact
            engagement can then be shaped around the problem, audience, scope,
            and desired outcome.
          </p>
        </div>

        <div className="services-pillar-list">
          {servicePillars.map((pillar) => (
            <section className="service-pillar" key={pillar.category}>
              <div className="service-pillar-intro">
                <div>
                  <h3>{pillar.category}</h3>
                  <p>{pillar.statement}</p>
                </div>
              </div>

              <div className="service-engagement-grid">
                {pillar.engagements.map((engagement) => (
                  <article
                    className="service-engagement-card"
                    key={engagement.title}
                  >
                    <div>
                      <h4>{engagement.title}</h4>

                      <p className="service-engagement-description">
                        {engagement.description}
                      </p>
                    </div>

                    <div className="service-engagement-footer">
                      <p className="service-engagement-price">
                        {engagement.price}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="service-pillar-cta">
                <a
                  href="https://cal.com/randazzo-designs/conversation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss your project
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </section>
          ))}
        </div>

        <aside className="services-scope-note">
          <div>
            <p className="services-scope-label">Clear Scope</p>

            <h3>Defined around the work—not hidden assumptions.</h3>
          </div>

          <div className="services-scope-copy">
            <p>
              Published prices are starting points for defined scopes. Final
              pricing depends on complexity, customization, implementation,
              participant scale, delivery requirements, travel, third-party
              services, and ongoing support.
            </p>

            <p>
              Engagements establish appropriate deliverables, project
              boundaries, revision limits, responsibilities, handoff
              requirements, and change procedures before work begins.
            </p>

            <p>
              Accessibility is treated as a design consideration throughout the
              work. Specific accessibility standards, audits, testing, or
              compliance requirements are defined separately when required by
              the engagement.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ServicesPackages