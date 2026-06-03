export default function VideoPlaceholder() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: 10,
        background: "var(--green-soft)",
        border: "1px solid var(--rule)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        color: "var(--ink-muted)",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        style={{ opacity: 0.35 }}
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 8.5l5 3.5-5 3.5V8.5z" fill="currentColor" />
      </svg>
      <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.04em" }}>
        Video coming soon
      </span>
    </div>
  );
}
