import { createPortal } from 'react-dom'
import './Modal.css'
import type { ReactNode } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose} aria-label="Закрыть модальное окно">
            ×
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </>,
    document.body
  )
}
