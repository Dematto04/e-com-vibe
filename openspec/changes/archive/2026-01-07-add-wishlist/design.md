# Wishlist Feature Design

## Architecture

The Wishlist feature will mirror the existing `CartContext` architecture for consistency and simplicity.

### 1. State Management (`WishlistContext`)
We will introduce a `WishlistContext` to manage the array of wishlisted products.
- **State**: `items: Product[]`
- **Persistence**: `localStorage` with key `vibe-wishlist`.
- **API**: `addToWishlist(product)`, `removeFromWishlist(productId)`, `isInWishlist(productId)`.

### 2. UI Components
- **Product Card**: A new "Heart" toggle button will be added to the `ProductCard` component.
  - **Position**: Absolute top-left of the product image (opposite the discount badge).
  - **Interaction**: Toggles presence in `WishlistContext`.
  - **Style**: Brutalist - thick borders, high contrast.
- **Wishlist Page**: A new route `/wishlist` will display the saved items.
  - **Layout**: CSS Grid, reusing `ProductCard`.
- **Navbar**: Add a Heart icon link to `/wishlist`.

## Technical Constraints & Trade-offs
- **Client-side only**: List is local to the device/browser. No cloud sync (yet).
- **TDD**: We will introduce `vitest` to support the required TDD protocol, as no test runner currently exists. This is a prerequisite for reliable logic verification.

## Data Structures
No change to `Product` type. We just store arrays of `Product`.
