import { transcriptSections } from "../data/transcript.js";

export function Transcript() {
  return (
    <section className="section" id="transcript">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Full seminar recap</span>
        <h2>Transcript and key takeaways</h2>
        <p>
          Each expandable card below mirrors the live flow. Tap to revisit the
          story, examples, and formulas exactly as they were delivered.
        </p>
      </div>
      <div className="transcript" data-animate>
        {transcriptSections.map((item, index) => (
          <details
            key={item.id}
            id={item.id}
            className="transcript__item"
            open={index === 0}>
            <summary>
              <span className="transcript__emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="transcript__title">{item.title}</span>
            </summary>
            <div className="transcript__content">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
