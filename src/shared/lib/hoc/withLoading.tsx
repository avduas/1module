import type { ComponentType } from 'react'

interface WithLoadingProps {
  isLoading: boolean
  error?: string
}

export function withLoading<P extends WithLoadingProps>(
  Component: ComponentType<P>
): ComponentType<P> {
  return function WithLoadingComponent(props: P) {
    if (props.isLoading) {
      return <div className="loading">Загрузка...</div>
    }

    if (props.error) {
      return <div className="error">Ошибка: {props.error}</div>
    }

    return <Component {...props} />
  }
}
