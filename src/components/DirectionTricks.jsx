import { directionTricks } from "../data/highlights.js";

export function DirectionTricks() {
  return (
    <section className="section" id="direction">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Field cheatsheets</span>
        <h2>Direction tricks you can try tonight</h2>
        <p>
          Screenshots from the live demo featuring the Sun, Moon, and sky
          patterns that keep you on course when compasses fail.
        </p>
      </div>
      <div className="grid" data-animate>
        {directionTricks.map((item) => (
          <article key={item.title} className="info-card">
            <span className="info-card__icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
