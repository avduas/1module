import { createPortal } from 'react-dom'
import './Modal.css'
import type { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const ModalRoot = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return createPortal(
    <>
      <div className="modal-overlay" onClick={() => onClose()} />
      <div className="modal">
        {children}
      </div>
    </>,
    document.body
  )
}

const ModalHeader = ({ children }: { children: ReactNode }) => (
  <div className="modal__header">{children}</div>
)

const ModalBody = ({ children }: { children: ReactNode }) => (
  <div className="modal__body">{children}</div>
)

const ModalFooter = ({ children }: { children: ReactNode }) => (
  <div className="modal__footer">{children}</div>
)

const ModalClose = ({ onClick }: { onClick: () => void }) => (
  <button
    className="modal__close"
    onClick={() => onClick()}
    aria-label="Закрыть модальное окно"
  >
    ×
  </button>
)

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
})
