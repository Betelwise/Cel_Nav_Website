import { useState } from "react";
import { navigationMethods } from "../data/highlights.js";

export function NavigationMethods() {
  const [activeKey, setActiveKey] = useState(navigationMethods[0]?.key ?? "");
  const activeMethod = navigationMethods.find((item) => item.key === activeKey);

  return (
    <section className="section" id="methods">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Navigation playbook</span>
        <h2>Five ways to find yourself anywhere on Earth</h2>
        <p>
          Tap a card to jump back into the seminar explanation and remember when
          to use each technique.
        </p>
      </div>
      <div className="card-carousel" role="tablist">
        {navigationMethods.map((method) => {
          const isActive = method.key === activeKey;
          return (
            <button
              key={method.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`method-card${isActive ? " method-card--active" : ""}`}
              onClick={() => setActiveKey(method.key)}
              data-animate>
              <span className="method-card__icon" aria-hidden="true">
                {method.icon}
              </span>
              <span className="method-card__title">{method.title}</span>
              <span className="method-card__summary">{method.summary}</span>
            </button>
          );
        })}
      </div>
      {activeMethod ? (
        <div className="method-detail" data-animate>
          <h3>{activeMethod.title}</h3>
          <p>{activeMethod.summary}</p>
          <p className="method-detail__takeaway">{activeMethod.takeaway}</p>
        </div>
      ) : null}
    </section>
  );
}
