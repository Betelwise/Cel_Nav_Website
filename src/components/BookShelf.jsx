import { books } from "../data/books.js";

export function BookShelf() {
  return (
    <section className="section" id="books">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Take-home library</span>
        <h2>Download the recommended books</h2>
        <p>
          These links currently point to sample files — swap them with your
          Google Drive share links when you upload the final resources.
        </p>
      </div>
      <div className="grid" data-animate>
        {books.map((book) => (
          <article key={book.title} className="book-card">
            <span className="book-card__format">{book.format}</span>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p className="book-card__focus">Focus: {book.focus}</p>
            <a
              className="button button--primary"
              href={book.link}
              target="_blank"
              rel="noreferrer">
              Download
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
