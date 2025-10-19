# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**leftTar** is a user-friendly interface for visualizing guitar scales and chords across the fretboard, specifically designed for left-handed players.

This is a greenfield project. All Product Requirements should be kept in instruction files with enough details to recreate the entire project from just the requirements. The core requirement is documented in "Product Description Requirement.md".

## Project Goal

Create an interface that allows left-handed guitar players to quickly see scales and chords across the neck. The visualization should mirror the left-handed perspective (reversed from standard right-handed guitar diagrams).

## Development Context

When developing this project, keep in mind:

- **Target Users**: Left-handed guitar players who need quick reference for scales and chords
- **Key Requirement**: The fretboard visualization must be properly mirrored for left-handed orientation (low E string on right, high E string on left)
- **User Experience Priority**: Interface should be "user-friendly" and allow "quickly seeing" information - emphasize simplicity and speed of access

## Prerequisites

- **Node.js**: v20.x or higher
- **Package Manager**: yarn (standardized for this project)
- **TypeScript**: Will be installed as project dependency

## Project Setup

Initialize the project from scratch:

```bash
# Initialize package.json
yarn init -y

# Install core dependencies
yarn add react react-dom
yarn add -D typescript @types/react @types/node

# Install build tools
yarn add -D vite @vitejs/plugin-react

# Install styling
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install testing frameworks
yarn add -D vitest @testing-library/react @testing-library/jest-dom
yarn add -D playwright @playwright/test

# Install linting and formatting
yarn add -D eslint eslint-config-standard prettier
yarn add -D husky lint-staged

# Setup git hooks
npx husky init
```

## Development Commands

```bash
# Start development server
yarn dev

# Run type checking
yarn type-check

# Run unit tests
yarn test

# Run unit tests in watch mode
yarn test:watch

# Run E2E tests
yarn test:e2e

# Run linter
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Build for production
yarn build

# Preview production build
yarn preview
```

## Architecture

### Platform
Mobile-first webapp with enhancements when used on larger screens.

### Data Model
The core data model will need to represent:
- Fretboard positions (strings 1-6, frets)
- Scale patterns (note positions, intervals, root notes, chord tones)
- Scale and chord shapes include common chord variations and triads across all strings 
- Scales and chords include major, several types of minor, diminished, augemented 
- Chord shapes (fingering positions, chord names, variations)

### Visualizations
Visual rendering must account for left-handed orientation throughout. There is no right-handed mode.

### Technology Stack

**Core:**
- TypeScript throughout
- React for UI
- Tailwind CSS for styling
- SVG for guitar visualizations

**Build & Dev:**
- Vite for build tooling
- yarn for package management

**Testing:**
- Vitest + React Testing Library for unit tests
- Playwright for E2E testing

**Code Quality:**
- eslint-config-standard
- Prettier for autoformatting
- Husky for git hooks

## Project Structure

```
src/
├── components/          # React components
│   ├── Fretboard/      # Fretboard visualization
│   │   ├── Fretboard.tsx
│   │   ├── Fretboard.test.tsx
│   │   ├── CLAUDE.md   # Component-specific guidance
│   │   └── index.ts
│   ├── ScaleSelector/
│   └── ChordSelector/
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   └── musicTheory/   # Music theory calculations
├── constants/          # App constants
└── App.tsx            # Root component
```

## Style Guidelines

### Code Principles
1. **DRY** - Don't Repeat Yourself
2. **SOLID** - Follow SOLID principles
3. **Composition over inheritance** - Use React + functional programming patterns
4. **KISS** - Keep It Simple, Stupid

### Naming Conventions
- **camelCase** for variables and functions
- **PascalCase** for components and types
- **UPPER_SNAKE_CASE** for constants
- **Descriptive names** over abbreviations

### React Patterns
- Use custom hooks for shared logic
- Use small, focused components
- Document props with interfaces/types
- Avoid prop drilling - use composition or context when needed
- Prefer functional components with hooks

### Code Organization
- Use folders so component-specific features can be kept in subfolder CLAUDE.md files
- Colocate tests with source files (ComponentName.test.tsx)
- Use index files for clean imports
- Group related functionality together

### Tooling & Automation
- Run Prettier + ESLint on save
- Enforce formatting in pre-commit hooks (husky + lint-staged)
- Use TypeScript strict mode
- Keep bundle size minimal
