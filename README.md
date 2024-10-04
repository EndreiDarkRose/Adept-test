# Тестовое задание: Виртуализация списка с добавлением и удалением строк

Данное тестовое задание включает реализацию одностраничного приложения на React с использованием Redux Toolkit и TypeScript. Основная цель — создать таблицу с виртуализированным списком, поддерживающую добавление новых элементов и удаление выбранных строк.

## Стек технологий

React — библиотека для построения пользовательских интерфейсов.
Redux Toolkit — управление состоянием приложения.
TypeScript — строгая типизация для предотвращения ошибок на этапе разработки.
react-window — виртуализация списка для оптимизации рендеринга.
Sass — стилизация компонентов.

### Установка и запуск проекта

Клонирование репозитория:

```bash
git clone https://github.com/EndreiDarkRose/Adept-test
cd adept
```

### Установка зависимостей:

Выполните команду для установки всех необходимых пакетов:

```bash
npm install
```

### Запуск приложения:

Для запуска приложения в режиме разработки используйте команду:

```bash
npm run start
```

### Структура проекта

```bash
src/
│
├── app/
│   ├── features/
│   │   ├── company/           # Модуль управления компаниями
│   │   │   ├── components/    # Компоненты, связанные с компаниями
│   │   │   │   ├── CompanyTable.tsx
│   │   │   │   ├── CompanyRow.tsx
│   │   │   │   └── CompanyForm.tsx
│   │   │   ├── ui/            # UI компоненты
│   │   │   │   └── ControlPanel.tsx
│   │   │   └── redux/         # Redux Slice и хранилище
│   │   │       ├── companySlice.ts  # Redux Slice для управления компаниями
│   │   │       ├── store.ts         # Конфигурация Redux store
│   │   │       └── types.ts         # Типы данных для модуля компаний
│   │   └── helpers/          # Вспомогательные функции и данные
│   │       └── initialCompanies.ts  # Начальные данные для компаний
│
├── App.scss               # Основные стили приложения
├── App.tsx                # Главный компонент приложения
├── index.css              # Глобальные стили приложения
├── index.tsx              # Входная точка приложения
├── react-app-env.d.ts     # Определения окружения для TypeScript
├── logo.svg               # Логотип приложения
│
├── .gitignore             # Игнорируемые файлы Git
├── package-lock.json      # Лок-файл зависимостей npm
├── package.json           # Метаданные и зависимости проекта
├── tsconfig.json          # Конфигурация TypeScript
└── README.md              # Документация проекта
```
