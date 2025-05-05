import { HomeScreen } from '@/presentation/screens/Home/HomeScreen'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeScreen,
  },
])
