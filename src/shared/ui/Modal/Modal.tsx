import { createPortal } from 'react-dom'
import './Modal.css'
import type { ReactNode } from 'react'

interface ModalContextType {
  isOpen: boolean
  onClose: () => void
}

// ===== Header Component =====
interface ModalHeaderProps {
  children: ReactNode
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <div className="modal__header">{children}</div>
}

// ===== Body Component =====
interface ModalBodyProps {
  children: ReactNode
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className="modal__body">{children}</div>
}

// ===== Footer Component =====
interface ModalFooterProps {
  children: ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="modal__footer">{children}</div>
}

// ===== Close Button Component =====
interface ModalCloseProps {
  onClick: () => void
}

const ModalClose = ({ onClick }: ModalCloseProps) => {
  return (
    <button
      className="modal__close"
      onClick={onClick}
      aria-label="Закрыть модальное окно"
    >
      ×
    </button>
  )
}

// ===== Main Modal Component =====
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const ModalRoot = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal">
        {children}
      </div>
    </>,
    document.body
  )
}

// ===== Compound Component =====
export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
})
