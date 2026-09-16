# React Project Structure Task

A clean, scalable React + TypeScript project scaffold, built with [Vite](https://vite.dev),
organized following a professional folder structure for real-world applications.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management example)
- Axios (API client example)
- Zod (schema validation example)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── ui/            # Reusable UI primitives (Button, Input)
│   ├── layout/        # Layout pieces (Navbar, Footer)
│   ├── providers/     # React context providers (AppProvider)
│   ├── skeleton/       # Loading skeleton components
│   └── common/         # Shared/common components (EmptyState)
├── hooks/               # Custom React hooks (useDebounce)
├── api/                 # API client & endpoint definitions (axios, users.api)
├── types/               # Shared TypeScript types
├── store/               # Global state (Zustand store)
├── pages/               # Route-level page components
├── constants/           # App-wide constants (routes)
├── i18n/                # Internationalization config & translation files
├── assets/              # Images, icons, fonts
├── schemas/             # Validation schemas (Zod)
└── utils/               # Helper/utility functions
```

Each folder contains at least one working example file to demonstrate its intended use.
