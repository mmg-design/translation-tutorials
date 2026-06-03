"use client";
import { useEffect, useState } from "react";

export interface TabItem {
  id: string;
  label: string;
}

export default function TabRail({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "hero");

  useEffect(() => {
    function offset() {
      return (
        (document.querySelector("header")?.offsetHeight ?? 64) +
        (document.querySelector(".tab-rail")?.clientHeight ?? 52) +
        48
      );
    }

    function onScroll() {
      const scrollY = window.scrollY + offset();
      let current = tabs[0]?.id ?? "hero";
      tabs.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActive(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tabs]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const off =
      (document.querySelector("header")?.offsetHeight ?? 64) +
      (document.querySelector(".tab-rail")?.clientHeight ?? 52) +
      16;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off, behavior: "smooth" });
  }

  return (
    <div
      className="tab-rail"
      style={{
        position: "sticky",
        top: "var(--header-h)",
        zIndex: 100,
        height: "var(--tab-h)",
        background: "rgba(255,255,255,0.95)",
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
          gap: 4,
          overflowX: "auto",
          scrollbarWidth: "none",
          justifyContent: "center",
        }}
      >
        {tabs.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                flexShrink: 0,
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font)",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                padding: "7px 16px",
                borderRadius: 999,
                background: isActive ? "var(--green)" : "transparent",
                color: isActive ? "#fff" : "var(--ink-muted)",
                transition: "background 0.18s, color 0.18s",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.target as HTMLButtonElement).style.background = "var(--green-light)";
                  (e.target as HTMLButtonElement).style.color = "var(--green)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.target as HTMLButtonElement).style.background = "transparent";
                  (e.target as HTMLButtonElement).style.color = "var(--ink-muted)";
                }
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
