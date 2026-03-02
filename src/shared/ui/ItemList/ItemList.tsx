import type { ReactNode } from 'react'

export type ItemListProps<T> = {
  /**
   * Array of items to render. Keys for each item should be provided by
   * `renderItem` (or by using `getKey` if you extend this component later).
   */
  items: T[]
  /**
   * Render function for a single item. It's the caller's responsibility to
   * assign a stable `key` to the root element returned from this function.
   */
  renderItem: (item: T) => ReactNode
}

/**
 * Simple generic list helper. The component only takes the array and a
 * render function – the caller controls styling, wrappers and keys.
 *
 * Having a shared `ItemList` avoids repeating the `items.map` pattern in
 * every widget and makes it easier to change list behaviour in one place.
 */
export function ItemList<T>({ items, renderItem }: ItemListProps<T>) {
  return <>{items.map(renderItem)}</>
}
