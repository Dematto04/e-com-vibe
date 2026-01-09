# Add Wishlist Feature

## Why
Users frequently want to save items they are interested in but not ready to purchase immediately. A wishlist increases user retention and allows for longer consideration periods.

## What Changes
We are introducing a client-side Wishlist feature.
- **New Context**: `WishlistContext` for state management using `localStorage`.
- **UI Updates**:
    - `ProductCard`: New "Heart" toggle button.
    - `Navbar`: Link to the wishlist page.
    - `WishlistPage`: New page display saved items.

## Verification
We are introducing `vitest` to the project to enable TDD for the logic portion (Context), following the project's reliability protocols.
