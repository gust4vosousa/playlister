import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from '@/presentation/components/providers/App/AppProvider.tsx'
import { ColorModeProvider } from '@/presentation/components/providers/ColorMode/ColorModeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <AppProvider />
    </ColorModeProvider>
  </StrictMode>
)
