import SiteHeader from "@/components/SiteHeader";
import TabRail from "@/components/TabRail";
import TutorialCard from "@/components/TutorialCard";
import { tutorials } from "@/lib/tutorials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <TabRail />

      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 32px 72px",
          position: "relative",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 880,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 28,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--green)",
              background: "var(--green-light)",
              padding: "5px 16px",
              borderRadius: 999,
            }}
          >
            Welcome
          </span>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--green-dark)",
            }}
          >
            Welcome to the{" "}
            <span style={{ color: "var(--green)" }}>Translation Team</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "var(--ink-mid)",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Everything you need to hit the ground running — watch the intro,
            then follow the tutorials below at your own pace.
          </p>

          <div style={{ width: "100%", marginTop: 8 }}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "var(--shadow-video)",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                src="https://www.tella.tv/video/vid_cmpydxyns00x404l5b2jphx32/embed?b=0&title=1&a=1&loop=0&t=0&muted=0&wt=1&o=1"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            color: "var(--ink-muted)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            animation: "bounceDown 2.4s ease-in-out infinite",
          }}
        >
          <span>Scroll to tutorials</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── Tutorials ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 120px",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {tutorials.map((t, i) => (
          <TutorialCard key={t.id} tutorial={t} flip={i % 2 === 1} />
        ))}
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid var(--rule)",
          padding: "32px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--ink-muted)",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} The Translation Team · Tutorial Hub
      </footer>

      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.45; }
          50%       { transform: translateX(-50%) translateY(6px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
