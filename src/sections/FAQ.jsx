import { useState } from 'react'

const questions = [
  {
    question: 'What kinds of projects does Randazzo Designs take on?',
    answer:
      'Randazzo Designs works on websites and digital experiences, information and workflow challenges, practical AI systems, and AI learning and enablement. Each project starts with the problem, the people involved, and what needs to improve rather than forcing the work into a standard package.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Published prices are starting points. Final pricing depends on the size and complexity of the work, the level of customization, any outside services or travel required, and the amount of ongoing support involved. The scope, responsibilities, schedule, and pricing are confirmed before project work begins.',
  },
  {
    question: 'What happens after I book a conversation?',
    answer:
      'The first conversation is about understanding what is not working, what you want to improve, and any important goals or constraints. It also gives us a chance to determine whether Randazzo Designs is a good fit. If it makes sense to move forward, the next step is defining the work, deliverables, responsibilities, schedule, and project requirements.',
  },
  {
    question: 'Do you use AI in client work?',
    answer:
      'Sometimes, when it genuinely helps. AI is not treated as the answer to every problem. It may support research, organization, creative work, development, or repetitive tasks, but people remain responsible for important decisions and approving what moves forward.',
  },
  {
    question: 'How is accessibility handled?',
    answer:
      'Accessibility is considered throughout the design process rather than added at the end. If a project needs specific accessibility standards, testing, audits, or compliance requirements, those needs are identified and included in the project scope.',
  },
  {
    question: 'Will I be able to manage what you create?',
    answer:
      'That is part of the goal. Depending on the project, delivery can include documentation, guidance, handoff materials, or training so you understand what was created and how to work with it. The aim is to leave you more capable, not more dependent.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    )
  }

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
          {questions.map((item, index) => (
            <details
              className="faq-item"
              key={item.question}
              open={openIndex === index}
            >
              <summary
                onClick={(event) => {
                  event.preventDefault()
                  handleToggle(index)
                }}
              >
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  {openIndex === index ? '×' : '+'}
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