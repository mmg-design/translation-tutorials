import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9eiem856",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export interface SanityTutorial {
  _id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  videoEmbedUrl: string | null;
  order: number;
}

export async function getTutorials(): Promise<SanityTutorial[]> {
  return client.fetch(
    `*[_type == "tutorial"] | order(order asc) {
      _id, label, title, description, videoEmbedUrl, order
    }`
  );
}
