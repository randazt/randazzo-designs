import daisyInterface from '../assets/daisy-interface.webp'

function DaisyCaseStudy() {
  const mechanisms = [
    {
      title: 'Cognition-first clarification',
      description:
        'Before normal planning or routing, D.AI.SY can identify targeted cognitive-bottleneck situations and clarify where the person is actually getting stuck.',
      principle: 'Clarify before automating.',
    },
    {
      title: 'User-owned strategy memory',
      description:
        'D.AI.SY can propose remembering a strategy that works for the person, but persistence remains explicitly authorized by the user.',
      principle: 'Memory is permission, not assumption.',
    },
    {
      title: 'Adaptive guidance',
      description:
        'Approved strategies can influence how later assistance is structured, allowing the interaction to adapt to the human rather than continually asking the human to adapt to the AI.',
      principle: 'Personalization follows human direction.',
    },
    {
      title: 'Bounded agentic execution',
      description:
        'Agentic behavior occurs downstream of human direction and authorization, with observable execution results and control returning to the person.',
      principle: 'Action remains accountable.',
    },
  ]

  const evidence = [
    {
      value: '236',
      label: 'Passing backend tests',
      detail:
        'Regression coverage included conversation, routing, clarification, memory, Firestore persistence, authorization, and API behavior.',
    },
    {
      value: 'Cloud Run',
      label: 'Production deployment',
      detail:
        'The React/Vite frontend and FastAPI backend were deployed as public Google Cloud Run services.',
    },
    {
      value: 'Firestore',
      label: 'Persistent strategy memory',
      detail:
        'Approved user strategies persist through Firestore and can support later adaptive guidance.',
    },
    {
      value: 'Production',
      label: 'Security hardening',
      detail:
        'The release included CORS verification, secret and repository hygiene checks, and removal of raw chat-request logging.',
    },
  ]

  const lessons = [
    {
      title: 'Progressive disclosure needs to go deeper.',
      description:
        'Response density remains an important UX consideration for a product designed around cognitive accessibility and clarity.',
    },
    {
      title: 'Cognition routing needs greater flexibility.',
      description:
        'Natural formulations do not always reach the cognition-first experience as reliably as intended, creating a clear target for continued refinement.',
    },
    {
      title: 'Memory interactions need greater determinism.',
      description:
        'Permission-based memory is implemented, but the interaction behavior can become more consistent across different conversational conditions.',
    },
  ]

  return (
    <article className="case-study case-study--daisy">
      <header className="case-study-hero">
        <div className="case-study-hero-inner">
          <p className="section-eyebrow">
            Human-Centered AI · Case Study
          </p>

          <h1>D.AI.SY — Daily AI Systems</h1>

          <p className="case-study-lede">
            Designing an agentic AI system that helps people move from
            cognitive friction toward clarity, useful workflows, and
            explicitly authorized action.
          </p>

          <p className="case-study-principle">
            AI Assists. Humans Decide.
          </p>

          <dl className="case-study-meta">
            <div>
              <dt>Role</dt>
              <dd>Founder · Product Lead · AI Systems Developer</dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>Human-Centered AI · UX/UI · Agentic Systems</dd>
            </div>

            <div>
              <dt>Platform</dt>
              <dd>Web · Google Cloud</dd>
            </div>
          </dl>

          <a
            className="case-study-primary-link"
            href="https://daisy.randazzodesignsai.com"
            target="_blank"
            rel="noreferrer"
          >
            Explore D.AI.SY
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </header>

      <section className="case-study-challenge">
        <div className="case-study-section-inner">
          <div className="case-study-section-heading">
            <p className="section-eyebrow">The Challenge</p>

            <h2>
              More AI autonomy should not mean less human agency.
            </h2>
          </div>

          <div className="case-study-challenge-content">
            <p className="case-study-challenge-lede">
              Agentic systems are often designed around a simple progression:
              the user asks, the AI decides, and the AI executes.
            </p>

            <p>
              D.AI.SY began from a different design question: how can AI help
              someone move through uncertainty and cognitive friction without
              taking decision authority away from them?
            </p>

            <p>
              That changed the role of the system. Instead of treating
              autonomous execution as the starting point, D.AI.SY was designed
              to clarify difficulty, establish human direction, adapt its
              assistance, propose a path forward, request authorization, and
              only then move into bounded action.
            </p>

            <div
              className="case-study-flow"
              aria-label="D.AI.SY interaction model"
            >
              <span>Human expresses difficulty</span>
              <span aria-hidden="true">→</span>
              <span>AI clarifies</span>
              <span aria-hidden="true">→</span>
              <span>Human establishes direction</span>
              <span aria-hidden="true">→</span>
              <span>AI adapts + proposes</span>
              <span aria-hidden="true">→</span>
              <span>Human authorizes</span>
              <span aria-hidden="true">→</span>
              <span>AI acts</span>
              <span aria-hidden="true">→</span>
              <span>Control returns to human</span>
            </div>

            <blockquote className="case-study-statement">
              <p>Autonomy happens downstream of human authority.</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="case-study-mechanisms">
        <div className="case-study-section-inner">
          <div className="case-study-mechanisms-heading">
            <div>
              <p className="section-eyebrow">Designed Into the System</p>

              <h2>Human agency became product behavior.</h2>
            </div>

            <p className="case-study-mechanisms-intro">
              The principle was not treated as a tagline. It shaped how
              D.AI.SY clarifies uncertainty, remembers useful strategies,
              adapts its guidance, and moves into agentic action.
            </p>
          </div>

          <div className="case-study-mechanisms-grid">
            {mechanisms.map((mechanism) => (
              <article
                className="case-study-mechanism-card"
                key={mechanism.title}
              >
                <h3>{mechanism.title}</h3>

                <p className="case-study-mechanism-description">
                  {mechanism.description}
                </p>

                <p className="case-study-mechanism-principle">
                  {mechanism.principle}
                </p>
              </article>
            ))}
          </div>

          <div className="case-study-authority-model">
            <p className="case-study-authority-label">
              Three distinct permissions
            </p>

            <div className="case-study-authority-grid">
              <div>
                <strong>Permission to store</strong>
                <p>Can this information persist?</p>
              </div>

              <div>
                <strong>Permission to use</strong>
                <p>Can it shape future assistance?</p>
              </div>

              <div>
                <strong>Permission to act</strong>
                <p>Can the system execute on the person&apos;s behalf?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-evidence">
        <div className="case-study-section-inner">
          <div className="case-study-evidence-heading">
            <p className="section-eyebrow">Built &amp; Validated</p>

            <h2>The design principles became working software.</h2>

            <p>
              D.AI.SY moved from product concept into a tested, documented,
              publicly deployed application during the hackathon development
              period.
            </p>
          </div>

          <div className="case-study-evidence-grid">
            {evidence.map((item) => (
              <article
                className="case-study-evidence-card"
                key={item.label}
              >
                <p className="case-study-evidence-value">
                  {item.value}
                </p>

                <h3>{item.label}</h3>

                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="case-study-architecture">
            <div className="case-study-architecture-heading">
              <p className="case-study-architecture-label">
                As-built architecture
              </p>

              <p>
                A deliberately focused stack supported the experience without
                adding technology simply for architectural complexity.
              </p>
            </div>

            <div
              className="case-study-architecture-flow"
              aria-label="D.AI.SY production architecture"
            >
              <span>Human</span>
              <span aria-hidden="true">↓</span>
              <span>React / Vite</span>
              <span aria-hidden="true">↓</span>
              <span>Google Cloud Run</span>
              <span aria-hidden="true">↓</span>
              <span>FastAPI</span>
              <span aria-hidden="true">↓</span>
              <span>Gemini 3.5 Flash-Lite + Google ADK</span>
              <span aria-hidden="true">↓</span>
              <span>Firestore</span>
            </div>

            <p className="case-study-architecture-note">
              Human authorization governs memory, adaptation, and
              consequential action across the system.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-product">
        <div className="case-study-section-inner">
          <div className="case-study-product-heading">
            <div>
              <p className="section-eyebrow">Product Experience</p>

              <h2>Designed around the person, not the prompt.</h2>
            </div>

            <p>
              The interface supports a progression from cognitive friction
              toward clarity, agency, useful workflows, and explicitly
              authorized action—keeping the person oriented as the system
              becomes more capable.
            </p>
          </div>

          <figure className="case-study-product-figure">
            <div className="case-study-product-frame">
              <img
                src={daisyInterface}
                alt="D.AI.SY interface showing the human-centered AI product experience"
              />
            </div>

            <figcaption>
              D.AI.SY production interface
              <span>
                Human-centered AI · Adaptive assistance · Authorized action
              </span>
            </figcaption>
          </figure>

          <div className="case-study-product-progression">
            <div>
              <strong>Cognitive Friction</strong>
            </div>

            <div>
              <strong>Clarity</strong>
            </div>

            <div>
              <strong>Agency</strong>
            </div>

            <div>
              <strong>Everyday Workflows</strong>
            </div>

            <div>
              <strong>Authorized Action</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-delivery">
        <div className="case-study-section-inner">
          <div className="case-study-delivery-heading">
            <p className="section-eyebrow">Delivery Decisions</p>

            <h2>Shipping required deciding what not to build.</h2>
          </div>

          <div className="case-study-delivery-layout">
            <div className="case-study-delivery-copy">
              <p>
                The hackathon introduced a fixed deadline and a growing list
                of possible improvements. The critical delivery question
                became simple: is this a product improvement, or is it a
                submission blocker?
              </p>

              <p>
                Features including additional agents, RAG expansion,
                unnecessary authentication work, additional frameworks, and
                late-stage interface redesign were deliberately kept outside
                the critical path.
              </p>

              <p>
                That scope discipline protected the core experience:
                authorized memory, adaptive guidance, bounded action,
                testing, production hardening, deployment, documentation,
                and demonstration.
              </p>
            </div>

            <div className="case-study-delivery-principle">
              <span>Delivery principle</span>
              <strong>
                Protect the experience that matters. Cut complexity that does
                not help it ship.
              </strong>
            </div>
          </div>

          <div className="case-study-lessons">
            <div className="case-study-lessons-heading">
              <p className="section-eyebrow">What We Learned</p>

              <h3>A shipped system creates better questions.</h3>
            </div>

            <div className="case-study-lessons-grid">
              {lessons.map((lesson) => (
                <article
                  className="case-study-lesson"
                  key={lesson.title}
                >
                  <h4>{lesson.title}</h4>
                  <p>{lesson.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-outcome">
        <div className="case-study-section-inner">
          <p className="section-eyebrow">Outcome</p>

          <h2>
            From product concept to a tested, publicly deployed agentic AI
            system.
          </h2>

          <p className="case-study-outcome-copy">
            The completed hackathon phase connected product vision,
            human-centered AI design, working software engineering, testing,
            cloud deployment, documentation, and disciplined delivery into
            one functioning release.
          </p>

          <p className="case-study-outcome-principle">
            AI Assists. Humans Decide.
          </p>

          <div className="case-study-outcome-actions">
            <a
              className="case-study-outcome-primary"
              href="https://daisy.randazzodesignsai.com"
              target="_blank"
              rel="noreferrer"
            >
              Explore D.AI.SY
              <span aria-hidden="true"> ↗</span>
            </a>

            <a
              className="case-study-outcome-secondary"
              href="/#selected-work"
            >
              Back to Selected Work
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

export default DaisyCaseStudy