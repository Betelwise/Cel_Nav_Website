const stats = [
  { label: "Session length", value: "60 minutes" },
  { label: "Format", value: "Interactive + live demos" },
];

export function Hero() {
  return (
    <section className="hero" id="welcome" data-animate>
      <div className="hero__content">
        <p className="hero__eyebrow">Celestial Navigation Seminar</p>
        <h1>Find your way using nothing but the sky.</h1>
        <p className="hero__lead">
          Revisit the stories, science, and survival tricks from the session.
          Download the recommended books, watch the demonstrations again, and
          practice each technique on the go.
        </p>
        <div className="hero__cta">
          <a className="button button--primary" href="#books">
            Download book pack
          </a>
          <a className="button button--ghost" href="#feedback">
            Ask a question
          </a>
          <a className="button button--ghost" href="#transcript">
            Browse the transcript
          </a>
        </div>
        <dl className="hero__stats">
          {stats.map((item) => (
            <div key={item.label} className="hero__stat">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero__media">
        <div className="hero__glow" aria-hidden="true" />
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
          alt="Night sky filled with stars above a calm horizon"
          className="hero__image"
          loading="lazy"
        />
        <div className="hero__badge">
          <span role="img" aria-label="Star chart">
            🌌
          </span>
          <p>
            Includes live demos with Stellarium, shadow sticks, and a 60-second
            Polaris fix you can practice tonight.
          </p>
        </div>
      </div>
    </section>
  );
}
