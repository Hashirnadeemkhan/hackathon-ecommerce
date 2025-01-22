import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn: true, // You can keep this true for your case
})