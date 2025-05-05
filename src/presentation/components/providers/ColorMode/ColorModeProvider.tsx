import { PaletteModeContext } from '@/application/Contexts/PaletteMode/PaletteModeContext'
import type { PaletteMode } from '@mui/material'
import { useState } from 'react'

export const ColorModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>('dark')

  const togglePaletteMode = () => {
    setPaletteMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <PaletteModeContext.Provider
      value={{
        paletteMode,
        togglePaletteMode,
      }}
    >
      {children}
    </PaletteModeContext.Provider>
  )
}
