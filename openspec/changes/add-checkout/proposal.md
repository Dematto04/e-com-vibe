# Add Checkout Feature

## Why
Currently, users can add items to the cart but cannot proceed to a checkout flow to "purchase" them. This completes the core e-commerce user journey.

## What Changes
- **New Page**: `CheckoutPage` with a form for shipping details.
- **New Page**: `OrderSuccessPage` for confirmation.
- **App Logic**: `CartContext` updated to support `clearCart`.
- **Validation**: New utility for form validation.

## Verification
- **Unit Tests**: Form validation logic will be TDD'd using `vitest`.
- **Build**: Routine build checks.
