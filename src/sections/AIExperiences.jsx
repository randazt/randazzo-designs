const experiences = [
  {
    name: 'D.AI.SY',
    descriptor: 'Clarity, Accessibility & Human Agency',
    description:
      'Helps people work through uncertainty, understand what matters, and move toward useful next steps while keeping important decisions and actions in human hands.',
    href: 'https://chatgpt.com/g/g-6a2a163a6ef88191a067d5ecfa927b73-daisy-v0-2',
    cta: 'Open D.AI.SY',
    accent: 'green',
  },
  {
    name: 'Creative Systems Assistant',
    descriptor: 'Design & Creative Collaboration',
    description:
      'Supports design thinking, branding, UX/UI, accessibility, web design, visual hierarchy, and constructive critique with clear reasoning behind recommendations.',
    href: 'https://chatgpt.com/g/g-691fb42b3aa88191ba5291ce59554971-creative-systems-assistant',
    cta: 'Explore Creative Systems',
    accent: 'blue',
  },
  {
    name: 'Studio Forge AI',
    descriptor: 'Creative Planning & Production',
    description:
      'Helps organize complex creative work across production, identity, strategy, games, and live experiences by connecting ideas, workflows, and project decisions.',
    href: 'https://chatgpt.com/g/g-692b7fb82d108191a807121b8c8793b0-studio-forge-ai',
    cta: 'Enter Studio Forge',
    accent: 'purple',
  },
  {
    name: 'R&D Assistant',
    descriptor: 'Research, Funding & Project Planning',
    description:
      'Supports grants, project planning, financial modeling, commercialization, eligibility review, risk identification, and structured proposal development.',
    href: 'https://chatgpt.com/g/g-6927cc5876c48191b35fa49b370b5a78-r-d-assistant',
    cta: 'Explore R&D Assistant',
    accent: 'teal',
  },
  {
    name: 'FrontDeskIQ',
    descriptor: 'Support for Front Desk Professionals',
    description:
      'Helps hospitality professionals work through demanding front desk situations with clearer decisions, escalation guidance, documentation support, operational boundaries, and training scenarios.',
    href: 'https://chatgpt.com/g/g-69a3addd7e348191a6db434ec4911ac7-frontdeskiq',
    cta: 'Open FrontDeskIQ',
    accent: 'orange',
  },
  {
    name: 'PressLab',
    descriptor: 'Newsroom Analysis & Verification',
    description:
      'Supports journalists and newsroom work with structured summaries, AP Style guidance, source awareness, uncertainty labeling, editorial review, and responsible verification practices.',
    href: 'https://chatgpt.com/g/g-6907bd0983c08191a400870d85ac9832-presslab',
    cta: 'Explore PressLab',
    accent: 'red',
  },
  {
    name: 'SkyLens AI',
    descriptor: 'Learning Through Sky Observation',
    description:
      'Helps people learn about clouds, storm structure, and atmospheric optics by separating what can be directly observed from what can only be inferred, without providing weather forecasts.',
    href: 'https://chatgpt.com/g/g-6907ca47df8c819180f744c6a65c3f14-skylens-ai',
    cta: 'Explore SkyLens',
    accent: 'sky',
  },
  {
    name: 'Design Art Studio',
    descriptor: 'Visual Design & Art',
    description:
      'A creative AI experience focused on visual design, art exploration, and developing ideas within the Randazzo Designs creative practice.',
    href: 'https://chatgpt.com/g/g-6a6cb613c79c8191a07bf88dbb0fdc6b-randazzo-designs-art-studio-assistant',
    cta: 'Enter Design Art Studio',
    accent: 'pink',
  },
  {
    name: 'The Uncanny Art Director',
    descriptor: 'Concept Art & Visual Worldbuilding',
    description:
      'Supports the development of uncanny, liminal, existential, and system-horror concepts through visual direction, layered ideas, prompts, and narrative worldbuilding.',
    href: 'https://chatgpt.com/g/g-6a344e9d64b88191bdfb0dddd8b7cf57-uncanny-content-director',
    cta: 'Enter the Uncanny',
    accent: 'uncanny',
  },
]

function AIExperiences() {
  return (
    <section className="ai-experiences" id="ai-experiences">
      <div className="ai-experiences-inner">
        <div className="ai-experiences-heading">
          <p className="section-eyebrow">AI Systems in Practice</p>

          <h2>
            Different needs.
            <br />
            AI designed for the work.
          </h2>

          <p className="ai-experiences-intro">
            These working AI experiences show how the same technology can be
            shaped around very different needs—from design and research to
            learning, operations, accessibility, and creative work. Each one
            starts with the role it should support rather than the technology
            itself.
          </p>
        </div>

        <div className="ai-experiences-grid">
          {experiences.map((experience) => (
            <article
              className={`ai-experience-card ai-experience-${experience.accent}`}
              key={experience.name}
            >
              <div className="ai-experience-top">
                <span className="ai-experience-orbit" aria-hidden="true">
                  <span />
                </span>

                <p className="ai-experience-descriptor">
                  {experience.descriptor}
                </p>
              </div>

              <div className="ai-experience-content">
                <h3>{experience.name}</h3>

                <p>{experience.description}</p>
              </div>

              <a
                className="ai-experience-link"
                href={experience.href}
                target="_blank"
                rel="noreferrer"
              >
                {experience.cta}
                <span aria-hidden="true"> ↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="ai-experiences-note">
          <p>
            These experiences open through ChatGPT. Availability and features
            may vary based on platform access, account status, and the
            capabilities available within ChatGPT.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AIExperiences