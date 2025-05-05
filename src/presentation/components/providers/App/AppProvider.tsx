import { router } from '@/application/Routes/Routes'
import { usePaletteModeContext } from '@/presentation/hooks/UsePaletteModeContext/UsePaletteModeContext'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router'

export const AppProvider: React.FC = () => {
  const { paletteMode } = usePaletteModeContext()
  const theme = createTheme({ palette: { mode: paletteMode } })

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}
