import { defineConfig, defineCollection, s } from 'velite'

const blog = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    title: s.string(),
    description: s.string(),
    date: s.isodate(),
    slug: s.slug('blog'),
    tags: s.array(s.string()).optional(),
    published: s.boolean().default(true),
    readingTime: s.number().optional(),
  }).transform(data => ({
    ...data,
    permalink: `/blog/${data.slug}`,
  }))
})

const caseStudies = defineCollection({
  name: 'CaseStudy',
  pattern: 'case-studies/**/*.mdx',
  schema: s.object({
    title: s.string(),
    client: s.string(),
    industry: s.string(),
    location: s.string(),
    slug: s.slug('case-studies'),
    metrics: s.array(s.object({
      label: s.string(),
      value: s.string(),
    })),
    published: s.boolean().default(true),
  })
})

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
  },
  collections: { blog, caseStudies },
})
