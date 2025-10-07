import { useState } from "react";
import { transcriptSections } from "../data/transcript.js";

function TranscriptItem({ item, isActive, onToggle }) {
  return (
    <article
      id={item.id}
      className={`transcript__item${isActive ? " is-open" : ""}`}>
      <button
        type="button"
        className="transcript__trigger"
        onClick={() => onToggle(item.id)}
        aria-expanded={isActive}
        aria-controls={`${item.id}-panel`}
        id={`${item.id}-trigger`}>
        <span className="transcript__emoji" aria-hidden="true">
          {item.emoji}
        </span>
        <span className="transcript__title">{item.title}</span>
        <span className="transcript__chevron" aria-hidden="true" />
      </button>
      <div
        id={`${item.id}-panel`}
        className="transcript__panel"
        role="region"
        aria-labelledby={`${item.id}-trigger`}>
        <div className="transcript__content">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Transcript() {
  const [activeId, setActiveId] = useState(transcriptSections[0]?.id ?? null);

  const handleToggle = (id) => {
    setActiveId((previous) => {
      const next = previous === id ? null : id;

      if (next === id) {
        requestAnimationFrame(() => {
          const sectionElement = document.getElementById(id);
          sectionElement?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }

      return next;
    });
  };

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
        {transcriptSections.map((item) => (
          <TranscriptItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}
