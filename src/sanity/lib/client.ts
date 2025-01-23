import { createClient } from 'next-sanity'
// import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  apiVersion: '2024-12-31',
  dataset: "production",
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token :process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true, // You can keep this true for your case
})
