import React from 'react'

export function Footer() {
  return (
    <footer
      className='flex w-full items-center justify-end gap-4 border-t-[1px] border-[#0004]
      border-t-[#e5e5e5] px-4 py-2 dark:border-[#fff4]'
    >
      <p>© {new Date().getFullYear()} Jeremias Soruco</p>
    </footer>
  )
}
