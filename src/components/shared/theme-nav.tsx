'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

// Theme nav
export function ThemeNav() {
  const { setTheme } = useTheme()

  return (
    <div>
      <div>Theme</div>
      <div>
        <div onClick={() => setTheme('light')}>Light</div>
        <div onClick={() => setTheme('dark')}>Dark</div>
        <div onClick={() => setTheme('system')}>System</div>
      </div>
    </div>
  )
}
