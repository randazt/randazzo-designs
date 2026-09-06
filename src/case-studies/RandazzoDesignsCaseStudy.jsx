const systemLayers = [
  {
    title: 'Business Architecture',
    description:
      'Services, qualification, engagement logic, pricing structure, client pathways, and operating decisions were developed alongside the public-facing experience.',
  },
  {
    title: 'Information Architecture',
    description:
      'The site organizes services, working technology, AI experiences, original creative work, case studies, process, founder credibility, and project qualification into a connected system.',
  },
  {
    title: 'Experience Design',
    description:
      'Responsive layouts, visual hierarchy, interaction patterns, accessibility-conscious decisions, and clear pathways help users understand both the work and how to engage.',
  },
  {
    title: 'Working Technology',
    description:
      'The experience is implemented as a functioning React application with reusable components, routed case studies, production builds, cloud hosting, and ongoing technical validation.',
  },
]

const workflow = [
  {
    stage: 'Understand',
    description:
      'Define the audience, business need, communication problem, constraints, and evidence before deciding what the interface should say or do.',
  },
  {
    stage: 'Structure',
    description:
      'Translate those requirements into information architecture, service relationships, content hierarchy, user paths, and reusable design patterns.',
  },
  {
    stage: 'Design',
    description:
      'Develop the visual hierarchy, responsive behavior, content presentation, interaction patterns, and accessible communication system.',
  },
  {
    stage: 'Augment',
    description:
      'Use AI-assisted research, critique, development support, documentation, and production workflows where they increase useful capability.',
  },
  {
    stage: 'Validate',
    description:
      'Review the implementation through build validation, linting, responsive inspection, accessibility-conscious QA, content review, and production checks.',
  },
  {
    stage: 'Enable',
    description:
      'Turn the finished work into a maintainable system that can support future services, case studies, tools, evidence, and client engagement.',
  },
]

const evidence = [
  {
    title: 'Responsive Web System',
    description:
      'A production React and Vite website with reusable sections, responsive behavior, consistent visual patterns, and a growing routed case-study system.',
  },
  {
    title: 'AI Experience Ecosystem',
    description:
      'Purpose-built AI experiences are presented as working examples of specialized conversational design across cognition, design, research, operations, learning, and creative production.',
  },
  {
    title: 'Case Study Architecture',
    description:
      'Project evidence is translated into dedicated case studies that explain the challenge, design reasoning, implementation, boundaries, and demonstrated capabilities behind the work.',
  },
  {
    title: 'Operational Design',
    description:
      'Client qualification, proposal and scope logic, service fulfillment, capacity considerations, and commercial guardrails are being developed as part of the same practice system.',
  },
  {
    title: 'Production QA',
    description:
      'The site is repeatedly validated through production builds, linting, responsive review, accessibility-conscious inspection, and version-controlled checkpoints.',
  },
  {
    title: 'Deployment Infrastructure',
    description:
      'The public experience uses production hosting while maintaining clear separation between the main practice site and protected product or competition environments.',
  },
]

const humanAiRoles = [
  {
    label: 'AI can assist with',
    items: [
      'Research and synthesis',
      'Content and information structuring',
      'Design critique and alternatives',
      'Development support',
      'Documentation',
      'QA preparation',
    ],
  },
  {
    label: 'Humans remain responsible for',
    items: [
      'Business direction',
      'Creative judgment',
      'Brand decisions',
      'Evidence and claim approval',
      'Accessibility decisions',
      'Production approval',
    ],
  },
]

function RandazzoDesignsCaseStudy() {
  return (
    <main className="case-study case-study--randazzo">
      <section className="randazzo-case-hero">
        <div className="case-study-shell">
          <a className="case-study-back-link" href="/#selected-work">
            ← Selected Work
          </a>

          <div className="randazzo-case-hero-content">
            <p className="case-study-eyebrow">
              Web &amp; Digital Systems · Case Study
            </p>

            <h1>
              Randazzo Designs
              <span>A practice designed as a working system.</span>
            </h1>

            <p className="randazzo-case-hero-lede">
              A responsive digital ecosystem connecting professional services,
              human-centered AI, creative technology, original work, business
              architecture, and evidence-backed case studies.
            </p>

            <p className="randazzo-case-hero-principle">
              The practice uses what it builds.
            </p>
          </div>

          <div
            className="randazzo-case-meta"
            aria-label="Case study information"
          >
            <div>
              <span>Role</span>
              <strong>
                Strategy · UX/UI · Information Design · Development
              </strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Digital Practice Ecosystem</strong>
            </div>

            <div>
              <span>Build</span>
              <strong>React · Vite · Firebase</strong>
            </div>
          </div>

          <div className="randazzo-case-actions">
            <a
              className="randazzo-case-button randazzo-case-button--primary"
              href="#system"
            >
              View the System
              <span aria-hidden="true"> ↓</span>
            </a>

            <a
              className="randazzo-case-button randazzo-case-button--secondary"
              href="/#services"
            >
              Explore Services
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="randazzo-case-challenge">
        <div className="case-study-shell">
          <div className="randazzo-case-challenge-heading">
            <p className="case-study-eyebrow">The Challenge</p>

            <h2>
              The website needed to explain a multidisciplinary practice
              without turning complexity into confusion.
            </h2>
          </div>

          <div className="randazzo-case-challenge-copy">
            <p>
              Randazzo Designs spans design, digital systems, AI-assisted
              workflows, creative technology, education, original intellectual
              property, and implementation. Presenting those capabilities as a
              disconnected list would make the practice harder to understand.
            </p>

            <p>
              The challenge was therefore larger than building a portfolio
              site. The experience needed to establish relationships between
              services, working technology, proof of capability, process,
              founder credibility, and clear paths toward engagement.
            </p>
          </div>

          <div className="randazzo-case-challenge-statement">
            <p>
              The site had to function as communication, evidence, and
              infrastructure at the same time.
            </p>
          </div>
        </div>
      </section>

      <section className="randazzo-case-system" id="system">
        <div className="case-study-shell">
          <div className="randazzo-case-system-heading">
            <p className="case-study-eyebrow">Designed as a System</p>

            <h2>
              The interface is only one layer of the work.
            </h2>

            <p>
              The public experience was developed alongside the business,
              content, technology, and operating structures it needs to
              represent.
            </p>
          </div>

          <div
            className="randazzo-case-system-grid"
            aria-label="Randazzo Designs system layers"
          >
            {systemLayers.map((layer) => (
              <article
                className="randazzo-case-system-card"
                key={layer.title}
              >
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </article>
            ))}
          </div>

          <div className="randazzo-case-system-principle">
            <span>System Principle</span>
            <p>
              Strategy, content, interface, technology, and operations should
              reinforce one another rather than behave like separate projects.
            </p>
          </div>
        </div>
      </section>

      <section className="randazzo-case-method">
        <div className="case-study-shell">
          <div className="randazzo-case-method-heading">
            <p className="case-study-eyebrow">Working Method</p>

            <h2>
              Understand → Structure → Design → Augment → Validate → Enable
            </h2>

            <p>
              The same method presented as part of the practice is used to
              develop the practice itself.
            </p>
          </div>

          <div
            className="randazzo-case-method-grid"
            aria-label="Randazzo Designs working method"
          >
            {workflow.map((step) => (
              <article
                className="randazzo-case-method-card"
                key={step.stage}
              >
                <span>{step.stage}</span>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="randazzo-case-ai">
        <div className="case-study-shell">
          <div className="randazzo-case-ai-heading">
            <p className="case-study-eyebrow">Human + AI Workflow</p>

            <h2>
              AI is part of the production system — not the decision authority.
            </h2>

            <p>
              AI-assisted tools can support research, structure, critique,
              development, documentation, and evaluation. Their role is to
              extend useful human capability while keeping direction and
              accountability visible.
            </p>
          </div>

          <div
            className="randazzo-case-ai-grid"
            aria-label="Human and AI responsibilities"
          >
            {humanAiRoles.map((role) => (
              <article
                className="randazzo-case-ai-card"
                key={role.label}
              >
                <h3>{role.label}</h3>

                <ul>
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="randazzo-case-ai-principle">
            <p>AI Assists. Humans Decide.</p>
          </div>
        </div>
      </section>

      <section className="randazzo-case-evidence">
        <div className="case-study-shell">
          <div className="randazzo-case-evidence-heading">
            <p className="case-study-eyebrow">The System Is the Evidence</p>

            <h2>
              The site demonstrates the same kinds of capabilities the
              practice offers.
            </h2>

            <p>
              Rather than treating the website only as promotional material,
              the project uses implementation itself as evidence of design,
              systems thinking, AI-assisted workflow development, and
              production discipline.
            </p>
          </div>

          <div
            className="randazzo-case-evidence-grid"
            aria-label="Demonstrated project evidence"
          >
            {evidence.map((item) => (
              <article
                className="randazzo-case-evidence-card"
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="randazzo-case-evidence-statement">
            <p>
              Built. Applied. Operational.
            </p>
          </div>
        </div>
      </section>

      <section className="randazzo-case-outcome">
        <div className="case-study-shell">
          <div className="randazzo-case-outcome-content">
            <p className="case-study-eyebrow">Outcome</p>

            <h2>
              A portfolio became a living demonstration of the practice behind
              it.
            </h2>

            <p>
              Randazzo Designs now has a digital foundation capable of
              connecting services, working AI experiences, original creative
              work, project evidence, qualification pathways, and future
              case studies within one coherent system.
            </p>

            <p>
              The result is not treated as finished infrastructure. The site
              can continue evolving as the practice gains new work, evidence,
              tools, services, and operating maturity.
            </p>
          </div>

          <div className="randazzo-case-outcome-principle">
            <span>Client Outcome</span>
            <p>
              Leave more capable — not more dependent.
            </p>
          </div>

          <div className="randazzo-case-outcome-actions">
            <a
              className="randazzo-case-outcome-primary"
              href="/#services"
            >
              Explore Services
              <span aria-hidden="true"> →</span>
            </a>

            <a
              className="randazzo-case-outcome-secondary"
              href="/#selected-work"
            >
              Back to Selected Work
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RandazzoDesignsCaseStudy