import { useState } from 'react'
import './index.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui'
import { Button } from '../../shared/ui/Button'
import { Modal } from '../../shared/ui/Modal'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <h1>Список постов</h1>
        <div className="site-header__controls">
          <Button
            label="О проекте"
            onClick={() => setIsModalOpen(true)}
            variant="secondary"
          />
          <ThemeSwitcher />
        </div>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="О проекте"
      >
        <p>
          Приложение для управления списком постов, реализованное на React с использованием
          современных паттернов и лучших практик.
        </p>
        <h3>Особенности:</h3>
        <ul>
          <li>Поддержка светлой и тёмной темы</li>
          <li>Модальные окна через React.Portal</li>
          <li>Контекст для управления состоянием темы</li>
          <li>Компоненты с чистой архитектурой</li>
        </ul>
      </Modal>
    </>
  )
}
