import { Box } from '@mui/material'

export const ScreenProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>
}
