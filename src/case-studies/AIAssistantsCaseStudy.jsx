const designPrinciples = [
  {
    title: 'Specific Role',
    description:
      'Each assistant is designed around a defined purpose rather than attempting to behave like a general-purpose chatbot.',
  },
  {
    title: 'Relevant Context',
    description:
      'Domain knowledge, instructions, workflow logic, and interaction patterns shape how the assistant approaches the user’s task.',
  },
  {
    title: 'Structured Guidance',
    description:
      'Responses are designed to reduce cognitive friction by organizing information, clarifying choices, and making useful next actions easier to understand.',
  },
  {
    title: 'Human Direction',
    description:
      'The assistant can support reasoning, creation, analysis, or workflow execution while the user remains responsible for consequential decisions.',
  },
]

const assistants = [
  {
    name: 'D.AI.SY',
    descriptor: 'Cognitive Accessibility & Agency Companion',
    accent: 'green',
    lineage:
      'The original D.AI.SY assistant experience preceded and informed the later D.AI.SY agent and platform.',
    designedTo:
      'Help people move from confusion toward clarity, action, confidence, and greater independence by translating cognitive, communication, emotional, and digital barriers into understandable structure and manageable next steps.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Breaks overwhelm, confusion, decision paralysis, and under-structured problems into clearer pathways and small, meaningful actions.',
      },
      {
        label: 'Accessibility',
        text: 'Uses plain language, step-by-step structure, visual thinking tools, simpler versions, and concrete next actions to make information easier to process.',
      },
      {
        label: 'Agency',
        text: 'Uses micro-wins, reflection, and user-directed choices to strengthen the person’s own judgment rather than encouraging dependence on the assistant.',
      },
    ],
    humanControl:
      'D.AI.SY can help identify barriers, translate complexity, organize thinking, and surface a doable next step. The person chooses what matters, what feels appropriate, and what action to take.',
    prompt:
      'I have too many things competing for my attention and I can’t figure out where to start. Help me understand what is blocking me and find one manageable next step.',
    href: 'https://chatgpt.com/g/g-6a2a163a6ef88191a067d5ecfa927b73-daisy-v0-2',
    cta: 'Open D.AI.SY',
  },
  {
    name: 'Creative Systems Assistant',
    descriptor: 'AI Design Collaborator',
    accent: 'blue',
    designedTo:
      'Support branding, UX/UI, web design, visual communication, marketing, and creative production through structured design reasoning grounded in hierarchy, cognitive load, accessibility, typography, color, and brand systems.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Structures complex design decisions into focused questions, useful options, hierarchy, and rationale instead of presenting an unfiltered stream of ideas.',
      },
      {
        label: 'Accessibility',
        text: 'Builds accessibility considerations such as contrast, readability, cognitive load, predictable interaction, and information hierarchy into design critique and recommendations.',
      },
      {
        label: 'Productivity',
        text: 'Supports briefs, wireframes, UX flows, Canva-ready instructions, copy, QA, asset organization, and step-by-step production guidance.',
      },
      {
        label: 'Agency',
        text: 'Explains why a recommendation is being made so the designer can evaluate it, challenge it, and retain creative direction.',
      },
    ],
    humanControl:
      'The assistant can critique, structure, recommend, explain, and help execute design work. The designer determines the audience, strategy, creative direction, brand decisions, and final output.',
    prompt:
      'Review this homepage hierarchy and tell me what you would change to improve clarity, accessibility, and conversion—and explain why.',
    href: 'https://chatgpt.com/g/g-691fb42b3aa88191ba5291ce59554971-creative-systems-assistant',
    cta: 'Explore Creative Systems',
  },
  {
    name: 'Studio Forge AI',
    descriptor: 'Creative Systems Architect',
    accent: 'purple',
    designedTo:
      'Help users design sustainable creative infrastructure across game systems, live production, identity, creative strategy, and complex workflows instead of optimizing only for isolated outputs.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Separates complex systems into understandable layers, identifies structural bottlenecks, maintains parallel concept tracks, and preserves architectural continuity.',
      },
      {
        label: 'Productivity',
        text: 'Reduces repeated decisions through modular structures, milestone locking, workflow optimization, version discipline, and clearer separation between ideation and execution.',
      },
      {
        label: 'Agency',
        text: 'Prioritizes development of user skill and autonomy while treating shipping as secondary to building durable systems the user can understand and direct.',
      },
    ],
    humanControl:
      'Studio Forge can model systems, expose bottlenecks, compare architectures, and recommend structural improvements. The creator determines the goals, constraints, tradeoffs, and final creative or technical direction.',
    prompt:
      'Help me turn my live production workflow into a modular system. Identify the major layers, repeated decisions, likely bottlenecks, and what should be standardized first.',
    href: 'https://chatgpt.com/g/g-692b7fb82d108191a807121b8c8793b0-studio-forge-ai',
    cta: 'Enter Studio Forge',
  },
  {
    name: 'R&D Assistant',
    descriptor: 'R&D, Funding & Project Architect',
    accent: 'teal',
    designedTo:
      'Support complex R&D, grant funding, project planning, financial modeling, and commercialization through structured, compliance-aware workflows from early scoping through submission preparation.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Turns dense funding requirements, budgets, milestones, dependencies, eligibility questions, and proposal components into structured planning and review workflows.',
      },
      {
        label: 'Productivity',
        text: 'Supports eligibility checks, proposal scaffolds, work breakdown structures, budgets, risk matrices, financial models, redlines, and submission-oriented drafts.',
      },
      {
        label: 'Agency',
        text: 'Flags assumptions, unrealistic scopes, compliance concerns, and funding-rule conflicts so the user can make informed decisions rather than receiving unqualified agreement.',
      },
    ],
    humanControl:
      'The assistant can organize requirements, model scenarios, flag risk, and develop compliant drafts. The applicant or project team verifies requirements, approves major components, validates assumptions, and owns the final submission.',
    prompt:
      'Help me evaluate whether this project is a realistic fit for an SBIR Phase I proposal. Start with eligibility, major assumptions, likely compliance risks, and the information you still need from me.',
    href: 'https://chatgpt.com/g/g-6927cc5876c48191b35fa49b370b5a78-r-d-assistant',
    cta: 'Explore R&D Assistant',
  },
  {
    name: 'FrontDeskIQ',
    descriptor: 'Operational Intelligence for Front Desk Professionals',
    accent: 'orange',
    designedTo:
      'Help front desk agents, managers on duty, and managers handle high-pressure hospitality situations with clearer decisions, stronger escalation discipline, revenue awareness, and consistent documentation.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Compresses stressful operational situations into short priorities, actionable bullets, usable scripts, and clear escalation levels instead of lengthy explanations.',
      },
      {
        label: 'Productivity',
        text: 'Supports rapid handling of guest conflict, walk situations, rate pressure, night-audit discrepancies, OTA issues, documentation, and operational follow-up.',
      },
      {
        label: 'Agency',
        text: 'Reinforces role authority and escalation judgment while distinguishing what can be handled at the desk from what should move to a manager or higher-risk response.',
      },
    ],
    humanControl:
      'FrontDeskIQ can organize the situation, provide scripts, surface operational risk, and recommend an escalation level. The employee acts within property policy and their actual authority, with managers retaining higher-level decisions.',
    prompt:
      'I’m the MOD. We are oversold, it’s late, and I need to decide who can be walked with the least disruption. Give me the immediate priorities, a guest script, and the escalation level.',
    href: 'https://chatgpt.com/g/g-69a3addd7e348191a6db434ec4911ac7-frontdeskiq',
    cta: 'Open FrontDeskIQ',
  },
  {
    name: 'PressLab',
    descriptor: 'Newsroom Analysis & Verification Assistant',
    accent: 'red',
    designedTo:
      'Help journalists, students, digital content professionals, and researchers turn public documents and datasets into structured summaries while preserving source integrity, uncertainty, verification discipline, and editorial review.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Organizes source material through a consistent 5Ws + Outcome structure and separates factual summary, editorial QA, ambiguities, and verification needs.',
      },
      {
        label: 'Productivity',
        text: 'Accelerates document review, AP Style checking, inconsistency detection, dataset analysis, follow-up planning, and verification preparation.',
      },
      {
        label: 'Agency',
        text: 'Labels missing or unconfirmed information rather than filling gaps, helping the journalist decide what requires verification before publication.',
      },
    ],
    humanControl:
      'PressLab can summarize, flag contradictions, review style, identify uncertainty, and suggest verification paths. A human editor or journalist verifies the reporting, exercises editorial judgment, and decides what is publishable.',
    prompt:
      'Analyze this public document using 5Ws + Outcome. Separate confirmed facts from missing or ambiguous information, flag anything that needs verification, and then give me an AP Style review.',
    href: 'https://chatgpt.com/g/g-6907bd0983c08191a400870d85ac9832-presslab',
    cta: 'Explore PressLab',
  },
  {
    name: 'SkyLens AI',
    descriptor: 'Atmospheric Literacy Assistant',
    accent: 'sky',
    designedTo:
      'Teach structured sky observation, cloud classification, storm morphology, and atmospheric optics while keeping observation separate from inference and maintaining a strict boundary against forecasting.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Teaches users to observe visible evidence first, classify structure second, and interpret only when the available visual information supports it.',
      },
      {
        label: 'Accessibility',
        text: 'Adapts explanation depth for general audiences, spotters, broadcast contexts, and classroom learning while using calm language and constructive correction.',
      },
      {
        label: 'Agency',
        text: 'Builds pattern-recognition and observational skill instead of positioning the assistant as an authority that predicts what the atmosphere will do next.',
      },
    ],
    humanControl:
      'SkyLens can describe visible structure, explain atmospheric processes, classify when evidence is sufficient, and communicate uncertainty. The user remains responsible for interpretation and relies on official weather sources for forecasts, warnings, and safety decisions.',
    prompt:
      'Look at this sky image with me. Start by describing only what is visibly observable, then explain what structures it may be consistent with and clearly separate observation from inference.',
    href: 'https://chatgpt.com/g/g-6907ca47df8c819180f744c6a65c3f14-skylens-ai',
    cta: 'Explore SkyLens',
  },
  {
    name: 'Design Art Studio',
    descriptor: 'Visual Design & Commercial Art Experience',
    accent: 'pink',
    designedTo:
      'Support the path from artwork concept to commercially usable product through creative development, prompt construction, revision, quality control, collections, print preparation, listings, SEO, pricing, mockups, bundles, and cross-selling.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Organizes the many decisions between an initial art idea and a finished product into a practical workflow covering subject, customer, collection, format, visual direction, production, and publishing.',
      },
      {
        label: 'Productivity',
        text: 'Connects artwork creation with print readiness, listing development, product positioning, pricing, SEO, mockups, collections, and sales-oriented reuse of finished work.',
      },
      {
        label: 'Agency',
        text: 'Treats the user as creative director, offering commercial judgment, critique, comparisons, and production support without overriding approved creative decisions.',
      },
    ],
    humanControl:
      'The assistant can recommend, critique, organize, prepare prompts, evaluate commercial readiness, and develop publishing materials. The artist remains creative director and approves the artwork, revisions, products, pricing, and publication decisions.',
    prompt:
      'I want to turn this artwork into a sellable wall-art product. Evaluate its commercial strengths, print-readiness, likely customer, listing angle, and the most useful revisions before I publish it.',
    href: 'https://chatgpt.com/g/g-6a6cb613c79c8191a07bf88dbb0fdc6b-randazzo-designs-art-studio-assistant',
    cta: 'Enter Design Art Studio',
  },
  {
    name: 'The Uncanny Art Director',
    descriptor: 'Concept Art & Visual Worldbuilding Director',
    accent: 'uncanny',
    designedTo:
      'Develop cinematic concept-art direction and narrative-rich prompts for uncanny, liminal, existential, and system-horror imagery that suggests a larger world beyond the frame.',
    benefits: [
      {
        label: 'Cognitive Friction',
        text: 'Turns an abstract visual idea into a structured concept by defining the mystery, psychological trigger, narrative mode, visual hierarchy, environmental evidence, and cinematic treatment.',
      },
      {
        label: 'Productivity',
        text: 'Provides focused art direction and production-ready prompt development while filtering generic horror devices, meaningless visual noise, and complexity without narrative purpose.',
      },
      {
        label: 'Agency',
        text: 'Functions as an art director for concept development rather than an autonomous image-maker, leaving selection, interpretation, generation, revision, and final creative authorship with the user.',
      },
    ],
    humanControl:
      'The assistant can develop the mythology, visual logic, composition, cinematic language, and prompt. The artist decides what the work means, which concept to pursue, how it is generated or produced, and what becomes final.',
    prompt:
      'Develop a cinematic concept for an abandoned data center that appears beautiful at first, strange on the second look, and disturbing only after careful observation. Make the environment imply that the infrastructure has developed a private ritual.',
    href: 'https://chatgpt.com/g/g-6a344e9d64b88191bdfb0dddd8b7cf57-uncanny-content-director',
    cta: 'Enter the Uncanny',
  },
]

const demonstratedCapabilities = [
  {
    title: 'Specialized Interaction Design',
    description:
      'Each experience is shaped around a defined role, audience, vocabulary, workflow, and job to be done rather than relying on one generic conversational pattern.',
  },
  {
    title: 'Cognitive Accessibility',
    description:
      'Structured responses, progressive disclosure, plain language, prioritization, and role-appropriate guidance help reduce unnecessary cognitive friction where the use case calls for it.',
  },
  {
    title: 'Guardrail Architecture',
    description:
      'The assistants use explicit boundaries, uncertainty handling, escalation logic, verification requirements, or scope controls appropriate to their domain.',
  },
  {
    title: 'Human-Directed AI',
    description:
      'Across the collection, AI is positioned as a collaborator, analyst, guide, or production aid while authorship, responsibility, judgment, and consequential decisions remain with people.',
  },
]

function AIAssistantsCaseStudy() {
  return (
    <main className="case-study case-study--ai-assistants">
      <section className="ai-assistants-hero">
        <div className="case-study-shell">
          <a className="case-study-back-link" href="/#selected-work">
            ← Selected Work
          </a>

          <div className="ai-assistants-hero-content">
            <p className="case-study-eyebrow">
              AI Experience Design · Case Study
            </p>

            <h1>
              AI Assistants
              <span>&amp; Specialized GPT Experiences</span>
            </h1>

            <p className="ai-assistants-hero-lede">
              A collection of purpose-built conversational experiences designed
              around specific roles, audiences, workflows, knowledge domains,
              and user needs.
            </p>

            <p className="ai-assistants-hero-principle">
              Specialization turns conversation into a designed experience.
            </p>
          </div>

          <div
            className="ai-assistants-meta"
            aria-label="Case study information"
          >
            <div>
              <span>Role</span>
              <strong>AI Experience Design · UX · System Design</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Specialized Conversational Experiences</strong>
            </div>

            <div>
              <span>Platform</span>
              <strong>ChatGPT</strong>
            </div>
          </div>

          <div className="ai-assistants-hero-actions">
            <a
              className="ai-assistants-button ai-assistants-button--primary"
              href="#assistant-profiles"
            >
              Explore the Assistants
              <span aria-hidden="true"> →</span>
            </a>

            <a
              className="ai-assistants-button ai-assistants-button--secondary"
              href="#specialization"
            >
              View Case Study
              <span aria-hidden="true"> ↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="ai-assistants-problem" id="specialization">
        <div className="case-study-shell">
          <div className="ai-assistants-problem-heading">
            <p className="case-study-eyebrow">Why Specialization Matters</p>

            <h2>
              A useful AI assistant needs more than a different name and
              personality.
            </h2>
          </div>

          <div className="ai-assistants-problem-copy">
            <p>
              Different users bring different goals, terminology, constraints,
              risks, and expectations to an AI interaction. A design
              collaborator should not behave like an operations assistant, and
              a newsroom analysis experience should not behave like a creative
              art director.
            </p>

            <p>
              The assistant collection explores how conversational AI can be
              intentionally shaped around a particular job to be done. Each
              experience uses its role, domain context, guidance, and
              boundaries to create a more focused interaction.
            </p>
          </div>

          <div className="ai-assistants-problem-statement">
            <p>
              The interface may begin with conversation. The experience is
              defined by the system behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-assistants-design-model">
        <div className="case-study-shell">
          <div className="ai-assistants-design-heading">
            <p className="case-study-eyebrow">Designed, Not Generic</p>

            <h2>
              Each assistant is built around a specific relationship between
              the user and the system.
            </h2>

            <p>
              Structured instructions, domain context, workflow logic, user
              guidance, and guardrails establish how each experience should
              support its intended role.
            </p>
          </div>

          <div
            className="ai-assistants-principles-grid"
            aria-label="Assistant design principles"
          >
            {designPrinciples.map((principle) => (
              <article
                className="ai-assistants-principle-card"
                key={principle.title}
              >
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>

          <div
            className="ai-assistants-interaction-model"
            aria-label="Shared assistant interaction model"
          >
            <div>
              <span>User Need</span>
              <strong>Goal + Context</strong>
            </div>

            <span aria-hidden="true">→</span>

            <div>
              <span>Specialized Assistant</span>
              <strong>Role + Domain + Guidance</strong>
            </div>

            <span aria-hidden="true">→</span>

            <div>
              <span>Structured Support</span>
              <strong>Reason · Clarify · Create</strong>
            </div>

            <span aria-hidden="true">→</span>

            <div className="ai-assistants-interaction-human">
              <span>Human</span>
              <strong>Review · Decide · Direct</strong>
            </div>
          </div>

          <div className="ai-assistants-design-principle">
            <p>AI assists. Humans decide.</p>
          </div>
        </div>
      </section>

      <section
        className="ai-assistants-profiles"
        id="assistant-profiles"
      >
        <div className="case-study-shell">
          <div className="ai-assistants-profiles-heading">
            <p className="case-study-eyebrow">Specialized Experiences</p>

            <h2>
              Nine assistants.
              <span>Nine intentionally different jobs to do.</span>
            </h2>

            <p>
              The shared interface is conversational. The role, knowledge,
              interaction logic, boundaries, and intended human benefit change
              with each experience.
            </p>
          </div>

          <div className="ai-assistants-profile-list">
            {assistants.map((assistant) => (
              <article
                className={`ai-assistants-profile ai-assistants-profile--${assistant.accent}`}
                key={assistant.name}
              >
                <header className="ai-assistants-profile-header">
                  <div>
                    <p className="ai-assistants-profile-descriptor">
                      {assistant.descriptor}
                    </p>

                    <h3>{assistant.name}</h3>
                  </div>
                </header>

                {assistant.lineage && (
                  <div className="ai-assistants-profile-lineage">
                    <span>Lineage</span>
                    <p>{assistant.lineage}</p>
                  </div>
                )}

                <div className="ai-assistants-profile-purpose">
                  <span>Designed to</span>
                  <p>{assistant.designedTo}</p>
                </div>

                <div className="ai-assistants-profile-benefits">
                  <p className="ai-assistants-profile-label">
                    Human Benefit
                  </p>

                  <div className="ai-assistants-benefit-grid">
                    {assistant.benefits.map((benefit) => (
                      <div
                        className="ai-assistants-benefit"
                        key={benefit.label}
                      >
                        <span>{benefit.label}</span>
                        <p>{benefit.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ai-assistants-profile-agency">
                  <p className="ai-assistants-profile-label">
                    AI Assists. Humans Decide.
                  </p>

                  <p>{assistant.humanControl}</p>
                </div>

                <div className="ai-assistants-profile-prompt">
                  <p className="ai-assistants-profile-label">
                    Try asking
                  </p>

                  <blockquote>“{assistant.prompt}”</blockquote>
                </div>

                <div className="ai-assistants-profile-action">
                  <a
                    href={assistant.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {assistant.cta}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="ai-assistants-profiles-close">
            <p className="case-study-eyebrow">The Shared Principle</p>

            <h2>
              Specialization should make the human more capable—not make the
              human disappear from the process.
            </h2>

            <p>
              Across cognition, design, research, operations, learning, and
              creative production, the assistant is structured around a
              particular kind of support. Judgment, authorship, responsibility,
              and consequential decisions remain human-directed.
            </p>
          </div>
        </div>
      </section>

      <section className="ai-assistants-outcome">
        <div className="case-study-shell">
          <div className="ai-assistants-outcome-heading">
            <p className="case-study-eyebrow">Outcome</p>

            <h2>
              The collection demonstrates a repeatable approach to
              human-centered AI experience design.
            </h2>

            <p>
              The assistants address very different domains, but they share a
              common design philosophy: understand the user&apos;s context,
              reduce unnecessary friction, provide structured support, make
              boundaries visible, and preserve human judgment.
            </p>
          </div>

          <div
            className="ai-assistants-outcome-grid"
            aria-label="Demonstrated AI experience design capabilities"
          >
            {demonstratedCapabilities.map((capability) => (
              <article
                className="ai-assistants-outcome-card"
                key={capability.title}
              >
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>

          <div className="ai-assistants-outcome-principle">
            <p>
              Better AI experiences are not defined only by what the model can
              do. They are defined by how clearly the system helps a person
              think, create, learn, decide, and act.
            </p>
          </div>

          <div className="ai-assistants-outcome-actions">
            <a
              className="ai-assistants-outcome-primary"
              href="/#ai-experiences"
            >
              Explore the AI Experiences
              <span aria-hidden="true"> →</span>
            </a>

            <a
              className="ai-assistants-outcome-secondary"
              href="/#services"
            >
              Explore AI Services
              <span aria-hidden="true"> →</span>
            </a>

            <a
              className="ai-assistants-outcome-secondary"
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

export default AIAssistantsCaseStudy