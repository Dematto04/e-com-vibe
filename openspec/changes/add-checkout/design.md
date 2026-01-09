# Checkout Feature Design

## Architecture

The checkout feature will be a client-side flow.

### 1. Routes
- `/checkout`: The main checkout page containing the form and order summary.
- `/checkout/success`: The landing page after a successful order.

### 2. State Management
- **CartContext**: Needs a `clearCart` method to empty the cart upon successful order.
- **Local State**: The checkout form (Shipping/Payment) will be managed by local React state within the page components.

### 3. Validation Logic
- We will implement a `validateCheckoutForm` utility function.
- This logic will be test-driven (TDD) using `vitest`.

## Components
- `CheckoutPage`: Main container.
- `OrderSummary`: Read-only view of cart items + total.
- `CheckoutForm`: Inputs for Name, Address, City, Zip, Card info (visual only).
- `OrderSuccessPage`: Confirmation message.

## Constraints
- **No Backend**: Order placement will be simulated.
- **Payment**: Visual fields only, no actual processing.
