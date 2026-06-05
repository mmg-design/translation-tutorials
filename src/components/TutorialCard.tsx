"use client";
import { useEffect, useRef, useState } from "react";
import type { Tutorial } from "@/lib/tutorials";

// Normalise any Tella URL to the embeddable /embed path
function toEmbedUrl(url: string): string {
  const base = url.replace(/\/+$/, "").replace(/\/embed.*$/, "");
  return `${base}/embed?b=0&title=1&a=1&loop=0&t=0&muted=0&wt=1&o=1`;
}

export default function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const embedUrl = tutorial.videoUrl ? toEmbedUrl(tutorial.videoUrl) : null;

  return (
    <section
      ref={ref}
      id={tutorial.id}
      className="reveal"
      style={{ background: "#fff", border: "1px solid var(--rule)", borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow)" }}
    >
      {/* ── Header ── */}
      <div style={{ padding: "28px 36px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--green)", textTransform: "uppercase", flexShrink: 0 }}>
            {tutorial.index}
          </span>
          <h2 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, letterSpacing: "-0.015em", color: "var(--green-dark)", lineHeight: 1.2 }}>
            {tutorial.title}
          </h2>
        </div>
      </div>

      {/* ── Video ── */}
      <div style={{ padding: "28px 36px" }}>
        {embedUrl ? (
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 10, overflow: "hidden", boxShadow: "var(--shadow-video)" }}>
            <iframe
              src={embedUrl}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        ) : (
          <div style={{ aspectRatio: "16/9", borderRadius: 10, background: "var(--green-soft)", border: "1px solid var(--rule)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "var(--ink-muted)" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.35 }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
              <path d="M10 8.5l5 3.5-5 3.5V8.5z" fill="currentColor" />
            </svg>
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.04em" }}>Video coming soon</span>
          </div>
        )}
      </div>

      {/* ── Collapsible description ── */}
      {tutorial.description && (
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          <button
            onClick={() => setOpen((o) => !o)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "16px 36px", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font)" }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--green-dark)", letterSpacing: "0.01em" }}>
              Description &amp; SOP
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"
              style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div style={{ maxHeight: open ? 400 : 0, overflowY: open ? "auto" : "hidden", transition: "max-height 0.3s ease" }}>
            <p style={{ padding: "0 36px 28px", fontSize: 14, lineHeight: 1.75, color: "var(--ink-mid)", fontWeight: 300, whiteSpace: "pre-wrap" }}>
              {tutorial.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
