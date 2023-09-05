'use client'

import * as React from 'react'
import { ThemeProvider as ThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemesProvider {...props}>{children}</ThemesProvider>
}
