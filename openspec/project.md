# Project Context

## Purpose
This project is an e-commerce application called "Vibe E-COM", aimed at providing a modern, stylish online shopping experience. The goal is to build a responsive web app for browsing and purchasing products, with a focus on user-friendly design and performance.

## Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint with TypeScript and React plugins
- **Language**: TypeScript (strict mode enabled)

## Project Conventions
**Buttons and links**: Always have cursor pointer

## 🛡️ Self-Healing & TDD Protocol

### 1. Planning Rules (Proposal Phase)
When generating `tasks.md` for any new feature or bug fix, you must structure the tasks to enforce verification:
* **Task Structure:** Every implementation task must be paired with a verification task.
* **TDD Priority:** For logic changes, schedule the creation of a failing test *before* the implementation code.
* **Command Explicit:** In `tasks.md`, explicitly write the exact terminal command needed to verify the step (e.g., `npm test tests/auth.test.ts`).

### 2. Execution Rules (Apply Phase)
When executing the plan, adhere to this **Self-Correction Loop**:
1.  **Execute:** Write the code for the current task.
2.  **Verify:** Immediately run the test command specified in the task.
3.  **Analyze:**
    * If **PASS**: Check the box and move to the next task.
    * If **FAIL**: Do NOT move forward. Read the error log, reason about the cause, and apply a fix.
4.  **Retry Limit:** You are authorized to attempt **3 self-correction cycles**. If the test still fails after 3 attempts, stop execution and ask the user for guidance.

**CRITICAL:** Never mark a task as completed if the verification command returns a non-zero exit code.
### Code Style
- Use TypeScript with strict compiler options (noUnusedLocals, noUnusedParameters, etc.)
- Follow ESLint recommended rules for TypeScript and React
- Use functional components with hooks in React
- Naming conventions: camelCase for variables/functions, PascalCase for components
- File extensions: .tsx for React components, .ts for utilities

### Architecture Patterns
- Component-based architecture using React
- Use of hooks for state management (currently basic useState, expandable to context or Zustand if needed)
- Modular file structure:
  - `src/components`: UI components (layout, product, ui)
  - `src/pages`: Page components
  - `src/api`: API integration utilities
  - `src/types`: TypeScript interfaces
- Vite for fast development and optimized builds

### Testing Strategy
- No testing framework configured yet; plan to add Vitest or Jest for unit and integration tests
- Aim for test coverage on critical components and business logic

### Git Workflow
- Use feature branches for development
- Commit messages: descriptive, imperative mood (e.g., "Add user authentication")
- Pull requests for code review before merging to main

## Domain Context
- E-commerce domain: products, categories, shopping cart, user accounts
- Focus on UI/UX for browsing, searching, and purchasing
- Potential features: product listings, cart management, checkout process

## Important Constraints
- Browser compatibility: Modern browsers supporting ES2022
- Performance: Optimize for fast loading with Vite's build optimizations
- Accessibility: Follow WCAG guidelines for inclusive design

## External Dependencies
- **dummyjson.com**: Used for fetching product data
- **AOS**: Used for scroll animations
- Future integrations may include payment gateways (e.g., Stripe)
