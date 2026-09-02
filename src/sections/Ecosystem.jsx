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
            education, and original intellectual property under one
            connected studio.
          </p>
        </div>

        <div className="ecosystem-grid">
          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-blue">01</div>
            <h3>D.AI.SY</h3>
            <p>
              Human-directed AI systems built around understanding,
              decision, and authorized action.
            </p>
            <a href="#daisy">Explore D.AI.SY →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-teal">02</div>
            <h3>Creative Technology</h3>
            <p>
              Interactive tools, hosted experiences, and creative systems
              designed to turn ideas into usable experiences.
            </p>
            <a href="#technology">Explore Technology →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-purple">03</div>
            <h3>Awesomeverse</h3>
            <p>
              Original worlds, stories, characters, and creative intellectual
              property developed as a connected universe.
            </p>
            <a href="#awesomeverse">Enter the Awesomeverse →</a>
          </article>

          <article className="ecosystem-card">
            <div className="ecosystem-icon ecosystem-icon-orange">04</div>
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