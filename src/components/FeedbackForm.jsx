import { useMemo, useState } from "react";

const RELAY_URL =
  import.meta.env.VITE_MESSAGE_RELAY_URL ??
  "https://a719s6vpde.execute-api.ap-northeast-1.amazonaws.com/default/slackForwaderRelay";
const RELAY_KEY = import.meta.env.VITE_MESSAGE_RELAY_KEY ?? "";
const SOURCE_LABEL = import.meta.env.VITE_MESSAGE_SOURCE ?? "celnav-seminar";

const initialFormState = {
  name: "",
  contact: "",
  type: "question",
  message: "",
};

export function FeedbackForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, message: false });

  const isSubmitDisabled = useMemo(() => {
    return (
      status === "submitting" ||
      !formState.name.trim() ||
      !formState.message.trim()
    );
  }, [formState.name, formState.message, status]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    if (name === "name" || name === "message") {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const isNameMissing = !formState.name.trim();
  const isMessageMissing = !formState.message.trim();
  const nameHasError = touched.name && isNameMissing;
  const messageHasError = touched.message && isMessageMissing;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = formState.name.trim();
    const trimmedMessage = formState.message.trim();

    if (!trimmedName || !trimmedMessage) {
      setTouched((prev) => ({
        ...prev,
        name: prev.name || !trimmedName,
        message: prev.message || !trimmedMessage,
      }));
      return;
    }

    if (!RELAY_URL) {
      setStatus("error");
      setStatusMessage(
        "Message relay is not configured yet. Set VITE_MESSAGE_RELAY_URL in your environment."
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const payload = {
      metadata: {
        source: SOURCE_LABEL,
        type: formState.type,
        submittedAt: new Date().toISOString(),
      },
      data: {
        name: trimmedName,
        contact: formState.contact.trim() || undefined,
        message: trimmedMessage,
      },
    };

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (RELAY_KEY) {
        headers["x-relay-key"] = RELAY_KEY;
      }

      const response = await fetch(RELAY_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Relay responded with ${response.status}`);
      }

      setStatus("success");
      setStatusMessage(
        "Thanks! Your message has been forwarded — I'll get back to you soon. If it's a question"
      );
      setFormState(initialFormState);
    } catch (error) {
      console.error("Unable to forward message", error);
      setStatus("error");
      setStatusMessage(
        "I couldn't deliver that message through the relay. Please try again shortly or email zain@betelwise.com."
      );
    }
  };

  return (
    <section className="section" id="feedback">
      <div className="section__header" data-animate>
        <span className="section__eyebrow">Ask or share</span>
        <h2>Send a question or feedback</h2>
        <p>
          Drop in your question, feedback, or takeaway. Messages are forwarded
          to my slack, so I can follow up quickly after the seminar.
        </p>
      </div>
      <div className="feedback" data-animate>
        <form className="feedback__form" onSubmit={handleSubmit}>
          <div className="feedback__row">
            <label
              className={`feedback__field ${
                nameHasError ? "feedback__field--error" : ""
              }`}>
              <span>Name *</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                required
                autoComplete="name"
              />
              {nameHasError ? (
                <span className="feedback__error">Required field</span>
              ) : null}
            </label>
            <label className="feedback__field">
              <span>Contact (optional)</span>
              <input
                type="text"
                name="contact"
                value={formState.contact}
                onChange={handleChange}
                placeholder="Email, phone, or social handle"
                autoComplete="email"
              />
            </label>
          </div>

          <label className="feedback__field">
            <span>Topic</span>
            <select name="type" value={formState.type} onChange={handleChange}>
              <option value="question">Question</option>
              <option value="feedback">Feedback</option>
              <option value="resource-request">Resource request</option>
            </select>
          </label>

          <label
            className={`feedback__field ${
              messageHasError ? "feedback__field--error" : ""
            }`}>
            <span>Message *</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Let me know what's on your mind"
              rows={5}
              required
            />
            {messageHasError ? (
              <span className="feedback__error">Required field</span>
            ) : null}
          </label>

          <div className="feedback__actions">
            <button
              className="button button--primary"
              type="submit"
              disabled={isSubmitDisabled}>
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
            <p className="feedback__hint">
              Your message is routed through a secure relay. I’ll reply via your
              contact details if you share them.
            </p>
          </div>

          {statusMessage ? (
            <p
              className={`feedback__status feedback__status--${status}`}
              role="status"
              aria-live="polite">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
