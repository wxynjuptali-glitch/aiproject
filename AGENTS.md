# AGENTS.md - AI Project Development Guide

## Overview

This is a minimal Node.js project. The codebase currently consists of a single `index.js` file.

## Build / Run Commands

```bash
# Run the application
node index.js

# Or with npm (if package.json is added)
npm start
```

### Testing

```bash
# Run a single test file
npm test -- <test-file-path>

# Or with npx
npx jest <test-file-path>
npx mocha <test-file-path>
npx vitest run <test-file-path>
```

### Linting

```bash
# ESLint
npx eslint .
npx eslint <file-path>

# Run with auto-fix
npx eslint . --fix
```

## Code Style Guidelines

### General

- Use JavaScript (ES6+) or TypeScript for new files
- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Maximum line length: 100 characters

### Naming Conventions

- **Files**: camelCase (e.g., `userService.js`, `apiHelper.ts`)
- **Classes**: PascalCase (e.g., `UserService`, `ApiClient`)
- **Functions/variables**: camelCase (e.g., `getUserData`, `isActive`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **Boolean variables**: Prefix with `is`, `has`, `should`, `can` (e.g., `isLoggedIn`)

### Imports

```javascript
// Order: external → internal → relative
import fs from 'fs';
import axios from 'axios';
import { helperFunc } from '../utils/helper';
import { myModule } from './myModule';
```

### Functions

```javascript
// Prefer arrow functions for callbacks
const myFunc = (arg1, arg2) => {
  return arg1 + arg2;
};

// Use async/await over raw promises
async function fetchData() {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
}
```

### Error Handling

```javascript
// Always use try-catch for async operations
try {
  await riskyOperation();
} catch (error) {
  // Log error with context
  console.error('Operation failed:', { error, context });
  // Re-throw or handle appropriately
  throw new CustomError('Message', error);
}

// Always validate inputs
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
  if (b === 0) {
    throw new RangeError('Cannot divide by zero');
  }
  return a / b;
}
```

### Types

- Use JSDoc comments for type hints in JS files:
```javascript
/**
 * @param {string} name
 * @param {number} age
 * @returns {Promise<User>}
 */
async function getUser(name, age) { }
```

- Prefer TypeScript for new code with strict mode enabled

### File Organization

```
src/
  ├── controllers/    # Request handlers
  ├── services/      # Business logic
  ├── models/        # Data models
  ├── utils/        # Helper functions
  ├── config/       # Configuration
  └── index.js      # Entry point
tests/
  ├── unit/         # Unit tests
  └── integration/ # Integration tests
```

### Git Conventions

- Branch naming: `feature/description`, `fix/description`, `refactor/description`
- Commit messages: imperative mood, first line under 50 chars
- Use meaningful commit messages describing what and why, not how

### Recommended Tools

- **Testing**: Jest, Mocha, or Vitest
- **Linting**: ESLint with Airbnb or Standard config
- **Formatting**: Prettier
- **Type Checking**: TypeScript or JSDoc with TypeScript

### Dependencies

- Keep dependencies minimal
- Use `npm audit` regularly to check for vulnerabilities
- Pin dependency versions in production (use exact versions or ranges with care)
