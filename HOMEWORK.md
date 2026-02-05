# Домашнее задание 1: React Context, Modal и Theme Switcher

## Реализованные функции

### 1. **ThemeContext и переключение темы**
- ✅ `src/shared/lib/theme/ThemeContext.ts` — контекст для управления темой
- ✅ `src/shared/lib/theme/ThemeProvider.tsx` — провайдер с сохранением в localStorage
- ✅ `src/shared/lib/theme/useTheme.ts` — хук для использования темы в компонентах
- ✅ CSS переменные для светлой и темной темы в `src/styles.css`

### 2. **ThemeSwitcher компонент**
- ✅ `src/features/ThemeSwitcher/ui/ThemeSwitcher.tsx` — кнопка переключения темы
- ✅ Иконки: 🌙 для темной темы, ☀️ для светлой
- ✅ ARIA labels для доступности

### 3. **Button компонент**
- ✅ `src/shared/ui/Button/Button.tsx` — переиспользуемый компонент кнопки
- ✅ Варианты: `primary` и `secondary`
- ✅ Поддержка различных типов (button, submit, reset)
- ✅ Стилизация в `Button.css`

### 4. **Modal компонент с React.Portal**
- ✅ `src/shared/ui/Modal/Modal.tsx` — модальное окно через Portal
- ✅ Оверлей для закрытия по клику
- ✅ Кнопка закрытия (×)
- ✅ ARIA labels и семантическая разметка
- ✅ Стилизация с фиксированным позиционированием

### 5. **Модальное окно "О проекте"**
- ✅ Интегрировано в `src/widgets/LayoutHeader/index.tsx`
- ✅ Кнопка "О проекте" с variant="secondary"
- ✅ Описание функций приложения

### 6. **React.Fragment и key в списках**
- ✅ `src/widgets/PostList/index.tsx` использует Fragment с key
- ✅ Правильная подстановка key для React reconciliation

## Структура файлов

```
src/
├── shared/
│   ├── lib/
│   │   └── theme/
│   │       ├── ThemeContext.ts
│   │       ├── ThemeProvider.tsx
│   │       ├── useTheme.ts
│   │       └── index.ts
│   └── ui/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.css
│       │   └── index.ts
│       └── Modal/
│           ├── Modal.tsx
│           ├── Modal.css
│           └── index.ts
└── features/
    └── ThemeSwitcher/
        └── ui/
            ├── ThemeSwitcher.tsx
            ├── ThemeSwitcher.css
            └── index.ts
```

## Инструкции для запуска

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev сервер:
```bash
npm run dev
```

3. Откройте [http://localhost:5173](http://localhost:5173)


## Особенности реализации

- **ThemeContext**: Сохраняет выбранную тему в localStorage для сохранения предпочтений
- **Modal**: Использует createPortal для рендера вне DOM иерархии
- **Accessibility**: ARIA labels и семантический HTML
- **CSS переменные**: Централизованное управление цветами и переходами между темами
- **Fragment**: Используется для обёртывания элементов без лишнего DOM узла

## Ссылки на задачи

- ✅ Реализовать ThemeContext и переключение темы
- ✅ Использовать React.Fragment и key в списках
- ✅ Модалка "О проекте" через React.Portal
- ✅ Кнопки с обработкой событий
