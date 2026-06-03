export interface Step {
  title: string;
  body: string;
}

export interface Tutorial {
  id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  steps: Step[];
  videoEmbed: string | null; // raw iframe HTML or null for placeholder
}

export const tutorials: Tutorial[] = [
  {
    id: "tutorial-1",
    index: "01",
    label: "Getting Started",
    title: "Getting Started with the Website",
    description:
      "A complete orientation to your new workspace — from first login to finding your first project brief.",
    steps: [
      {
        title: "Log in & set your password",
        body: "Navigate to the team portal and use the invite link from your welcome email. Set a strong password and save it to your password manager.",
      },
      {
        title: "Explore the dashboard",
        body: "Your dashboard shows active projects, upcoming deadlines, and any unread messages from the project team.",
      },
      {
        title: "Locate your project queue",
        body: 'Head to the "My Projects" tab to see everything currently assigned to you. Projects are sorted by due date by default.',
      },
      {
        title: "Read a project brief",
        body: "Click any project card to open the brief — it contains scope, source language, target language, tone guidelines, and file attachments.",
      },
    ],
    videoEmbed: null,
  },
  {
    id: "tutorial-2",
    index: "02",
    label: "Submitting Work",
    title: "Submitting Completed Translations",
    description:
      "A walkthrough of the full submission flow — uploading files, adding context notes, and closing out a project correctly.",
    steps: [
      {
        title: "Open the project",
        body: "From \"My Projects,\" click the project you've completed. Confirm you're looking at the correct version of the source file.",
      },
      {
        title: "Upload your translation file",
        body: "Click \"Submit Translation,\" then drag and drop or browse for your finished file. Accepted formats: .docx, .xlsx, .txt, or .pdf.",
      },
      {
        title: "Add reviewer notes",
        body: "Use the notes field to flag anything unusual — ambiguous source text, cultural adaptations you made, or terminology decisions.",
      },
      {
        title: "Mark as complete",
        body: 'Hit "Submit for Review." The project moves to the review queue and you\'ll receive a confirmation email. Your dashboard updates automatically.',
      },
    ],
    videoEmbed: null,
  },
  {
    id: "tutorial-3",
    index: "03",
    label: "Your Profile",
    title: "Managing Your Profile & Availability",
    description:
      "Keep your language pairs, availability windows, and contact details current so the right projects always reach you.",
    steps: [
      {
        title: "Go to your profile settings",
        body: 'Click your avatar in the top right corner and select "Profile." This is your single source of truth for the project team.',
      },
      {
        title: "Update your language pairs",
        body: "Add or remove source/target language pairs. Only projects matching your pairs will appear in your queue.",
      },
      {
        title: "Set your availability",
        body: "Use the availability calendar to block out time off or limit project volume during busy periods. This prevents overbooking.",
      },
      {
        title: "Configure notifications",
        body: "Choose how you receive project alerts — email, in-app, or both. We recommend email for new assignments and in-app for messages.",
      },
    ],
    videoEmbed: null,
  },
];
