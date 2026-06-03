"use client";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "var(--green)",
        height: "var(--header-h)",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/logo-white.png"
          alt="The Translation Team"
          width={200}
          height={44}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </header>
  );
}
