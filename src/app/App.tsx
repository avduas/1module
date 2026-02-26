import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/shared/lib/theme'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import { router } from './providers/router/router'
import { store } from './providers/store'

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  )
}

