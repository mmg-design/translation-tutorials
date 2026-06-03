import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Translation Team · Tutorial Hub",
  description: "Step-by-step video tutorials for The Translation Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
