import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const artwork = defineCollection({
  name: 'artwork',
  directory: 'content/artwork',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    collection: z.string(),
    description: z.string(),
    year: z.string(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
})

export default defineConfig({
  collections: [artwork],
})
