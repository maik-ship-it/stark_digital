'use client'
import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

/**
 * Scroll-triggered fade up, driven by IntersectionObserver and CSS.
 *
 * Nothing is ever hidden up front. The element is only hidden once the observer
 * has actually delivered a callback saying it is off screen, so if the observer
 * never runs, the script fails, or the browser does not support it, the content
 * simply stays visible and unanimated.
 *
 * This replaced a GSAP ScrollTrigger version that failed the other way round:
 * it hid everything immediately and left whole sections stuck at opacity 0
 * whenever its scroll measurements went stale.
 */
type Props = {
  children: ReactNode
  /** Stagger direct children instead of moving the wrapper itself. */
  stagger?: boolean
  delay?: number
  y?: number
  className?: string
  as?: ElementType
}

export default function Reveal({
  children,
  stagger = false,
  delay = 0,
  y = 28,
  className = '',
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = (stagger ? Array.from(el.children) : [el]) as HTMLElement[]
    if (targets.length === 0) return

    const show = () => targets.forEach((t) => { t.dataset.reveal = 'in' })

    /** Hide without animating the hide itself. */
    const hide = () => {
      targets.forEach((t, i) => {
        t.style.setProperty('--reveal-y', `${y}px`)
        t.style.transition = 'none'
        t.dataset.reveal = 'out'
        t.style.transitionDelay = `${delay + (stagger ? i * 0.09 : 0)}s`
      })
      requestAnimationFrame(() => {
        targets.forEach((t) => { t.style.transition = '' })
      })
    }

    let primed = false
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting)

        // First callback decides whether this element is worth animating at all.
        if (!primed) {
          primed = true
          if (visible) {
            observer.disconnect()
            return
          }
          hide()
          return
        }

        if (visible) {
          show()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      targets.forEach((t) => {
        delete t.dataset.reveal
        t.style.removeProperty('--reveal-y')
        t.style.transition = ''
        t.style.transitionDelay = ''
      })
    }
  }, [stagger, delay, y])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
