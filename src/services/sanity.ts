import { createClient, type ClientConfig } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2023-12-16'
}

const client = createClient(config)

const imageBuilder = imageUrlBuilder(client)

const imageUrl = (source: any) => imageBuilder.image(source)

export { client, imageUrl }