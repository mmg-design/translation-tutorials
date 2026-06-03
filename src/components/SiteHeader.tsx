"use client";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        height: "var(--header-h)",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="The Translation Team"
          width={180}
          height={40}
          style={{ objectFit: "contain", objectPosition: "left" }}
          priority
        />
        <span
          style={{
            fontFamily: "var(--font)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
          }}
        >
          Tutorial Hub
        </span>
      </div>
    </header>
  );
}
