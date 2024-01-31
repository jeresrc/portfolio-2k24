import React from 'react'

export function Footer() {
  return (
    <footer
      className='flex w-full items-center justify-end gap-4 border-t-[1px]
      border-t-border px-4 py-2 '
    >
      <p>© {new Date().getFullYear()} Jeremias Soruco</p>
    </footer>
  )
}
