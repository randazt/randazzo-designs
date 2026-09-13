function WorkingTechnology() {
  const capabilityGroups = [
    {
      title: 'Creative Systems',
      description:
        'Interactive experiences, digital tools, web interfaces, and structured creative systems designed to turn ideas into clear, usable experiences.',
    },
    {
      title: 'AI & Agentic Systems',
      description:
        'Human-directed AI workflows, generative and agentic systems, prompt and system design, and purpose-built AI experiences shaped around practical use and meaningful human control.',
    },
    {
      title: 'Web, Information & Experience Design',
      description:
        'Information architecture, UX/UI, responsive web design, visual communication, interactive systems, and digital experiences grounded in clarity and human-centered design.',
    },
  ]

  return (
    <section className="working-technology" id="technology">
      <div className="working-technology-inner">
        <div className="working-technology-heading">
          <p className="section-eyebrow">Working Technology</p>

          <h2>
            Ideas become systems.
            <br />
            Systems become experiences.
          </h2>

          <p className="working-technology-intro">
            Randazzo Designs combines design, AI, interaction, and information
            systems to turn ideas into working digital experiences—connecting
            creative thinking with practical implementation.
          </p>
        </div>

        <div className="working-technology-grid">
          {capabilityGroups.map((group) => (
            <article className="technology-card" key={group.title}>
              <h3>{group.title}</h3>

              <p>{group.description}</p>
            </article>
          ))}
        </div>

        <div className="technology-proof">
          <div className="technology-proof-copy">
            <p className="technology-proof-label">Built, not hypothetical</p>

            <h3>Technology shaped around real work.</h3>

            <p>
              Current work includes D.AI.SY, human-directed agentic systems
              and workflows, responsive web systems, creative production
              systems, publishing workflows, and purpose-built AI assistants
              supporting research, storytelling, design, production, learning,
              and operations.
            </p>
          </div>

          <div
            className="technology-proof-tags"
            role="group"
            aria-label="Technology areas"
          >
            <span>Human-in-the-loop AI</span>
            <span>Agentic workflows</span>
            <span>Responsive web design</span>
            <span>UX/UI</span>
            <span>Information design</span>
            <span>Interactive systems</span>
            <span>Creative tooling</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingTechnology