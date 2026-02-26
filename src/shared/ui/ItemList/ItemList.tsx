import type { PropsWithChildren, ReactNode } from 'react'

export type KeyExtractor<T> = (item: T) => string | number

export type ItemListProps<T> = PropsWithChildren<{
  items: T[]
  renderItem: (item: T) => ReactNode
  keyExtractor?: KeyExtractor<T>
  className?: string
}>

export function ItemList<T>({ items, renderItem, keyExtractor, className }: ItemListProps<T>) {
  return (
    <div className={className}>
      {items.map(item => {
        const key = keyExtractor ? keyExtractor(item) : (item as any).id ?? Math.random()
        return (
          <div key={String(key)}>
            {renderItem(item)}
          </div>
        )
      })}
    </div>
  )
}
