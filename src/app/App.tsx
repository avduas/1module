import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/shared/lib/theme'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import { router } from './providers/router/router'

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

