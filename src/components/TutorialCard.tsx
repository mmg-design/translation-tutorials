"use client";
import { useEffect, useRef } from "react";
import type { Tutorial } from "@/lib/tutorials";
import VideoPlaceholder from "./VideoPlaceholder";

export default function TutorialCard({
  tutorial,
  flip = false,
}: {
  tutorial: Tutorial;
  flip?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={tutorial.id}
      className="reveal"
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          direction: flip ? "rtl" : "ltr",
        }}
      >
        {/* ── Left: content ── */}
        <div
          style={{
            direction: "ltr",
            padding: "52px 48px",
            borderRight: flip ? "none" : "1px solid var(--rule)",
            borderLeft: flip ? "1px solid var(--rule)" : "none",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--green)",
              textTransform: "uppercase",
            }}
          >
            {tutorial.index}
          </span>

          <h2
            style={{
              fontSize: "clamp(22px, 2.2vw, 28px)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "var(--green-dark)",
            }}
          >
            {tutorial.title}
          </h2>

          <p
            style={{
              fontSize: 14.5,
              color: "var(--ink-mid)",
              lineHeight: 1.65,
              fontWeight: 300,
              maxWidth: 400,
            }}
          >
            {tutorial.description}
          </p>

          <ol
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              marginTop: 4,
            }}
          >
            {tutorial.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "16px 0",
                  borderTop: "1px solid var(--rule)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--green-light)",
                    color: "var(--green)",
                    fontSize: 12,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <strong
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--green-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </strong>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--ink-mid)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Right: video ── */}
        <div
          style={{
            direction: "ltr",
            padding: 32,
            background: "var(--green-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {tutorial.videoEmbed ? (
            <div
              style={{
                width: "100%",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "var(--shadow-video)",
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
              dangerouslySetInnerHTML={{ __html: tutorial.videoEmbed }}
            />
          ) : (
            <VideoPlaceholder />
          )}
        </div>
      </div>

      {/* Responsive: stack on mobile via inline media query workaround */}
      <style>{`
        @media (max-width: 820px) {
          #${tutorial.id} > div {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          #${tutorial.id} > div > div:first-child {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid var(--rule);
            padding: 32px 24px !important;
          }
          #${tutorial.id} > div > div:last-child {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
