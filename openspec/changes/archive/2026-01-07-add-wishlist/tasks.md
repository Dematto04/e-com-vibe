# Tasks: Add Wishlist Feature

- [x] Install testing infrastructure (Vitest) <!-- id: 0 -->
  - **Details**: Install `vitest`, `jsdom`, `@testing-library/react`. Create `vitest.config.ts`.
  - **Verify**: `npm test -- --version` (or running a sample test)

- [x] Create WishlistContext logic <!-- id: 1 -->
  - **Details**: Implement context, provider, and hooks. Use TDD.
  - **Context**: `src/context/WishlistContext.tsx`
  - **Test**: `src/context/WishlistContext.test.tsx` (Create this FIRST)
  - **Verify**: `npx vitest run src/context/WishlistContext.test.tsx`

- [x] Add Wishlist toggle to ProductCard <!-- id: 2 -->
  - **Details**: Add heart icon button to `ProductCard`. Connect to context.
  - **Verify**: Manual verification (Visual) - Ensure button appears and toggles. Terminal verification impossible for UI visual check without E2E, but we can check if file compiles: `npm run build`

- [x] Create Wishlist Page <!-- id: 3 -->
  - **Details**: `src/pages/WishlistPage.tsx` listing items from context. Add route in `src/App.tsx`.
  - **Verify**: `npm run build`

- [x] Add Wishlist link to Navbar <!-- id: 4 -->
  - **Details**: Add icon to `src/components/layout/Navbar.tsx`.
  - **Verify**: `npm run build`
- [x] Check add to wishlist for every page that allow to add to wishlist feature <!-- id: 4 -->
  - **Details**: Implement add to wishlist feature in every page that allow add to wishlist button.
  - **Verify**: `npm run build`
