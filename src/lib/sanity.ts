import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9eiem856",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export interface SanityStep {
  title: string;
  body: string;
}

export interface SanityTutorial {
  _id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  steps: SanityStep[];
  videoEmbedUrl: string | null;
  order: number;
}

export async function getTutorials(): Promise<SanityTutorial[]> {
  return client.fetch(
    `*[_type == "tutorial"] | order(order asc) {
      _id, index, label, title, description, steps, videoEmbedUrl, order
    }`
  );
}
