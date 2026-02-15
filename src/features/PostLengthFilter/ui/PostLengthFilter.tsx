import './PostLengthFilter.css'
import { useCallback } from 'react'

type Props = {
  minLength: number
  maxLength: number
  onFilterChange: (min: number, max: number) => void
}

export const PostLengthFilter = ({
  minLength,
  maxLength,
  onFilterChange,
}: Props) => {
  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = Number(e.target.value)
      if (newMin <= maxLength) {
        onFilterChange(newMin, maxLength)
      }
    },
    [maxLength, onFilterChange]
  )

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = Number(e.target.value)
      if (newMax >= minLength) {
        onFilterChange(minLength, newMax)
      }
    },
    [minLength, onFilterChange]
  )

  return (
    <aside className="post-length-filter">
      <div className="post-length-filter__title">Фильтр по длине</div>
      
      <div className="post-length-filter__group">
        <label className="post-length-filter__label">
          <span className="post-length-filter__label-text">Мин:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={minLength}
            onChange={handleMinChange}
            className="post-length-filter__slider"
            style={{
              '--value': minLength,
              '--max': 100,
            } as React.CSSProperties & {[key: string]: number}}
          />
          <span className="post-length-filter__value">{minLength}</span>
        </label>
      </div>

      <div className="post-length-filter__group">
        <label className="post-length-filter__label">
          <span className="post-length-filter__label-text">Макс:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={maxLength}
            onChange={handleMaxChange}
            className="post-length-filter__slider"
            style={{
              '--value': maxLength,
              '--max': 100,
            } as React.CSSProperties & {[key: string]: number}}
          />
          <span className="post-length-filter__value">{maxLength}</span>
        </label>
      </div>

      <div className="post-length-filter__range-display">
        {minLength} - {maxLength}
      </div>
    </aside>
  )
}
