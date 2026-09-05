const questions = [
  {
    question: 'What kinds of projects does Randazzo Designs take on?',
    answer:
      'Randazzo Designs works across web and digital experience design, visual communication and information systems, AI advisory and custom AI experiences, and practical AI workforce enablement. Projects are shaped around the problem, audience, scope, and desired outcome rather than forced into a predefined package.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Published prices are starting points for defined scopes. Final pricing depends on factors such as complexity, customization, implementation requirements, participant scale, travel, third-party services, and ongoing support. Scope and pricing are established before project work begins.',
  },
  {
    question: 'What happens after I book a conversation?',
    answer:
      'The first conversation is used to understand the problem, context, goals, constraints, and whether Randazzo Designs is an appropriate fit. If there is a clear path forward, the next step is defining the scope, deliverables, responsibilities, and project requirements.',
  },
  {
    question: 'Do you use AI in client work?',
    answer:
      'AI may be used when it meaningfully supports the work, but it is not treated as the default solution to every problem. Randazzo Designs follows a human-directed approach: AI can assist research, organization, development, creative workflows, and appropriate automation while meaningful decisions and authorization remain human responsibilities.',
  },
  {
    question: 'How is accessibility handled?',
    answer:
      'Accessibility is treated as a design consideration throughout the work. When a project requires specific accessibility standards, audits, testing, or compliance requirements, those needs are identified and defined as part of the engagement.',
  },
  {
    question: 'Will I be able to manage what you create?',
    answer:
      'Client enablement is part of the working method. Appropriate documentation, handoff materials, guidance, or knowledge transfer are defined around the project so the client leaves with greater understanding and practical control rather than unnecessary dependence.',
  },
]

function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <header className="faq-heading">
          <p className="section-eyebrow">Common Questions</p>

          <h2>
            Clear answers
            <br />
            before we begin.
          </h2>

          <p>
            A few practical details about working with Randazzo Designs.
          </p>
        </header>

        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ