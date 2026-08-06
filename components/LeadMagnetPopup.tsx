"use client";

import { useEffect, useRef, useState } from "react";
import EmailCaptureForm from "./EmailCaptureForm";
import styles from "./LeadMagnetPopup.module.css";

const STORAGE_KEY = "si-lead-popup-dismissed";
const MIN_TIME_MS = 8000;
const SCROLL_TRIGGER_RATIO = 0.5;

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const shownRef = useRef(false);
  const eligibleRef = useRef(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      eligibleRef.current = true;
    }, MIN_TIME_MS);

    function show() {
      if (shownRef.current || !eligibleRef.current) return;
      shownRef.current = true;
      setVisible(true);
    }

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) show();
    }

    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const full = document.documentElement.scrollHeight;
      if (full > 0 && scrolled / full >= SCROLL_TRIGGER_RATIO) show();
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div className={styles.backdrop} onClick={dismiss}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={dismiss} aria-label="Close">
          ×
        </button>
        <span className="eyebrow">Free download</span>
        <h2 className={styles.title}>Wait — grab the free itinerary first</h2>
        <p className={styles.subtitle}>
          A day-by-day 7-day PDF covering the Golden Circle, the South Coast, glacier
          hikes, the Blue Lagoon, and the northern lights — sent straight to your inbox.
        </p>
        <EmailCaptureForm
          source="exit-intent-popup"
          buttonLabel="Send me the guide"
          buttonVariant="primary"
          onSuccess={dismiss}
        />
      </div>
    </div>
  );
}
