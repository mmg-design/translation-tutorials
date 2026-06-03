import SiteHeader from "@/components/SiteHeader";
import TabRail from "@/components/TabRail";
import TutorialCard from "@/components/TutorialCard";
import { getTutorials } from "@/lib/sanity";
import { tutorials as fallback } from "@/lib/tutorials";
import type { Tutorial } from "@/lib/tutorials";

// Ensure Tella URLs use the /embed path — handles both share and embed URLs
function tellaEmbedHtml(url: string): string {
  const embedUrl = url.includes("/embed") ? url : url.replace(/\/$/, "") + "/embed?b=0&title=1&a=1&loop=0&t=0&muted=0&wt=1&o=1";
  return `<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="${embedUrl}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
}

export const revalidate = 60; // ISR: refresh every 60 seconds

export default async function Home() {
  // Fetch from Sanity; fall back to static data if CMS is empty
  const sanityTutorials = await getTutorials().catch(() => []);
  const data: Tutorial[] =
    sanityTutorials.length > 0
      ? sanityTutorials.map((t, i) => ({
          id: `tutorial-${t.order}`,
          index: String(i + 1).padStart(2, "0"),
          label: t.label,
          title: t.title,
          description: t.description,
          videoEmbed: t.videoEmbedUrl ? tellaEmbedHtml(t.videoEmbedUrl) : null,
        }))
      : fallback;
  return (
    <>
      <SiteHeader />
      <TabRail tabs={[
        { id: "hero", label: "Intro" },
        ...data.map((t) => ({ id: t.id, label: t.label })),
      ]} />

      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px 32px 80px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              wordSpacing: "-0.05em",
              color: "var(--green-dark)",
            }}
          >
            TTT Website Tutorials
          </h1>

          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "var(--ink-mid)",
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            A growing database of tutorials for your new website that can be referenced over time.
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

          {/* Scroll hint — below the video, not overlapping */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              marginTop: 8,
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
        {data.map((t) => (
          <TutorialCard key={t.id} tutorial={t} />
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
