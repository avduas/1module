import './Button.css'
import type { MouseEventHandler } from 'react'

interface Props {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ label, onClick, variant = 'primary', type = 'button' }: Props) => {
  return (
    <button className={`button button--${variant}`} onClick={onClick} type={type}>
      {label}
    </button>
  )
}
