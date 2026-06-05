export interface Tutorial {
  id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  videoUrl: string | null; // Tella embed URL (src only, no HTML)
}

export const tutorials: Tutorial[] = [
  {
    id: "tutorial-1",
    index: "01",
    label: "Getting Started",
    title: "Getting Started with the Website",
    description: "A complete orientation to your new workspace — from first login to finding your first project brief. Paste your SOP here once you have your video recorded.",
    videoUrl: null,
  },
  {
    id: "tutorial-2",
    index: "02",
    label: "Submitting Work",
    title: "Submitting Completed Translations",
    description: "A walkthrough of the full submission flow — uploading files, adding context notes, and closing out a project correctly.",
    videoUrl: null,
  },
  {
    id: "tutorial-3",
    index: "03",
    label: "Your Profile",
    title: "Managing Your Profile & Availability",
    description: "Keep your language pairs, availability windows, and contact details current so the right projects always reach you.",
    videoUrl: null,
  },
];
