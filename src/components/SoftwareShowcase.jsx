import { softwareTools } from "../data/software.js";

export function SoftwareShowcase() {
  return (
    <section className="section" id="software">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Session toolkit</span>
        <h2>Software featured in the seminar</h2>
        <p>
          Revisit the exact apps we used for sky simulations, earth mapping, and
          deep-space visualizations. Each link opens the official download or
          browser experience so you can continue exploring.
        </p>
      </div>
      <div className="software-grid" data-animate>
        {softwareTools.map((tool) => (
          <article key={tool.name} className="software-card">
            <div className="software-card__logo">
              <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" />
            </div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <a
              className="button button--primary software-card__cta"
              href={tool.url}
              target="_blank"
              rel="noreferrer">
              Go to official site
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
