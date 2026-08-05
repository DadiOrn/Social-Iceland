"use client";

import { useState, FormEvent } from "react";
import styles from "./EmailCaptureForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function EmailCaptureForm({
  source,
  buttonLabel = "Send it to me",
  buttonVariant = "primary",
}: {
  source: string;
  buttonLabel?: string;
  buttonVariant?: "primary" | "secondary";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return <p className={styles.success}>You&apos;re in! Check your inbox shortly.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          aria-label="Email address"
        />
        <button
          type="submit"
          className={`btn btn-${buttonVariant}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </div>
      {status === "error" && <p className={styles.error}>{errorMessage}</p>}
      <p className={styles.fineprint}>No spam. Unsubscribe anytime.</p>
    </form>
  );
}
