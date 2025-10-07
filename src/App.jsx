import { useEffect } from "react";
import "./App.css";
import { Hero } from "./components/Hero.jsx";
import { NavigationMethods } from "./components/NavigationMethods.jsx";
import { DirectionTricks } from "./components/DirectionTricks.jsx";
import { SeminarJourney } from "./components/SeminarJourney.jsx";
import { BookShelf } from "./components/BookShelf.jsx";
import { SoftwareShowcase } from "./components/SoftwareShowcase.jsx";
import { MediaGallery } from "./components/MediaGallery.jsx";
import { Transcript } from "./components/Transcript.jsx";
import { Footer } from "./components/Footer.jsx";
import { FeedbackForm } from "./components/FeedbackForm.jsx";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const targets = document.querySelectorAll("[data-animate]");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <a className="topbar__logo" href="#welcome">
          <span aria-hidden="true">✶</span>
          Celestial Navigation
        </a>
        <button
          className="topbar__cta"
          type="button"
          onClick={() =>
            document
              .getElementById("books")
              ?.scrollIntoView({ behavior: "smooth" })
          }>
          Book pack
        </button>
      </header>

      <main>
        <Hero />
        <NavigationMethods />
        <DirectionTricks />
        <SeminarJourney />
        <BookShelf />
        <SoftwareShowcase />
        <FeedbackForm />
        <MediaGallery />
        <Transcript />
      </main>

      <Footer />
    </div>
  );
}

export default App;
