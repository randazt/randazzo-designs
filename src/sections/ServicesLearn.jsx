function ServicesLearn() {
  const services = [
    {
      number: '01',
      title: 'Web Design & Digital Experiences',
      description:
        'Responsive websites and digital experiences built around clear information architecture, thoughtful UX/UI, visual communication, accessibility, and performance.',
    },
    {
      number: '02',
      title: 'AI & Creative Technology',
      description:
        'Generative and agentic AI systems, human-directed workflows, prompt and system design, interactive tools, and AI-enhanced creative work.',
    },
    {
      number: '03',
      title: 'Media & Storytelling',
      description:
        'Visual storytelling, content development, video and media production, interactive experiences, and original creative development.',
    },
    {
      number: '04',
      title: 'Education & Knowledge',
      description:
        'Practical AI education, guides, learning resources, and systems that help people understand and use emerging technology.',
    },
  ]

  return (
    <section className="services-learn" id="learn">
      <div className="services-learn-inner">
        <div className="services-learn-heading">
          <p className="section-eyebrow">Services & Learning</p>

          <h2>
            Design what matters.
            <br />
            Learn what comes next.
          </h2>

          <p className="services-learn-intro">
            Randazzo Designs combines creative practice, technical systems,
            media, and education to help people and organizations turn ideas
            into clearer, more useful outcomes.
          </p>
        </div>

        <div className="services-learn-grid">
          {services.map((service) => (
            <article className="service-learn-card" key={service.title}>
              <span className="service-learn-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services-learn-cta">
          <div>
            <p className="services-learn-label">
              Consultation & Strategy
            </p>

            <h3>
              Have a project, system,
              <br />
              or idea worth exploring?
            </h3>

            <p>
              Start with a conversation about the problem, the audience,
              and what a useful outcome should actually look like.
            </p>
          </div>

          <a
            className="services-learn-button"
            href="https://cal.com/randazzo-designs/conversation"
            target="_blank"
            rel="noreferrer"
          >
            Book a Conversation
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesLearn