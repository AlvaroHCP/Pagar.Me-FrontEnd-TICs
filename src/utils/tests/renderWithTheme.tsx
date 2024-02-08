import { theme } from "@/styles/theme"
import { RenderResult, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
