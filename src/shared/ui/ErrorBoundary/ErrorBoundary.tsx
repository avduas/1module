import { Component, type ErrorInfo, type ReactNode } from 'react'
import { MainLayout } from '../../layouts/MainLayout'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Что-то пошло не так</h1>
            <p style={{ color: 'var(--muted)' }}>
              {this.state.error?.message || 'Неизвестная ошибка'}
            </p>
            <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              Вернуться на главную
            </a>
          </div>
        </MainLayout>
      )
    }

    return this.props.children
  }
}
