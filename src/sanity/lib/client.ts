import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.toLowerCase().replace(/[^a-z0-9-]/g, "-") || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-02-22",
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
})

