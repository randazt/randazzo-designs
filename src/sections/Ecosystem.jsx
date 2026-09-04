function EcosystemIcon({ type }) {
  const commonProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'ai') {
    return (
      <svg {...commonProps}>
        <circle cx="7" cy="8" r="2.5" />
        <circle cx="17" cy="8" r="2.5" />
        <circle cx="12" cy="16" r="2.5" />
        <path d="M9.2 9.5 10.8 14" />
        <path d="M14.8 9.5 13.2 14" />
        <path d="M9.5 8h5" />
      </svg>
    )
  }

  if (type === 'technology') {
    return (
      <svg {...commonProps}>
        <path d="M7 7h10v10H7z" />
        <path d="M10 2v3" />
        <path d="M14 2v3" />
        <path d="M10 19v3" />
        <path d="M14 19v3" />
        <path d="M2 10h3" />
        <path d="M2 14h3" />
        <path d="M19 10h3" />
        <path d="M19 14h3" />
      </svg>
    )
  }

  if (type === 'world') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="5" />
        <path d="M3.5 15.5c2.5 1.5 6 2.1 9.6 1.3 3.7-.8 6.4-2.8 7.4-5" />
        <path d="M4.5 9.5c1.8-1.6 4.6-2.7 7.6-2.7 3.1 0 5.8 1 7.4 2.6" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z" />
    </svg>
  )
}

function Ecosystem() {
  return (
    <section className="ecosystem" id="work">
      <div className="ecosystem-inner">
        <div className="ecosystem-heading">
          <p className="section-eyebrow">The Ecosystem</p>

          <h2>
            One creative system.
            <br />
            Multiple expressions.
          </h2>

          <p className="section-intro">
            Randazzo Designs brings together technology, creative work,
            education, and original intellectual property under one connected
            studio.
          </p>
        </div>

        <div className="ecosystem-grid">
          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-blue">
              <EcosystemIcon type="ai" />
            </div>

            <h3>D.AI.SY</h3>

            <p>
              Human-directed AI systems built around understanding, decision,
              and authorized action.
            </p>

            <a href="#daisy">Explore D.AI.SY →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-teal">
              <EcosystemIcon type="technology" />
            </div>

            <h3>Creative Technology</h3>

            <p>
              Interactive tools, hosted experiences, and creative systems
              designed to turn ideas into usable experiences.
            </p>

            <a href="#technology">Explore Technology →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-purple">
              <EcosystemIcon type="world" />
            </div>

            <h3>Awesomeverse</h3>

            <p>
              Original worlds, stories, characters, and creative intellectual
              property developed as a connected universe.
            </p>

            <a href="#awesomeverse">Enter the Awesomeverse →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-orange">
              <EcosystemIcon type="learn" />
            </div>

            <h3>Learn</h3>

            <p>
              Practical education, guides, and resources for building skills
              around AI, creativity, and emerging technology.
            </p>

            <a href="#learn">Browse Learning →</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Ecosystem