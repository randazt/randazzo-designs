const experiences = [
  {
    name: 'D.AI.SY',
    descriptor: 'Cognitive Accessibility & Agency Companion',
    description:
      'A human-agency AI experience that helps users move from confusion toward clarity, action, confidence, and greater independence through structured cognitive translation.',
    href: 'https://chatgpt.com/g/g-6a2a163a6ef88191a067d5ecfa927b73-daisy-v0-2',
    cta: 'Open D.AI.SY',
    accent: 'green',
  },
  {
    name: 'Creative Systems Assistant',
    descriptor: 'AI Design Collaborator',
    description:
      'A senior-level design partner grounded in UX psychology, cognitive science, visual hierarchy, accessibility, branding systems, web design, and rationale-driven critique.',
    href: 'https://chatgpt.com/g/g-691fb42b3aa88191ba5291ce59554971-creative-systems-assistant',
    cta: 'Explore Creative Systems',
    accent: 'blue',
  },
  {
    name: 'Studio Forge AI',
    descriptor: 'Creative Systems Architect',
    description:
      'A systems-first creative intelligence for designing sustainable infrastructure across games, live production, identity, strategy, and complex creative workflows.',
    href: 'https://chatgpt.com/g/g-692b7fb82d108191a807121b8c8793b0-studio-forge-ai',
    cta: 'Enter Studio Forge',
    accent: 'purple',
  },
  {
    name: 'R&D Assistant',
    descriptor: 'R&D, Funding & Project Architect',
    description:
      'Compliance-first support for grants, project planning, financial modeling, commercialization, eligibility, risk, and structured proposal development.',
    href: 'https://chatgpt.com/g/g-6927cc5876c48191b35fa49b370b5a78-r-d-assistant',
    cta: 'Explore R&D Assistant',
    accent: 'teal',
  },
  {
    name: 'FrontDeskIQ',
    descriptor: 'Operational Intelligence for Front Desk Professionals',
    description:
      'Role-adaptive support for high-pressure hospitality operations, including decision compression, escalation clarity, revenue guardrails, documentation discipline, and training scenarios.',
    href: 'https://chatgpt.com/g/g-69a3addd7e348191a6db434ec4911ac7-frontdeskiq',
    cta: 'Open FrontDeskIQ',
    accent: 'orange',
  },
  {
    name: 'PressLab',
    descriptor: 'Newsroom Analysis & Verification Assistant',
    description:
      'A newsroom-grade AI experience built around AP Style, structured summaries, source integrity, uncertainty labeling, editorial QA, and responsible verification guidance.',
    href: 'https://chatgpt.com/g/g-6907bd0983c08191a400870d85ac9832-presslab',
    cta: 'Explore PressLab',
    accent: 'red',
  },
  {
    name: 'SkyLens AI',
    descriptor: 'Atmospheric Literacy Assistant',
    description:
      'An educational sky-observation experience that teaches cloud structure, storm morphology, and atmospheric optics while separating observation from inference and avoiding forecasting.',
    href: 'https://chatgpt.com/g/g-6907ca47df8c819180f744c6a65c3f14-skylens-ai',
    cta: 'Explore SkyLens',
    accent: 'sky',
  },
  {
    name: 'Design Art Studio',
    descriptor: 'Visual Design & Art Experience',
    description:
      'A purpose-built visual design and art experience within the Randazzo Designs creative AI collection.',
    href: 'https://chatgpt.com/g/g-6a6cb613c79c8191a07bf88dbb0fdc6b-randazzo-designs-art-studio-assistant',
    cta: 'Enter Design Art Studio',
    accent: 'pink',
  },
  {
    name: 'The Uncanny Art Director',
    descriptor: 'Concept Art & Visual Worldbuilding Director',
    description:
      'A cinematic AI art director for uncanny, liminal, existential, and system-horror concepts—developing layered visual ideas, narrative-rich prompts, and worlds designed to feel discovered rather than generated.',
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
          <p className="section-eyebrow">Interactive AI Experiences</p>

          <h2>
            Built to think
            <br />
            differently.
          </h2>

          <p className="ai-experiences-intro">
            Purpose-built AI experiences for design, research, operations,
            learning, storytelling, creative systems, and structured problem
            solving.
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
