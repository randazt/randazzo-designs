function WorkingTechnology() {
  const capabilityGroups = [
    {
      title: 'Creative Systems',
      description:
        'Interactive experiences, digital tools, web interfaces, and structured systems designed to turn ideas into usable experiences.',
    },
    {
      title: 'AI & Agentic Systems',
      description:
        'Human-directed AI workflows, generative AI systems, prompt and system design, and agent-based applications built around practical use.',
    },
    {
      title: 'Web, Information & Experience Design',
      description:
        'Information architecture, UX/UI, responsive web design, visual communication, interactive media, and digital experiences grounded in communication and information design.',
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
            Randazzo Designs brings together design, AI, interaction, and
            information systems to create practical digital experiences that
            people can actually use.
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
              Current work includes D.AI.SY, creative AI systems, agentic
              workflows, responsive websites, digital publishing systems,
              interactive experiences, and purpose-built assistants supporting
              research, storytelling, design, production, and operations.
            </p>
          </div>

          <div className="technology-proof-tags" aria-label="Technology areas">
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