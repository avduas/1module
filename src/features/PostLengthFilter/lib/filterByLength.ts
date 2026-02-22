export const filterByLength = <T extends { title: string }>(
  items: T[],
  minLength: number,
  maxLength: number
): T[] => {
  return items.filter(item => {
    const titleLength = item.title.length
    return titleLength >= minLength && titleLength <= maxLength
  })
}
