"use client"

import { GlobalStyles } from "@/styles/global"
import { theme } from "@/styles/theme"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
