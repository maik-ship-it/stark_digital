import { defineConfig, defineCollection, s } from 'velite'

const blog = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    title: s.string(),
    description: s.string(),
    date: s.isodate(),
    /** Set when a post is substantially rewritten. Feeds dateModified. */
    updated: s.isodate().optional(),
    slug: s.slug('blog'),
    tags: s.array(s.string()).optional(),
    published: s.boolean().default(true),
    readingTime: s.number().optional(),
    body: s.mdx(),
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
    /** Used verbatim as the meta description, so write it as one. */
    description: s.string(),
    client: s.string(),
    industry: s.string(),
    location: s.string(),
    /** Human-readable engagement window, e.g. 'November 2025 to September 2026'. */
    period: s.string().optional(),
    slug: s.slug('case-studies'),
    date: s.isodate().optional(),
    updated: s.isodate().optional(),
    /**
     * 'draft' keeps the page reachable on its real URL for client review but
     * sends noindex and keeps it out of the sitemap. Nothing naming a client
     * goes to 'live' without written sign-off.
     */
    status: s.enum(['draft', 'live']).default('draft'),
    /** What still has to be agreed before `status` can become 'live'. */
    signOff: s.array(s.string()).default([]),
    metrics: s.array(s.object({
      label: s.string(),
      value: s.string(),
      /** How the figure was measured. Printed on the page, never hidden. */
      basis: s.string().optional(),
    })),
    published: s.boolean().default(true),
    body: s.mdx(),
  }).transform(data => ({
    ...data,
    permalink: `/case-studies/${data.slug}`,
  }))
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
