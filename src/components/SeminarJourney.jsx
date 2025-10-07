const journeySteps = [
  {
    id: "intro",
    title: "Welcome & mission",
    description:
      "Why celestial navigation still matters and what attendees will master tonight.",
    duration: "6 min",
  },
  {
    id: "foundations",
    title: "Chart the globe",
    description:
      "Latitude, longitude, Google Earth overlays, and the myth of walking straight.",
    duration: "14 min",
  },
  {
    id: "types",
    title: "Navigation families",
    description:
      "Dead reckoning, celestial fixes, piloting, radio navigation, and GNSS.",
    duration: "18 min",
  },
  {
    id: "directions",
    title: "Direction drills",
    description:
      "Shadow compass, Polaris, the Southern Cross, and the Moon clock practice.",
    duration: "20 min",
  },
  {
    id: "coordinates",
    title: "From sky to coordinates",
    description:
      "Longitude from time gaps, latitude from Sun altitude, sextants, and artificial horizons.",
    duration: "18 min",
  },
  {
    id: "celestial",
    title: "Full celestial workflow",
    description:
      "Intersecting circles of position and building the 3D mental model.",
    duration: "10 min",
  },
  {
    id: "viking",
    title: "Viking bonus",
    description:
      "Sunstones, polarized light, and lessons for modern emergency navigation.",
    duration: "6 min",
  },
];

export function SeminarJourney() {
  return (
    <section className="section" id="journey">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Replay the flow</span>
        <h2>The journey we took during the seminar</h2>
        <p>
          Use this as a quick refresher before teaching the material or
          practicing in the field. Tap a step to jump to that part of the
          transcript.
        </p>
      </div>
      <ol className="journey" data-animate>
        {journeySteps.map((step, index) => (
          <li key={step.title} className="journey__item">
            <a href={`#${step.id}`} className="journey__link">
              <span className="journey__badge">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="journey__duration">{step.duration}</span>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
