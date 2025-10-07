import { mediaItems } from "../data/highlights.js";

export function MediaGallery() {
  return (
    <section className="section" id="gallery">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Seminar visuals</span>
        <h2>Replay the demos and visuals</h2>
        <p>
          Drop in your own photos, stellarium screenshots, or GIFs right here.
          We used engaging imagery throughout the seminar to make stellar
          geometry stick.
        </p>
      </div>
      <div className="media-gallery" data-animate>
        {mediaItems.map((item) => (
          <figure key={item.src} className="media-card">
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
