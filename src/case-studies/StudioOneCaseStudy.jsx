function StudioOneCaseStudy() {
  const workflowStages = [
    {
      title: 'Creative Direction',
      description:
        'The creator establishes intent, priorities, constraints, and the production goal.',
    },
    {
      title: 'Production Context',
      description:
        'Relevant project information and workflow state provide the system with persistent production context.',
    },
    {
      title: 'Agent Reasoning',
      description:
        'AI-assisted reasoning helps interpret production needs, organize information, and determine useful next steps.',
    },
    {
      title: 'Human Approval',
      description:
        'Consequential decisions remain visible to the creator rather than becoming invisible automated actions.',
    },
    {
      title: 'Production Action',
      description:
        'Approved work can move forward while the creator retains authority over the production process.',
    },
  ]

  const memoryFunctions = [
    {
      title: 'Preserve Context',
      description:
        'Production information can remain available across the workflow instead of forcing the creator to repeatedly reconstruct project context.',
    },
    {
      title: 'Support Continuity',
      description:
        'Persistent context helps connect decisions, workflow state, and production needs as work progresses.',
    },
    {
      title: 'Inform Reasoning',
      description:
        'The agent can reason with relevant production context rather than treating each interaction as an isolated request.',
    },
    {
      title: 'Reduce Coordination Friction',
      description:
        'Keeping important context connected reduces the cognitive burden of tracking production information across disconnected tools and conversations.',
    },
  ]

  const authorityFunctions = [
    {
      title: 'Creator Direction',
      description:
        'The creator defines the goal, establishes priorities, and provides the production context the system should work from.',
    },
    {
      title: 'Visible Recommendations',
      description:
        'AI-assisted reasoning is presented as support for the production process rather than hidden decision-making.',
    },
    {
      title: 'Explicit Approval',
      description:
        'Meaningful production decisions remain subject to creator review before they become authoritative workflow state.',
    },
    {
      title: 'Controlled Revision',
      description:
        'The creator can revise direction, reject proposed paths, and establish updated production decisions as the work evolves.',
    },
  ]

  const architectureLayers = [
    {
      title: 'Web Interface',
      detail:
        'A creator-facing web experience provides access to production stages, project context, recommendations, and decision controls.',
    },
    {
      title: 'Google Cloud / Cloud Run',
      detail:
        'The application is deployed through Google Cloud infrastructure, providing the hosted runtime for the production system.',
    },
    {
      title: 'Google ADK + Gemini',
      detail:
        'Google Agent Development Kit and Gemini support agent orchestration, production reasoning, and tool-driven workflow behavior.',
    },
    {
      title: 'Official mcp-clickhouse',
      detail:
        'The official ClickHouse MCP integration provides runtime access to persistent production memory.',
    },
    {
      title: 'ClickHouse',
      detail:
        'ClickHouse stores production memory that can be retrieved and used to inform later reasoning and continuity.',
    },
  ]

  const buildEvidence = [
    {
      label: 'Working Product',
      value: 'Hosted Web Application',
      detail:
        'STUDIO//ONE exists as a functioning creator-facing web application rather than a concept-only prototype.',
    },
    {
      label: 'Agent Runtime',
      value: 'Gemini + Google ADK',
      detail:
        'Agent reasoning and production workflow behavior are implemented using Gemini and Google Agent Development Kit.',
    },
    {
      label: 'Partner Integration',
      value: 'Official mcp-clickhouse',
      detail:
        'The system uses the official ClickHouse MCP integration at runtime to access persistent production memory.',
    },
    {
      label: 'Persistent Context',
      value: 'ClickHouse',
      detail:
        'Production memory can persist beyond a single interaction and inform subsequent system reasoning.',
    },
  ]

  const lessons = [
    {
      title: 'Production memory needs governance.',
      description:
        'Persistent context is most useful when the system distinguishes between information, recommendations, and creator-approved production decisions.',
    },
    {
      title: 'Agentic capability needs visible boundaries.',
      description:
        'A production system becomes easier to trust when creators can see where AI reasoning ends and human authority begins.',
    },
    {
      title: 'Continuity is a coordination problem.',
      description:
        'The value of memory is not simply remembering more information. It is preserving the right context so later production work remains connected.',
    },
  ]

  return (
    <main className="case-study case-study--studio-one">
      <section className="case-study-hero">
        <div className="case-study-shell">
          <a className="case-study-back-link" href="/#selected-work">
            ← Selected Work
          </a>

          <div className="case-study-hero-content">
            <p className="case-study-eyebrow">
              Agentic Creative Technology · Case Study
            </p>

            <h1>STUDIO//ONE</h1>

            <p className="case-study-lede">
              A production-coordination system designed for one-person creative
              teams, bringing structured workflows, persistent production
              context, AI-assisted reasoning, and human approval into a
              connected creative process.
            </p>

            <p className="case-study-principle">
              The studio remembers. The agent reasons. You direct.
            </p>
          </div>

          <div className="case-study-meta" aria-label="Project information">
            <div>
              <span>Role</span>
              <strong>Product Strategy · UX/UI · System Design</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Agentic Production Coordination</strong>
            </div>

            <div>
              <span>Platform</span>
              <strong>Web · Google Cloud</strong>
            </div>
          </div>

          <div className="case-study-hero-actions">
            <a
              className="case-study-button case-study-button--primary"
              href="https://studio.randazzodesignsai.com"
              target="_blank"
              rel="noreferrer"
            >
              Explore STUDIO//ONE
              <span aria-hidden="true"> ↗</span>
            </a>

            <a
              className="case-study-button case-study-button--secondary"
              href="#production-problem"
            >
              View Case Study
              <span aria-hidden="true"> ↓</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="case-study-section case-study-section--light"
        id="production-problem"
      >
        <div className="case-study-shell">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">The Production Problem</p>

            <h2>
              One-person creative teams still carry studio-sized coordination
              problems.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              Independent creators often perform many production roles at once.
              Creative decisions, project context, workflow state, assets, and
              next actions can become distributed across tools and
              conversations.
            </p>

            <p>
              STUDIO//ONE explores how an agentic production system can support
              that coordination without removing the creator from the
              decision-making process.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-section case-study-section--dark">
        <div className="case-study-shell">
          <div className="case-study-section-heading">
            <p className="case-study-eyebrow">The System Direction</p>

            <h2>
              Studio-scale coordination for the one-person creative team.
            </h2>
          </div>

          <div className="case-study-copy">
            <p>
              The system combines structured production workflows, persistent
              production context, AI-assisted reasoning, and explicit human
              approval.
            </p>

            <p>
              The goal is not to replace creative direction. It is to give the
              creator stronger coordination support while preserving authority
              over consequential decisions and actions.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-workflow">
        <div className="case-study-shell">
          <div className="studio-workflow-intro">
            <p className="case-study-eyebrow">Governed Workflow</p>

            <h2>
              The agent can help coordinate production.
              <br />
              The creator remains the director.
            </h2>

            <p>
              STUDIO//ONE separates assistance from authority. Production
              context can persist, AI can reason across that context, and the
              system can help organize what should happen next—but meaningful
              production decisions remain under human direction.
            </p>
          </div>

          <div
            className="studio-workflow-grid"
            aria-label="STUDIO//ONE governed production workflow"
          >
            {workflowStages.map((stage) => (
              <article className="studio-workflow-card" key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>

          <div className="studio-workflow-flow" aria-label="Workflow summary">
            <span>Direct</span>
            <span aria-hidden="true">→</span>
            <span>Remember</span>
            <span aria-hidden="true">→</span>
            <span>Reason</span>
            <span aria-hidden="true">→</span>
            <span>Approve</span>
            <span aria-hidden="true">→</span>
            <span>Act</span>
          </div>

          <div className="studio-workflow-principle">
            <p>Human authority is part of the workflow—not an afterthought.</p>
          </div>
        </div>
      </section>

      <section className="studio-memory">
        <div className="case-study-shell">
          <div className="studio-memory-heading">
            <p className="case-study-eyebrow">Production Memory</p>

            <h2>
              The studio should not forget the production every time the
              conversation changes.
            </h2>

            <p>
              STUDIO//ONE treats production context as part of the working
              system. Persistent context helps maintain continuity between what
              the creator has established, what the production currently needs,
              and what the agent reasons about next.
            </p>
          </div>

          <div
            className="studio-memory-grid"
            aria-label="Production memory functions"
          >
            {memoryFunctions.map((memoryFunction) => (
              <article
                className="studio-memory-card"
                key={memoryFunction.title}
              >
                <h3>{memoryFunction.title}</h3>
                <p>{memoryFunction.description}</p>
              </article>
            ))}
          </div>

          <div className="studio-memory-model">
            <div>
              <span>Creator</span>
              <strong>Intent + Decisions</strong>
            </div>

            <span className="studio-memory-arrow" aria-hidden="true">
              →
            </span>

            <div>
              <span>Production Memory</span>
              <strong>Context + Workflow State</strong>
            </div>

            <span className="studio-memory-arrow" aria-hidden="true">
              →
            </span>

            <div>
              <span>Agent</span>
              <strong>Context-Aware Reasoning</strong>
            </div>
          </div>

          <div className="studio-memory-principle">
            <p>
              Memory supports continuity. It does not transfer creative
              authority.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-authority">
        <div className="case-study-shell">
          <div className="studio-authority-heading">
            <p className="case-study-eyebrow">Human Authority</p>

            <h2>
              Assistance can scale.
              <br />
              Creative authority stays human.
            </h2>

            <p>
              STUDIO//ONE is designed so that agentic capability does not erase
              the creator&apos;s role in the production system. The agent can
              organize, reason, and propose, while the creator establishes what
              becomes production truth.
            </p>
          </div>

          <div
            className="studio-authority-grid"
            aria-label="Human authority controls"
          >
            {authorityFunctions.map((authorityFunction) => (
              <article
                className="studio-authority-card"
                key={authorityFunction.title}
              >
                <h3>{authorityFunction.title}</h3>
                <p>{authorityFunction.description}</p>
              </article>
            ))}
          </div>

          <div className="studio-authority-model">
            <div>
              <span>Agent</span>
              <strong>Organize · Reason · Propose</strong>
            </div>

            <span className="studio-authority-divider" aria-hidden="true">
              →
            </span>

            <div className="studio-authority-model--human">
              <span>Creator</span>
              <strong>Review · Approve · Revise · Direct</strong>
            </div>

            <span className="studio-authority-divider" aria-hidden="true">
              →
            </span>

            <div>
              <span>Production</span>
              <strong>Approved State + Action</strong>
            </div>
          </div>

          <div className="studio-authority-principle">
            <p>
              The agent supports production decisions. The creator authorizes
              them.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-architecture">
        <div className="case-study-shell">
          <div className="studio-architecture-heading">
            <p className="case-study-eyebrow">Technical Architecture</p>

            <h2>
              The production model is backed by a working cloud architecture.
            </h2>

            <p>
              STUDIO//ONE connects a creator-facing web experience with Google
              Cloud infrastructure, Gemini-based agent reasoning, and
              persistent production memory through ClickHouse.
            </p>
          </div>

          <div
            className="studio-architecture-stack"
            aria-label="STUDIO//ONE technical architecture"
          >
            {architectureLayers.map((layer, index) => (
              <div className="studio-architecture-step" key={layer.title}>
                <article className="studio-architecture-card">
                  <span>{layer.title}</span>
                  <p>{layer.detail}</p>
                </article>

                {index < architectureLayers.length - 1 && (
                  <span
                    className="studio-architecture-arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="studio-architecture-evidence">
            <div>
              <span>Reasoning</span>
              <strong>Google ADK + Gemini</strong>
            </div>

            <div>
              <span>Runtime</span>
              <strong>Google Cloud / Cloud Run</strong>
            </div>

            <div>
              <span>Memory Access</span>
              <strong>Official mcp-clickhouse</strong>
            </div>

            <div>
              <span>Persistent Memory</span>
              <strong>ClickHouse</strong>
            </div>
          </div>

          <div className="studio-architecture-principle">
            <p>
              The studio remembers. The agent reasons. The creator remains the
              authority.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-evidence">
        <div className="case-study-shell">
          <div className="studio-evidence-heading">
            <p className="case-study-eyebrow">Built &amp; Validated</p>

            <h2>
              The system moved beyond concept into working production
              infrastructure.
            </h2>

            <p>
              STUDIO//ONE combines a functioning web application, agent
              reasoning, persistent production memory, runtime tool access, and
              creator approval into one connected production system.
            </p>
          </div>

          <div
            className="studio-evidence-grid"
            aria-label="STUDIO//ONE implementation evidence"
          >
            {buildEvidence.map((item) => (
              <article className="studio-evidence-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.value}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="studio-runtime-proof">
            <div className="studio-runtime-proof-heading">
              <p className="case-study-eyebrow">Runtime Behavior</p>

              <h3>
                Production memory changes what the agent can reason about next.
              </h3>
            </div>

            <div
              className="studio-runtime-flow"
              aria-label="Persistent production memory runtime behavior"
            >
              <span>Creator Decision</span>
              <span aria-hidden="true">→</span>
              <span>Persist Production State</span>
              <span aria-hidden="true">→</span>
              <span>ClickHouse Memory</span>
              <span aria-hidden="true">→</span>
              <span>MCP Retrieval</span>
              <span aria-hidden="true">→</span>
              <span>Gemini Reasoning</span>
              <span aria-hidden="true">→</span>
              <span>Updated Production Output</span>
            </div>

            <p>
              Persistent production state is not treated as passive history.
              Prior creator decisions can be retrieved and used as context for
              subsequent agent reasoning.
            </p>
          </div>

          <div className="studio-competition-context">
            <div>
              <p className="case-study-eyebrow">Competition Context</p>

              <h3>Built for Google Cloud&apos;s Agentic Cinema hackathon.</h3>
            </div>

            <div>
              <p>
                STUDIO//ONE was developed for the Agentic Cinema challenge,
                which asks participants to create production-ready agentic
                systems for real media and entertainment workflows using
                Gemini, Google Cloud, and an approved partner technology.
              </p>

              <p>
                The project targets the ClickHouse track, where persistent
                production memory is accessed at runtime through the official
                <strong> mcp-clickhouse</strong> integration.
              </p>
            </div>
          </div>

          <div className="studio-evidence-principle">
            <p>
              The competition provided the constraint. The product problem
              defined the system.
            </p>
          </div>
        </div>
      </section>

      <section className="studio-current-state">
        <div className="case-study-shell">
          <div className="studio-current-state-heading">
            <p className="case-study-eyebrow">Current State</p>

            <h2>
              A working system still creates new questions.
            </h2>

            <p>
              STUDIO//ONE is an active production and competition build. The
              core system architecture, persistent production memory, agent
              reasoning, creator controls, and hosted experience are
              established while final competition delivery work continues.
            </p>
          </div>

          <div className="studio-current-state-grid">
            <article>
              <span>Established</span>
              <h3>Core Product System</h3>
              <p>
                Creator-facing workflows, persistent production context,
                agent-assisted reasoning, and human approval are represented in
                the working system.
              </p>
            </article>

            <article>
              <span>Established</span>
              <h3>Runtime Integration</h3>
              <p>
                Gemini, Google ADK, Cloud Run, ClickHouse, and the official MCP
                integration form the current implementation architecture.
              </p>
            </article>

            <article>
              <span>Active Delivery</span>
              <h3>Competition Completion</h3>
              <p>
                Final stabilization, repository and compliance review, demo
                production, and submission preparation remain part of the
                active delivery path.
              </p>
            </article>
          </div>

          <div className="studio-lessons">
            <div className="studio-lessons-heading">
              <p className="case-study-eyebrow">What We Learned</p>

              <h3>
                Better coordination requires more than a more capable agent.
              </h3>
            </div>

            <div className="studio-lessons-grid">
              {lessons.map((lesson) => (
                <article className="studio-lesson-card" key={lesson.title}>
                  <h4>{lesson.title}</h4>
                  <p>{lesson.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="studio-outcome">
        <div className="case-study-shell">
          <p className="case-study-eyebrow">Outcome</p>

          <h2>
            A one-person creative team can have stronger production
            coordination without giving up creative authority.
          </h2>

          <p className="studio-outcome-copy">
            STUDIO//ONE connects structured production workflows, persistent
            memory, agent reasoning, cloud infrastructure, and explicit creator
            approval into one working system designed around the realities of
            independent creative production.
          </p>

          <p className="studio-outcome-principle">
            The studio remembers. The agent reasons. You direct.
          </p>

          <div className="studio-outcome-actions">
            <a
              className="studio-outcome-primary"
              href="https://studio.randazzodesignsai.com"
              target="_blank"
              rel="noreferrer"
            >
              Explore STUDIO//ONE
              <span aria-hidden="true"> ↗</span>
            </a>

            <a
              className="studio-outcome-secondary"
              href="/#selected-work"
            >
              Back to Selected Work
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="studio-awesomeverse-bridge">
        <div className="case-study-shell">
          <div className="studio-awesomeverse-heading">
            <p className="case-study-eyebrow">Beyond the Tool</p>

            <h2>
              Creative technology matters most when it helps make something.
            </h2>

            <p>
              The Awesomeverse demonstrates the kind of human-directed creative
              production that specialized tools such as STUDIO//ONE and the
              Uncanny Art Director can support—bringing together original IP,
              worldbuilding, visual storytelling, cross-platform publishing,
              and audience-facing experiences.
            </p>
          </div>

          <div className="studio-awesomeverse-feature">
            <div className="studio-awesomeverse-feature-copy">
              <p className="studio-awesomeverse-label">
                Original IP · Applied Creative Practice
              </p>

              <h3>The Awesomeverse</h3>

              <p>
                Explore the connected storyworld, production practice, and
                creative systems behind an ongoing body of visual storytelling.
              </p>

              <div className="studio-awesomeverse-primary-actions">
                <a
                  className="studio-awesomeverse-primary"
                  href="/work/awesomeverse"
                >
                  Explore the Awesomeverse Case Study
                  <span aria-hidden="true"> →</span>
                </a>

                <a
                  href="https://www.youtube.com/@thaawesomeverse"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
            </div>

            <div className="studio-awesomeverse-network">
              <p>Follow the Awesomeverse</p>

              <div className="studio-awesomeverse-links">
                <a
                  href="https://www.instagram.com/thaawesomeverse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.tiktok.com/@thaawesomeverse"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok ↗
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100067917529621&sk=reels_tab"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook ↗
                </a>

                <a
                  href="https://www.reddit.com/r/TheAwesomeverse/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reddit ↗
                </a>

                <a
                  href="https://discord.gg/eswWrbyNjQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord ↗
                </a>
              </div>
            </div>
          </div>

          <div className="studio-awesomeverse-principle">
            <span>Human-Directed Production</span>

            <strong>
              Tools support the practice. Creative authority stays human.
            </strong>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StudioOneCaseStudy