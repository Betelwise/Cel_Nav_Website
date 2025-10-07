import { useEffect, useState } from "react";

const sections = [
  {
    id: "welcome",
    label: "Overview",
    description: "intro",
    icon: "✨",
  },
  {
    id: "feedback",
    label: "Feedback",
    description: "Ask or share",
    icon: "💬",
  },
  {
    id: "books",
    label: "Books",
    description: "Downloads",
    icon: "📚",
  },
  {
    id: "gallery",
    label: "Gallery",
    description: "Seminar visuals",
    icon: "🖼️",
  },
  {
    id: "software",
    label: "Software",
    description: "Toolbox",
    icon: "💾",
  },
  {
    id: "transcript",
    label: "Transcript",
    description: "Full recap",
    icon: "📝",
  },
  {
    id: "methods",
    label: "Methods",
    description: "Navigation playbook",
    icon: "🧭",
  },
  {
    id: "direction",
    label: "Direction",
    description: "Field tricks",
    icon: "🌍",
  },
  {
    id: "journey",
    label: "Journey",
    description: "Session flow",
    icon: "🛤️",
  },
];

export function ContentNavigator() {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { id } = entry.target;
            if (sections.some((section) => section.id === id)) {
              setActiveId(id);
            }
          }
        });
      },
      {
        rootMargin: "-55% 0px -35% 0px",
        threshold: 0.1,
      }
    );

    const observedElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (event, id) => {
    event.preventDefault();
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <nav
      className="content-nav"
      id="contents"
      aria-label="Seminar contents"
      data-animate>
      <span className="content-nav__eyebrow">Navigate the page</span>
      <ul className="content-nav__list">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id} className="content-nav__item">
              <a
                href={`#${section.id}`}
                className={`content-nav__link${
                  isActive ? " content-nav__link--active" : ""
                }`}
                onClick={(event) => handleNavigate(event, section.id)}
                aria-current={isActive ? "true" : undefined}>
                <span className="content-nav__icon" aria-hidden="true">
                  {section.icon}
                </span>
                <span className="content-nav__text">
                  <strong>{section.label}</strong>
                  <small>{section.description}</small>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
