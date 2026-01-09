# Tasks: Add Checkout Feature

- [x] Add `clearCart` to CartContext <!-- id: 0 -->
  - **Details**: Add method to empty the `items` array and clear `localStorage`. Update interface.
  - **Verify**: Inspect `CartContext` or run app and verify functionality. (Visual check or unit test if we add one for CartContext).

- [x] Implement Checkout Form Validation Logic <!-- id: 1 -->
  - **Details**: Create `src/utils/validation.ts`. Validate required fields (name, email, address, zip).
  - **Test**: `src/utils/validation.test.ts` (Create FIRST).
  - **Verify**: `npx vitest run src/utils/validation.test.ts`

- [x] Create Checkout Page Layout & Components <!-- id: 2 -->
  - **Details**: `src/pages/CheckoutPage.tsx`. Include `CheckoutForm` and `OrderSummary`. Use Brutalist styling.
  - **Verify**: `npm run build`

- [x] Connect Checkout Flow <!-- id: 3 -->
  - **Details**: 
    - Add `/checkout` route in `App.tsx`.
    - Link "Checkout" button in `CartDrawer` to `/checkout`.
    - Handle form submission -> call `clearCart` -> redirect to `/checkout/success`.
  - **Verify**: `npm run build`

- [x] Create Success Page <!-- id: 4 -->
  - **Details**: `src/pages/OrderSuccessPage.tsx`. Add route `/checkout/success`.
  - **Verify**: `npm run build`
