function About() {
  const milestones = [
    {
      label: 'Design Foundation',
      title: 'Communication & Information Design',
      description:
        'B.S. from SUNY Polytechnic Institute, Magna Cum Laude, with a minor in Technology & Culture and recognition with the Communication Design Award.',
    },
    {
      label: 'Digital Media',
      title: 'Strategy, Storytelling & Audience',
      description:
        'Professional experience spanning newsroom production, digital content, audience development, and leadership across web, mobile, social, and connected platforms.',
    },
    {
      label: 'Emerging Technology',
      title: 'AI & Creative Systems',
      description:
        'Ongoing work exploring practical AI, purpose-built assistants, creative workflows, data analysis, and new ways technology can support people and their work.',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-heading">
          <p className="section-eyebrow">About Randazzo Designs</p>

          <h2>
            Design shaped by media,
            <br />
            systems, and human experience.
          </h2>
        </div>

        <div className="about-story">
          <div className="about-journey">
            <span>Mohawk Valley</span>
            <span aria-hidden="true">→</span>
            <span>Blue Ridge</span>
            <span aria-hidden="true">→</span>
            <span>Suncoast</span>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              From New York’s Mohawk Valley to the Blue Ridge Mountains and
              Florida’s Suncoast, Randazzo Designs has been shaped by a career
              spanning design, media, storytelling, and emerging technology.
            </p>

            <p>
              Randazzo Designs is the independent creative and technology
              practice of Thad Randazzo. His background brings together
              communication design, digital media, visual storytelling, web
              experiences, artificial intelligence, and original creative
              work.
            </p>

            <p>
              That mix of experience shapes a simple approach: understand the
              problem, make complexity easier to navigate, and create something
              people can actually understand and use.
            </p>
          </div>
        </div>

        <div className="about-milestones">
          {milestones.map((milestone) => (
            <article className="about-milestone" key={milestone.title}>
              <p className="about-milestone-label">{milestone.label}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>

        <div className="about-human">
          <p className="about-human-label">Beyond the work</p>

          <p>
            Dad. Mentor. Competitive paintball player. Motorcycle rider.
            Gamer and streamer. Curiosity doesn’t stop when the workday does.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About