import { useEffect, useMemo, useState } from "react";

const SEMINAR_START = new Date("2025-10-08T11:30:00+05:00");
const SEMINAR_END = new Date("2025-10-09T12:40:00+05:00");

function formatDuration(ms) {
  const clampedMs = Math.max(ms, 0);
  const totalMinutes = Math.max(1, Math.round(clampedMs / 60000));

  if (totalMinutes < 60) {
    return totalMinutes === 1 ? "1 minute" : `${totalMinutes} minutes`;
  }

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  if (totalHours < 24) {
    if (remainingMinutes === 0) {
      return `${totalHours} ${totalHours === 1 ? "hour" : "hours"}`;
    }

    return `${totalHours}h ${remainingMinutes}m`;
  }

  const totalDays = Math.floor(totalHours / 24);
  const remainingHours = totalHours % 24;

  if (remainingHours === 0) {
    return `${totalDays} ${totalDays === 1 ? "day" : "days"}`;
  }

  return `${totalDays}d ${remainingHours}h`;
}

function getStatusInfo() {
  const now = Date.now();
  const diffToStart = now - SEMINAR_START.getTime();
  const diffToEnd = now - SEMINAR_END.getTime();

  if (diffToEnd >= 0) {
    const elapsed = formatDuration(diffToEnd);
    return {
      badgeText: "Accepting responses",
      badgeVariant: "ended",
      statsValue: `Ended ${elapsed} ago`,
      statusNote: `${elapsed} since we wrapped up — share your takeaways below.`,
    };
  }

  if (diffToStart >= 0) {
    const remaining = formatDuration(SEMINAR_END.getTime() - now);
    return {
      badgeText: "In session",
      badgeVariant: "live",
      statsValue: `Ends in ${remaining}`,
      statusNote: `We’re live right now — wrapping in ${remaining}.`,
    };
  }

  const untilStart = formatDuration(SEMINAR_START.getTime() - now);
  return {
    badgeText: "Starting soon",
    badgeVariant: "upcoming",
    statsValue: `Starts in ${untilStart}`,
    statusNote: `Arrive early — starting in ${untilStart}.`,
  };
}

export function Hero() {
  const [statusInfo, setStatusInfo] = useState(() => getStatusInfo());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusInfo(getStatusInfo());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(
    () => [
      { label: "Speaker", value: "Zain" },
      { label: "Session length", value: "60 minutes" },
      { label: "Format", value: "Interactive + live demos" },
      { label: "Status", value: statusInfo.statsValue },
    ],
    [statusInfo.statsValue]
  );

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
        <div className="hero__profile">
          <div className="hero__profile-avatar" aria-hidden="true">
            <span>Z</span>
          </div>
          <div className="hero__profile-meta">
            <div className="hero__profile-header">
              <span
                className={`hero__badge-status hero__badge-status--${statusInfo.badgeVariant}`}>
                {statusInfo.badgeText}
              </span>
            </div>
            <div className="hero__profile-speaker">
              <span className="hero__speaker-label">Speaker</span>
              <strong>Zain</strong>
            </div>
            <span>
              Quaid-i-Azam University Islamabad · Razmi Auditorium · 11:30 AM —
              12:30 PM
            </span>
            <span className="hero__status-note">{statusInfo.statusNote}</span>
          </div>
        </div>
        <div className="hero__cta">
          <a className="button button--primary" href="#books">
            Download book pack
          </a>
          <a className="button button--accent" href="#feedback">
            <span aria-hidden="true">💬</span>
            Share feedback or ask
          </a>
          <a className="button button--ghost" href="#software">
            Explore the software
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
