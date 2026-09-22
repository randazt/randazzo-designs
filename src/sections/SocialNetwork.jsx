const channels = [
  {
    name: 'YouTube',
    descriptor: 'Watch',
    description:
      'Short-form science fiction, visual storytelling, creative experiments, and behind-the-scenes looks at work from The Awesomeverse and Randazzo Designs.',
    href: 'https://www.youtube.com/@thaawesomeverse',
    accent: 'red',
  },
  {
    name: 'Instagram',
    descriptor: 'Follow',
    description:
      'Artwork, environments, characters, visual development, and ongoing creative work from The Awesomeverse.',
    href: 'https://www.instagram.com/thaawesomeverse/',
    accent: 'purple',
  },
  {
    name: 'TikTok',
    descriptor: 'Watch & Discover',
    description:
      'Short-form Awesomeverse stories, visual experiments, cinematic creative work, and new ideas in development.',
    href: 'https://www.tiktok.com/@thaawesomeverse',
    accent: 'pink',
  },
  {
    name: 'Facebook — The Awesomeverse',
    descriptor: 'Follow',
    description:
      'Awesomeverse releases, visual storytelling, project updates, and new creative work as the universe continues to grow.',
    href: 'https://www.facebook.com/profile.php?id=100067917529621&sk=reels_tab',
    accent: 'blue',
  },
  {
    name: 'Facebook — Randazzo Designs',
    descriptor: 'Follow',
    description:
      'Follow Randazzo Designs for design, creative technology, practical AI, project updates, and ongoing studio work.',
    href: 'https://www.facebook.com/RandazzoDesignsCNY/',
    accent: 'blue',
  },
  {
    name: 'Reddit',
    descriptor: 'Discuss',
    description:
      'A community space for The Awesomeverse, story discussion, worldbuilding, mysteries, and exploring the universe together.',
    href: 'https://www.reddit.com/r/TheAwesomeverse/',
    accent: 'orange',
  },
  {
    name: 'Discord',
    descriptor: 'Join the Community',
    description:
      'Join The Awesomeverse community for conversation, project updates, story discussion, and future interactive experiences.',
    href: 'https://discord.gg/eswWrbyNjQ',
    accent: 'indigo',
  },
  {
    name: 'LinkedIn',
    descriptor: 'Connect Professionally',
    description:
      'Connect with Thaddeus Randazzo for professional design, creative technology, practical AI, and collaboration.',
    href: 'https://www.linkedin.com/in/thaddeus-randazzo-48a66b6a/',
    accent: 'teal',
  },
]

function SocialNetwork() {
  return (
    <section className="social-network" id="social-network">
      <div className="social-network-inner">
        <div className="social-network-heading">
          <p className="section-eyebrow">Follow the Work</p>

          <h2>
            Design. Technology.
            <br />
            Imagination.
            <br />
            Across the network.
          </h2>

          <p className="social-network-intro">
            Follow the work as it develops across Randazzo Designs and The
            Awesomeverse—from design and technology to original stories,
            experiments, and community.
          </p>
        </div>

        <div className="social-network-grid">
          {channels.map((channel) => (
            <article
              className={`social-network-card social-network-${channel.accent}`}
              key={channel.href}
            >
              <div className="social-network-card-top">
                <p>{channel.descriptor}</p>

                <span aria-hidden="true">↗</span>
              </div>

              <div className="social-network-card-content">
                <h3>{channel.name}</h3>
                <p>{channel.description}</p>
              </div>

              <a
                className="social-network-link"
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${channel.descriptor} on ${channel.name}`}
              >
                {channel.descriptor}
                <span aria-hidden="true"> ↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className="social-network-community">
          <div>
            <p className="social-network-community-label">
              The Awesomeverse Community
            </p>

            <h3>
              Follow the story.
              <br />
              Join the conversation.
            </h3>
          </div>

          <div className="social-network-community-copy">
            <p>
              The Awesomeverse extends beyond individual episodes into a
              growing community built around visual storytelling, discussion,
              discovery, and participation.
            </p>

            <a
              href="https://discord.gg/eswWrbyNjQ"
              target="_blank"
              rel="noreferrer"
            >
              Join The Awesomeverse on Discord
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialNetwork