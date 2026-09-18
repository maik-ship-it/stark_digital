'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

interface BlogTagFilterProps {
  tags: string[]
}

function TagButtons({ tags }: BlogTagFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('tag') ?? ''

  const setTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (tag === active || tag === '') {
      params.delete('tag')
    } else {
      params.set('tag', tag)
    }
    router.push(`/blog${params.size > 0 ? `?${params.toString()}` : ''}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setTag('')}
        className={`label px-4 py-2 rounded-full border transition-colors duration-200 ${
          active === ''
            ? 'border-orange text-orange'
            : 'border-paper-3 text-text-soft hover:border-ink hover:text-text'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setTag(tag)}
          className={`label px-4 py-2 rounded-full border transition-colors duration-200 ${
            active === tag
              ? 'border-orange text-orange'
              : 'border-paper-3 text-text-soft hover:border-ink hover:text-text'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export default function BlogTagFilter({ tags }: BlogTagFilterProps) {
  return (
    <Suspense>
      <TagButtons tags={tags} />
    </Suspense>
  )
}
