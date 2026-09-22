function WorkingTechnology() {
  const capabilityGroups = [
    {
      title: 'Digital & Creative Tools',
      description:
        'Interactive tools, digital resources, and creative systems designed to turn ideas into useful experiences people can understand and work with.',
    },
    {
      title: 'Practical AI Systems',
      description:
        'AI tools and workflows designed around real tasks, clear boundaries, and meaningful human control rather than technology for its own sake.',
    },
    {
      title: 'Websites & Digital Experiences',
      description:
        'Responsive websites and digital experiences that make information easier to find, interactions easier to understand, and technology easier to use.',
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
            Randazzo Designs turns ideas into working websites, digital tools,
            workflows, and AI experiences by bringing design and technology
            together around what people actually need to accomplish.
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
              Current work includes D.AI.SY, responsive websites, creative
              production systems, publishing workflows, purpose-built AI
              assistants, and human-directed AI workflows supporting research,
              storytelling, design, production, learning, and everyday
              operations.
            </p>
          </div>

          <div
            className="technology-proof-tags"
            role="group"
            aria-label="Technology areas"
          >
            <span>Human-in-the-loop AI</span>
            <span>AI workflows</span>
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