'use client'
import {useCurrentSection} from '@/store/currentSection'
import {useEffect} from 'react'

export default function SectionObersver() {
  const setCurrent = useCurrentSection((store) => store.setCurrent)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.1) {
            setCurrent(entry.target.id)
          }
        })
      },
      {threshold: [0, 1]}
    )

    document.querySelectorAll('section').forEach((t) => {
      if (!t.id) return
      observer.observe(t)
    })
  }, [setCurrent])

  return null
}
