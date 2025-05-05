import { createContext } from 'react'
import type { IPaletteModeContext } from '@/application/Contexts/PaletteMode/PaletteModeContext.types'

const PALETTE_MODE_CONTEXT_INITIAL_STATE: IPaletteModeContext = {
  paletteMode: 'dark',
  togglePaletteMode: () => {},
}

export const PaletteModeContext = createContext(PALETTE_MODE_CONTEXT_INITIAL_STATE)
