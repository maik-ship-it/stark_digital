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
        className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-colors duration-200 ${
          active === ''
            ? 'border-amber text-amber bg-amber-glow'
            : 'border-surface-2 text-text-muted hover:border-surface-3 hover:text-text-secondary'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setTag(tag)}
          className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-colors duration-200 ${
            active === tag
              ? 'border-amber text-amber bg-amber-glow'
              : 'border-surface-2 text-text-muted hover:border-surface-3 hover:text-text-secondary'
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
